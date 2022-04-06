import { styled } from "..";

export const Container = styled("main", {
  width: "100%",
});
export const Header = styled("header", {
  width: "100%",
  height: "50%",
  background: "$blue",

  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",

  img: {
    marginTop: "2rem",
  },
  h1: {
    fontSize: "2.5rem",
    color: "#FFF",
    textAlign: "center",
    marginTop: "2rem",
  },
});

export const Content = styled("section", {
  width: "100%",
  height: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ButtonLogin = styled("button", {
  background: "$blue",
  color: "#fff",
  fontFamily: "$body",
  fontWeight: "bold",
  fontSize: "1.3rem",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "15px",

  borderRadius: "8px",
  transition: "filter 0.2s",
  cursor: "pointer",

  "&:hover": {
    filter: "brightness(0.8)",
  },

  svg: {
    marginRight: "10px",
  },
});
