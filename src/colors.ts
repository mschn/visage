type RgbColor = [number, number, number];
function hexToRgb(hex: string): RgbColor {
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return [r, g, b];
}
function rgbToHex(rgb: RgbColor): string {
  const toHex = (c: number): string => {
    const hex = Math.round(c).toString(16); // Ensure rounding and convert to hex
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `${toHex(rgb[0])}${toHex(rgb[1])}${toHex(rgb[2])}`;
}
function darkenComponent(component: number, factor: number): number {
  return Math.max(0, component - Math.round(255 * factor));
}
export function alterHexColor(
  hexColor: string,
  factor: number = 0.15
): string {
  const cleanedHex = hexColor.startsWith("#")
    ? hexColor.substring(1)
    : hexColor;
  let rgb: RgbColor = hexToRgb(cleanedHex);
  rgb = rgb.map((component) => darkenComponent(component, factor)) as RgbColor;
  return `#${rgbToHex(rgb)}`;
}
