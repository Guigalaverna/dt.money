import { styled } from "../../styles";

export const Container = styled("aside", {
  background: "White",
  borderRadius: "0.5rem",

  ul: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",

    li: {
      padding: "1rem",
      display: "flex",
      alignItems: "center",
    },

    a: {
      textDecoration: "none",
      color: "Black",
      fontSize: "1rem",
      marginLeft: "1rem",
    },

    "li + li": {
      borderTop: "1px solid #eee",
    },
  },
});
