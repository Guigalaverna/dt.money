import { styled } from "../../styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  background: "$shape",
  width: "30%",

  padding: 27,

  borderRadius: 5,
  gap: "1rem",

  header: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",

    span: {
      fontSize: "1.2rem",
      fontFamily: "$heading",
    },

    svg: {},
  },

  p: {
    fontSize: 38 / 16 + "rem",
    fontFamily: "$body",
    fontWeight: "500",
    color: "$titles",
  },
});
