import { alterHexColor } from "./colors";
import { decodeConfig, encodeConfig } from "./encode";
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
    getCodeControl(cfg, onChange),

    getBlock("Background", [
      getColorControl(cfg, onChange, "backgroundFill", "Color"),
    ]),

    getBlock("Body", [
      getColorControl(cfg, onChange, "bodyFill", "Color"),
      getVariantControl(
        cfg,
        onChange,
        "bodyVariant",
        (_svgProps: SvgProps, variant: number) => {
          return `<div data-clothing-variant="${variant}" data-face-variant=1>
          ${svg("50", "20", "90 135 20 50")}
        <div>`;
        }
      ),
    ]),

    getBlock("Hair", [
      getColorChoiceControl(cfg, onChange, "hairFill", VisageColors.hair),
      getVariantControl(
        cfg,
        onChange,
        "hairVariant",
        (_svgProps: SvgProps, variant: number) => {
          return `<div data-hair-variant="${variant}" data-face-variant=1>
          ${svg("50", "20", "90 15 20 50")}
        <div>`;
        }
      ),
    ]),

    getBlock("Eyebrows", [
      getVariantControl(
        cfg,
        onChange,
        "eyebrowsVariant",
        (_svgProps: SvgProps, variant: number) => {
          return `<div data-eyebrows-variant="${variant}" data-face-variant=1>
          ${svg("50", "20", "60 70 40 5")}
        <div>`;
        }
      ),
    ]),

    getBlock("Eyes", [
      getColorChoiceControl(cfg, onChange, "eyesFill", VisageColors.eyes),
      getVariantControl(
        cfg,
        onChange,
        "eyesVariant",
        (_svgProps: SvgProps, variant: number) => {
          return `<div data-eyes-variant="${variant}" data-face-variant=1>
          ${svg("50", "20", "65 76 30 10")}
        <div>`;
        }
      ),
    ]),

    getBlock("Mouth", [
      getVariantControl(
        cfg,
        onChange,
        "mouthVariant",
        (_svgProps: SvgProps, variant: number) => {
          return `<div data-mouth-variant="${variant}" data-face-variant=1>
          ${svg("50", "20", "80 113 40 10")}
        <div>`;
        }
      ),
    ]),

    getBlock("Face", [
      getColorChoiceControl(cfg, onChange, "faceFill", VisageColors.skin),
      getVariantControl(
        cfg,
        onChange,
        "faceVariant",
        (_svgProps: SvgProps, variant: number) => {
          return `<div data-face-variant="${variant}">
          ${svg("50", "20", "68 115 60 30")}
        <div>`;
        }
      ),
    ])
  );
  element?.appendChild(editor);
}

function getBlock(titleStr: string, nodes: HTMLElement[]) {
  const block = document.createElement("div");
  block.className = "block";
  const title = document.createElement("h3");
  title.innerHTML = titleStr;
  block.append(title, ...nodes);
  return block;
}

function getCodeControl(cfg: VisageConfig, onChange: VisageEditorCb) {
  const code = document.createElement("textarea");
  code.className = "code";
  encodeConfig(cfg).then((str) => (code.value = str));
  code.addEventListener("input", () => {
    decodeConfig(code.value).then((decoded) => onChange(decoded));
  });
  return code;
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
  colors: string[]
) {
  const div = document.createElement("div");
  div.classList.add("formgroup");

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
  key: VisageVariantKey,
  previewCb: (svgProps: SvgProps, variant: number) => string
) {
  const div = document.createElement("div");
  div.classList.add("formgroup");

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
