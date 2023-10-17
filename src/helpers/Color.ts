function getColorRGBA(colorName: string): string {
  const colorMap: { [key: string]: string } = {
    lightYellow: "rgba(255, 255, 224, 0.15)",
    lightblue: "rgba(173, 216, 230, 0.15)",
    lightgreen: "rgba(144, 238, 144, 0.15)",
    darkSlateGray: "rgba(47, 79, 79, 0.15)",
    blue: "rgba(0, 0, 255, 0.15)",
    dodgerblue: "rgba(30, 144, 255, 0.15)",
    yellow: "rgba(255, 255, 0, 0.15)",
    red: "rgba(255, 0, 0, 0.15)",
    black: "rgba(0, 0, 0, 0.15)",
    brown: "rgba(165, 42, 42, 0.15)",
    green: "rgba(0, 128, 0, 0.15)",
    lightslategray: "rgba(119, 136, 153, 0.15)",
    lemonChiffon: "rgba(255, 250, 205, 0.15)",
    salmon: "rgba(250, 128, 114, 0.15)",
  };

  return colorMap[colorName] || "rgba(0, 0, 0, 0.15)"; // Default to black with 0.15 opacity
}
export { getColorRGBA };
