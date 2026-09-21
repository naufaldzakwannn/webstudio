import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Menggabungkan class Tailwind secara kondisional tanpa konflik utility.
 * Dipakai oleh komponen UI yang punya beberapa variant (mis. Button).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
