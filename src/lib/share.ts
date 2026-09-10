import { Personality } from "@/types/quiz";

/** Falls back to a sane default when running somewhere without window (SSR safety). */
export function getSiteUrl(): string {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return "https://enkutatash-quiz.vercel.app";
}

export function buildShareText(personality: Personality): string {
  return `🌼 I found out what kind of person I am in 2019 E.C. 😂\n\nApparently I'm ${personality.name}.\n\nFind yours 👇`;
}

export function buildTelegramShareUrl(text: string, url: string): string {
  const params = new URLSearchParams({ url, text });
  return `https://t.me/share/url?${params.toString()}`;
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to legacy method below
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    return true;
  } catch {
    return false;
  }
}
