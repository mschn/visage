import { alterHexColor } from "./colors";
import { svg } from "./svg";
import {
  VisageColors,
  VisageVariantCount,
  type StringKeys,
  type SvgProps,
  type VisageConfig,
  type VisageEditorCb,
  type VisageVariantKey,
} from "./types";

export function visageEditor(
  selector: string,
  cfg: VisageConfig,
  onChange: VisageEditorCb
) {
  const cb = (config: Partial<VisageConfig>) => {
    render(selector, { ...cfg, ...config }, cb);
    onChange(config);
  };
  render(selector, cfg, cb);
}

function render(selector: string, cfg: VisageConfig, onChange: VisageEditorCb) {
  const element = document.querySelector(selector);
  if (!element) {
    return;
  }
  element.innerHTML = "";
  const editor = document.createElement("div");
  editor.classList.add("visage-editor");
  editor.append(
    getColorControl(cfg, onChange, "backgroundFill", "Background"),
    getColorControl(cfg, onChange, "bodyFill", "Body"),
    getColorChoiceControl(cfg, onChange, "faceFill", "Skin", VisageColors.skin),
    getColorChoiceControl(cfg, onChange, "eyesFill", "Eyes", VisageColors.eyes),
    getColorChoiceControl(cfg, onChange, "hairFill", "Hair", VisageColors.hair),

    getVariantControl(
      cfg,
      onChange,
      "Face",
      "faceVariant",
      (_svgProps: SvgProps, variant: number) => {
        return `<div data-face-variant="${variant}">
          ${svg("50", "20", "68 115 60 30")}
        <div>`;
      }
    ),

    getVariantControl(
      cfg,
      onChange,
      "Eyes",
      "eyesVariant",
      (_svgProps: SvgProps, variant: number) => {
        return `<div data-eyes-variant="${variant}" data-face-variant=1>
          ${svg("50", "20", "65 76 30 10")}
        <div>`;
      }
    ),
    getVariantControl(
      cfg,
      onChange,
      "Mouth",
      "mouthVariant",
      (_svgProps: SvgProps, variant: number) => {
        return `<div data-mouth-variant="${variant}" data-face-variant=1>
          ${svg("50", "20", "80 113 40 10")}
        <div>`;
      }
    )
  );
  element?.appendChild(editor);
}

function getColorControl(
  cfg: VisageConfig,
  onChange: VisageEditorCb,
  key: StringKeys<VisageConfig>,
  labelText: string
) {
  const input = document.createElement("input");
  input.type = "color";
  input.id = "editor-" + key;
  input.value = cfg[key];
  input.addEventListener("change", () => {
    onChange({ [key]: input.value });
  });
  const label = document.createElement("label");
  label.htmlFor = "editor-" + key;
  label.innerHTML = labelText;
  const div = document.createElement("div");
  div.classList.add("formgroup");
  div.append(label, input);
  return div;
}

function getColorChoiceControl(
  cfg: VisageConfig,
  onChange: VisageEditorCb,
  key: StringKeys<VisageConfig>,
  labelText: string,
  colors: string[]
) {
  const div = document.createElement("div");
  div.classList.add("formgroup");

  const label = document.createElement("label");
  label.innerHTML = labelText;
  div.appendChild(label);

  for (const color of colors) {
    const button = document.createElement("button");
    button.classList.add("choice");
    button.style.backgroundColor = color;
    if (cfg[key] === color) {
      button.classList.add("selected");
    }
    button.addEventListener("click", () => {
      onChange({ [key]: color });
    });
    div.appendChild(button);
  }

  return div;
}

function getVariantControl(
  cfg: VisageConfig,
  onChange: VisageEditorCb,
  labelText: string,
  key: VisageVariantKey,
  previewCb: (svgProps: SvgProps, variant: number) => string
) {
  const label = document.createElement("label");
  label.innerHTML = labelText;
  const div = document.createElement("div");
  div.classList.add("formgroup");
  div.append(label);

  const svgProps: SvgProps = {
    ...cfg,
    faceStroke: alterHexColor(cfg.faceFill, 0.2),
    bodyStroke: alterHexColor(cfg.bodyFill),
    hairStroke: alterHexColor(cfg.hairFill, -0.1),
    mouthFill: alterHexColor(cfg.faceFill, 0.1),
    faceFill: "white",
  };

  for (let i = 0; i < VisageVariantCount[key]; i++) {
    const preview = document.createElement("button");
    preview.setAttribute("data-preview", key);
    preview.setAttribute("data-variant", `${i + 1}`);
    if (i + 1 === cfg[key]) {
      preview.classList.add("selected");
    }
    preview.addEventListener("click", () => {
      const previews = document.querySelectorAll(`button[data-preview=${key}]`);
      for (const p of previews) {
        if (p.getAttribute("data-variant") === `${i + 1}`) {
          p.classList.add("selected");
        } else {
          p.classList.remove("selected");
        }
      }
      onChange({ [key]: i + 1 });
    });
    preview.innerHTML = previewCb(svgProps, i + 1);
    div.appendChild(preview);
  }

  return div;
}
