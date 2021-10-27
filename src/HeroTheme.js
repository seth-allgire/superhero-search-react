import { createTheme } from "@mui/material/styles";

const HeroTheme = createTheme({
  palette: {
    primary: {
      main: "#217fbe",
      contrastText: "#f3ece8",
    },
    secondary: {
      main: "#f7db51",
      contrastText: "#144e75",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
        containedPrimary: {
          paddingX: "15px",
          marginBottom: "5px",
          backgroundColor: "#f7db51",
          color: "#144e75",
          "&:hover": {
            backgroundColor: "#fff1aa",
          },
          fontWeight: "600",
        },
        containedSecondary: {
          color: "#f3ece8",
          padding: "0px",
          lineHeight: "16px",
          marginLeft: "10px",
          backgroundColor: "#217fbe",
          fontWeight: "500",
          marginBottom: "0px",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          marginTop: "2px",
          paddingTop: "0px",
          paddingBottom: "0px",
        },
        standardError: {
          color: "#d63a1b",
        },
        standardSuccess: {
          color: "#42a534",
        },
      },
    },
    MuiAccordion: {
      defaultProps: {},
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: "22px",
          height: "22px",
          backgroundColor: "#f7db51",
          color: "#144e75",
          position: "absolute",
          top: "38px",
          left: "5px",
          fontSize: "12px",
        },
      },
    },
  },
});

export default HeroTheme;
