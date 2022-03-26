import { styled } from "../../styles/";

export const Container = styled("aside", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  maxWidth: "20%",
  height: "100%",
  padding: "3rem",
});

export const NavigationWrapper = styled("nav", {
  display: "flex",
  flexDirection: "column",
  gap: 36 / 16 + "rem",
  alignItems: "flex-start",
  marginTop: 89 / 16 + "rem",

  a: {
    textTransform: "lowercase",
    textDecoration: "none",
    fontFamily: "$body",
    fontWeight: "400",
    fontSize: "1.2rem",
    color: "$texts",

    display: "flex",
    alignItems: "center",
    transition: "filter 0.2s",

    svg: {
      marginRight: 12 / 16 + "rem",
    },

    "&:hover": {
      filter: "brightness(0.8)",
    },
  },
});
