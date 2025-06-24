import { visageEditor } from "./editor";
import "./style.css";
import { visage, type VisageConfig } from "./visage";

let config: VisageConfig = {
  backgroundFill: "#e1eeff",
  bodyFill: "#4000e3",
  faceFill: "#e9c59e",
  eyesFill: "#1c766d",
  hairFill: "#812f1b",
  strokeWidth: 1.5,
  mouthVariant: 2,
  eyesVariant: 2,
};

function render() {
  visage("#visage", config);
}

visageEditor("#editor", config, (cfg) => {
  config = { ...config, ...cfg };
  render();
});

render();
