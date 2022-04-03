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

export const ModalHeader = styled("header", {
  h2: {
    color: "$titles",
  },
  marginTop: "1rem",
  marginBottom: "1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  button: {
    background: "transparent",
    border: "none",
    fontSize: "0",
    cursor: "pointer",
    transition: "filter 0.2s",

    "&:hover": {
      filter: "brightness(0.8)",
    },
  },
});

export const Fieldset = styled("fieldset", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  border: "none",

  "div:nth-child(3)": {
    display: "flex",
    flexDirection: "column",

    "label:nth-child(2)": {
      color: "gray",
      fontSize: "0.9rem",
      marginBottom: "0.5rem",
    },
  },
});

export const Input = styled("input", {
  width: "100%",
  padding: 20,
  background: "$background",
  border: "none",
  borderRadius: "0.25rem",
});

export const ModalButton = styled("button", {
  background: "$green",
  padding: 20,
  border: "none",
  borderRadius: "0.25rem",
  color: "$shape",
  fontWeight: "bold",
  fontSize: "1.05rem",
  transition: "filter 0.2s",

  "&:hover": {
    filter: "brightness(0.9)",
  },
});
