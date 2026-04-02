import { useState, useEffect, useRef, RefObject } from "react";

export default function useOnScreen<T extends Element>(
  options?: IntersectionObserverInit,
): [RefObject<T | null>, boolean] {
  
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
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
  }, [options]); // 

  return [ref, isVisible];
}
