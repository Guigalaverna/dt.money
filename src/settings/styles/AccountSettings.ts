import { styled } from "../../styles";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const Fieldset = styled("fieldset", {
  border: "none",
  display: "flex",
  alignItems: "center",
  marginTop: "2rem",

  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  img: {
    marginLeft: "2rem",
  },
});

export const Label = styled("label", {
  fontSize: "1rem",
  color: "$texts",

  "&:not(:first-child)": {
    marginTop: "1rem",
  },
});

export const Avatar = styled("img", {
  borderRadius: "20%",
  width: "96px",
  height: "96px",
});
