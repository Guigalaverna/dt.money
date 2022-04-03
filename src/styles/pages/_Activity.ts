import { styled } from "..";

export const Container = styled("main", {
  background: "$background",

  width: "100%",
  height: "100%",

  padding: "68px 86px",

  h1: {
    color: "$titles",
  },
});

export const Content = styled("section", {
  marginTop: "2rem",
});

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  button: {
    background: "transparent",
    border: "2px solid $green",
    padding: "15px 30px",
    borderRadius: "5px",
    color: "$green",
    fontWeight: "bold",
    transition: "color 0.2s",
    cursor: "pointer",

    "&:hover": {
      background: "$green",
      color: "$background",
    },
  },
});
