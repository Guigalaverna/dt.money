import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      system: "system-ui",
      body: "Poppins",
      heading: "Poppins",
    },
    colors: {
      blue: "#5429CC",
      green: "#33CC95",
      red: "#E52E4D",
      shape: "#FFFFFF",
      titles: "#363F5F",
      texts: "#969CB2",
      background: "#F0F2F5",
    },
  },
});

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
});
