import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("ar-IQ", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatCurrency(amount: number, currency: string = "IQD"): string {
  return new Intl.NumberFormat("en-IQ", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours > 0) {
    return `${hours} ساعة ${minutes} دقيقة`;
  }
  if (minutes > 0) {
    return `${minutes} دقيقة ${secs} ثانية`;
  }
  return `${secs} ثانية`;
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}
