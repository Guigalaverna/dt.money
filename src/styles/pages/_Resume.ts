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
  marginTop: "5rem",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  padding: "0 5rem",
  paddingTop: "2rem",
  alignItems: "center",
  justifyContent: "center",

  ul: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    paddingRight: "7rem",

    li: {
      background: "#FFF",
      padding: "1.5rem",
      borderRadius: "5px",
      borderLeft: "5px solid $green",
    },
  },

  canvas: {
    width: 200,
    height: 200,
  },
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
