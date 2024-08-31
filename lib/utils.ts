import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PrismaClient } from "@prisma/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getColor = (theme: string | undefined) => {
  const hue = Math.random() * 40 + 200; // Range between 200 and 240 (soft blues, purples)
  const saturation = theme === "dark" ? 15 + Math.random() * 10 : 30 + Math.random() * 10; // Low saturation for subtlety

  let lightness;
  if (theme === "dark") {
    lightness = 15 + Math.random() * 10; // Dark tones for dark theme
  } else {
    lightness = 85 + Math.random() * 5; // Very light tones for light theme
  }

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export const getSystemTheme = () => {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDarkTheme) {
    return "dark";
  } else {
    return "light";
  }
};

export const prismaClient = new PrismaClient();