import { styled } from "../../styles";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const Fieldset = styled("fieldset", {
  border: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: "1rem",
});

export const Label = styled("label", {
  fontSize: "1rem",
  color: "$texts",

  "&:not(:first-child)": {
    marginTop: "1rem",
  },
});
