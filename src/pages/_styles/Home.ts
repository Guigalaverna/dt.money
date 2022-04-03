import { styled } from "../../styles";

export const Container = styled("main", {
  height: "100%",
  width: "100%",
});

export const Header = styled("header", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "30%",
  width: "100%",
  background: "$blue",
  padding: 56 / 16 + "rem",

  "> div": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const Heading = styled("h1", {
  fontFamily: "$heading",
  color: "$shape",
});

export const Cards = styled("section", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "-6rem",
});

export const Content = styled("main", {
  background: "$background",
  height: "100%",
  padding: "3.5rem",
});
