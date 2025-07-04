import { alterHexColor } from "./colors";
import { svg } from "./svg";
import type { SvgProps, VisageConfig } from "./types";

export * from "./types";

export function visage(selector: string, cfg: VisageConfig) {
  const element = document.querySelector(selector) as HTMLElement;
  if (!element) {
    return;
  }

  const svgProps: SvgProps = {
    ...cfg,
    faceStroke: alterHexColor(cfg.skinFill, 0.2),
    clothingStroke: alterHexColor(cfg.clothingFill),
    hairStroke: alterHexColor(cfg.hairFill, 0.1),
    mouthFill: alterHexColor(cfg.skinFill, 0.1),
  };

  element.style.setProperty("--backgroundFill", svgProps.backgroundFill);
  element.style.setProperty("--clothingFill", svgProps.clothingFill);
  element.style.setProperty("--clothingStroke", svgProps.clothingStroke);
  element.style.setProperty("--skinFill", svgProps.skinFill);
  element.style.setProperty("--faceStroke", svgProps.faceStroke);
  element.style.setProperty("--mouthFill", svgProps.mouthFill);
  element.style.setProperty("--hairFill", svgProps.hairFill);
  element.style.setProperty("--hairStroke", svgProps.hairStroke);
  element.style.setProperty("--eyeFill", svgProps.eyesFill);

  element.setAttribute("data-eyes-variant", `${cfg.eyesVariant}`);
  element.setAttribute("data-mouth-variant", `${cfg.mouthVariant}`);
  element.setAttribute("data-face-variant", `${cfg.faceVariant}`);
  element.setAttribute("data-hair-variant", `${cfg.hairVariant}`);
  element.setAttribute("data-eyebrows-variant", `${cfg.eyebrowsVariant}`);
  element.setAttribute("data-clothing-variant", `${cfg.clothingVariant}`);

  element.innerHTML = `
    <div class="visage">${svg()}</div>
  `;
}
