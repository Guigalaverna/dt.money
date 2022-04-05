import { styled } from "../../styles";

export const Container = styled("input", {
  border: "2px solid #ccc",
  padding: "15px 30px 15px 15px",
  outlineColor: "transparent",

  borderRadius: "5px",
  "-webkit-transition": "color 2s, outline-color .7s ease-out",
  " -moz-transition": "color 2s, outline-color .7s ease-out",
  "-o-transition": "color 2s, outline-color .7s ease-out",
  transition: "color 2s, outline-color .7s ease-out",

  "&:focus": {
    outlineColor: "$blue",
  },
});
