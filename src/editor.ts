import {
  VisageColors,
  type StringKeys,
  type VisageConfig,
  type VisageEditorCb,
} from "./types";

export function visageEditor(
  selector: string,
  cfg: VisageConfig,
  onChange: VisageEditorCb
) {
  const element = document.querySelector(selector);
  const editor = document.createElement("div");
  editor.classList.add("visage-editor");
  editor.append(
    getStrokeWidthControl(cfg, onChange),
    getColorControl(cfg, onChange, "backgroundFill", "Background"),
    getColorControl(cfg, onChange, "bodyFill", "Body"),
    getColorChoiceControl(cfg, onChange, "faceFill", "Skin", VisageColors.skin),
    getColorChoiceControl(cfg, onChange, "eyesFill", "Eyes", VisageColors.eyes),
    getColorChoiceControl(cfg, onChange, "hairFill", "Hair", VisageColors.hair)
  );
  element?.appendChild(editor);
}

function getStrokeWidthControl(cfg: VisageConfig, onChange: VisageEditorCb) {
  const input = document.createElement("input");
  input.type = "number";
  input.id = "editor-stroke-width";
  input.value = `${cfg.strokeWidth}`;
  input.addEventListener("change", () =>
    onChange({ strokeWidth: Number.parseFloat(input.value) })
  );
  const label = document.createElement("label");
  label.htmlFor = "editor-stroke-width";
  label.innerHTML = "Stroke width";
  const div = document.createElement("div");
  div.classList.add("formgroup");
  div.append(label, input);
  return div;
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
