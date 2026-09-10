import { toPng } from "html-to-image";

/**
 * Renders the given node to a PNG data URL at a fixed high resolution
 * (regardless of how small it's shown on screen) so the download always
 * looks crisp on Telegram/WhatsApp/Instagram.
 */
export async function nodeToPngDataUrl(
  node: HTMLElement,
  options?: { width?: number; height?: number }
): Promise<string> {
  // A couple of render passes helps fonts/emoji settle before we snapshot.
  await document.fonts?.ready?.catch(() => undefined);

  return toPng(node, {
    cacheBust: true,
    pixelRatio: 1,
    width: options?.width,
    height: options?.height,
    backgroundColor: undefined,
  });
}

export function downloadDataUrl(dataUrl: string, filename: string) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
