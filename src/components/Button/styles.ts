import { styled } from "../../styles";

export const Container = styled("button", {
  padding: "12px 32px",
  borderRadius: 5,
  border: "none",
  fontFamily: "$body",
  cursor: "pointer",

  variants: {
    buttonType: {
      filled: {
        background: "$blue",
        filter: "brightness(1.4)",
        color: "$shape",
        fontSize: "1rem",
        fontWeight: "500",
        transition: "filter 0.2s",

        "&:hover": {
          filter: "brightness(1.2)",
        },
      },
      outlined: {
        background: "transparent",
        border: "2.5px solid $shape",
        color: "$shape",
        fontSize: "1rem",
        fontWeight: "500",
        transition: "background 0.2s",

        "&:hover": {
          background: "$shape",
          color: "$titles",
        },
      },
      transparent: {},
    },
  },
});
