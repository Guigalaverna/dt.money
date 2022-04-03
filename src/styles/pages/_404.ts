import { styled } from "..";

export const Container = styled("main", {
  background: "$background",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100%",

  flexDirection: "column",

  img: {
    marginBottom: "2rem",
    width: 195,
  },

  h1: {
    fontSize: "3rem",
    color: "$blue",
  },

  a: {
    textDecoration: "none",
    marginTop: "1.5rem",
    background: "$texts",
    padding: "15px 30px",
    borderRadius: "5px",
    color: "$background",
    fontWeight: "bold",
    transition: "background 0.2s",

    "&:hover": {
      background: "$blue",
      color: "$background",
    },
  },
});
