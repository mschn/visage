export interface VisageConfig {
  backgroundFill: string;
  clothingFill: string;
  eyesFill: string;
  eyesVariant: number;
  skinFill: string;
  hairFill: string;
  faceVariant: number;
  mouthVariant: number;
  eyebrowsVariant: number;
  hairVariant: number;
  clothingVariant: number;
}

export type VisageVariantKeys = Pick<
  VisageConfig,
  | "mouthVariant"
  | "faceVariant"
  | "eyesVariant"
  | "eyebrowsVariant"
  | "hairVariant"
  | "clothingVariant"
>;
export type VisageVariantKey = keyof VisageVariantKeys;

export const VisageVariantCount: Record<VisageVariantKey, number> = {
  eyesVariant: 2,
  faceVariant: 2,
  mouthVariant: 2,
  eyebrowsVariant: 3,
  hairVariant: 3,
  clothingVariant: 4,
};

export interface SvgProps extends VisageConfig {
  faceStroke: string;
  clothingStroke: string;
  mouthFill: string;
  hairStroke: string;
}

export const VisageColors = {
  skin: ["#e9c59e", "#ffcebb", "#e29a7e", "#8a4d35"],
  eyes: ["#47220e", "#ad6325", "#2b92b8", "#19a051"],
  hair: ["#230f04", "#623714", "#a37c30", "#a24c0b", "#6f6f6f", "#b0b0b0"],
};

export type VisageEditorCb = (config: Partial<VisageConfig>) => void;

export type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export type NumberKeys<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];
