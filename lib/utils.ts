// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// এই ফাংশনটি ডাইনামিক টেইলউইন্ড ক্লাসগুলোকে কনফ্লিক্ট ছাড়া মার্জ করতে সাহায্য করবে
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
