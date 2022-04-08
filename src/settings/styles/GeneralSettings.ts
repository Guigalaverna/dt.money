import { styled } from "../../styles";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginLeft: "2rem",
});

export const Fieldset = styled("fieldset", {
  border: "none",
  display: "flex",
  alignItems: "center",
  marginTop: "2rem",

  legend: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "$titles",
    marginBottom: "1rem",
  },

  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  "main table": {
    marginTop: "1rem",

    thead: {
      tr: {
        th: {
          padding: "1rem 2rem",
          textAlign: "left",
          fontWeight: "400",
          color: "$texts",
        },
      },
    },

    tbody: {
      tr: {
        padding: "1rem 2rem",
        textAlign: "left",
        background: "$shape",
        border: 0,
        borderRadius: "0.25rem",
        td: {
          padding: "1.5rem 2rem",
        },

        "td button": {
          background: "transparent",
          fontSize: "0",
          border: "none",
          display: "flex",
          alignItems: "center",
          transition: "filter 0.2s",
          cursor: "pointer",

          "&:hover": {
            filter: "brightness(0.8)",
          },
        },
      },
    },
  },

  "div#category": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "1rem",

    label: {
      marginBottom: "1rem",
      color: "$texts",
    },

    div: {
      display: "flex",
      alignItems: "center",
    },

    "div span": {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      overflow: "hidden",

      marginLeft: "1rem",

      input: {
        border: "none",
        padding: 0,
        width: "300%",
        height: "300%",
        cursor: "pointer",
        transform: "translate(-50%, -50%)",
      },
    },

    "div button": {
      background: "$green",
      padding: "0.5rem",
      fontSize: "0",
      border: "none",
      marginLeft: "1rem",
      borderRadius: "0.25rem",
      transition: "filter 0.2s",
      cursor: "pointer",

      "&:hover": {
        filter: "brightness(0.8)",
      },
    },
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
