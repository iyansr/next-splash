import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function facebookShare(url: string) {
  if (typeof window === 'undefined') return;
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

export function twitterShare(url: string) {
  if (typeof window === 'undefined') return;
  window.open(`https://twitter.com/intent/tweet?url=${url}`, '_blank');
}
