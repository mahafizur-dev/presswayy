import { useState, useEffect, useRef, RefObject } from "react";

// ১. হুকটিকে Generic <T> করা হলো এবং রিটার্ন টাইপ বলে দেওয়া হলো
export default function useOnScreen<T extends Element>(
  options?: IntersectionObserverInit, // IntersectionObserver এর অপশনগুলোর টাইপ
): [RefObject<T | null>, boolean] {
  // ২. Ref এর টাইপ ডিফাইন করা হলো
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Cleanup ফাংশনে ব্যবহার করার জন্য currentRef কে একটি ভেরিয়েবলে রাখা ভালো (ESLint Best Practice)
    const currentRef = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      }
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]); // ref অবজেক্টটি স্ট্যাবল, তাই এটি ডিপেন্ডেন্সি অ্যারেতে না রাখলেও চলে

  // ৩. Tuple হিসেবে রিটার্ন করা হচ্ছে
  return [ref, isVisible];
}
