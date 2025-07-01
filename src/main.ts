import { visageEditor } from "./editor";
import "./style.css";
import { visage, type VisageConfig } from "./visage";

const config: VisageConfig = {
  backgroundFill: "#e1eeff",
  bodyFill: "#4000e3",
  faceFill: "#e9c59e",
  eyesFill: "#2b92b8",
  hairFill: "#623714",
  mouthVariant: 2,
  eyesVariant: 2,
  faceVariant: 1,
  eyebrowsVariant: 1,
  hairVariant: 1,
};

function render() {
  visage("#visage", config);
}

visageEditor("#editor", config, (cfg) => {
  Object.assign(config, cfg);
  render();
});

render();
