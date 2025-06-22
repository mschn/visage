export interface VisageConfig {
  backgroundFill: string;
  bodyFill: string;
  faceFill: string;
  eyesFill: string;
  hairFill: string;
  strokeWidth: number;
}

export interface SvgProps extends VisageConfig {
  faceStroke: string;
  bodyStroke: string;
  mouthFill: string;
  hairStroke: string;
}

export const VisageColors = {
  skin: ["#e9c59e", "#ffcebb", "#e29a7e", "#8a4d35"],
  eyes: ["#47220e", "#ad6325", "#2b92b8", "#19a051"],
  hair: ["#230f04", "#623714", "#a37c30", "#a24c0b"],
};

export type VisageEditorCb = (config: Partial<VisageConfig>) => void;

export type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];
