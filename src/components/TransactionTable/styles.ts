import { styled } from "../../styles";

export const Container = styled("table", {
  fontFamily: "$body",
  width: "100%",
  borderSpacing: "0 0.5rem",
  whiteSpace: "nowrap",
});

export const Header = styled("thead", {
  tr: {
    td: {
      padding: "1rem 2rem",
      textAlign: "left",
      fontWeight: "400",
      color: "$texts",
    },
  },
});

export const Content = styled("tbody", {
  borderRadius: 5,

  tr: {
    padding: "1rem 2rem",
    textAlign: "left",
    background: "$shape",
    border: 0,
    borderRadius: "0.25rem",
    td: {
      padding: "1.5rem 2rem",
    },

    "td button": {
      background: "transparent",
      fontSize: "0",
      border: "none",
      display: "flex",
      alignItems: "center",
      transition: "filter 0.2s",
      cursor: "pointer",

      "&:hover": {
        filter: "brightness(0.8)",
      },
    },
  },
});
