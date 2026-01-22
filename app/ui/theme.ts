export const tokens = {
  colors: {
    light: {
      background: "#F3F3F3",
      surface: "#FFFFFF",
      text: "#1B1B1B",
      textMuted: "#5A5A5A",
      primary: "#0067B8",
      primaryHover: "#005A9E",
      border: "#D1D1D1",
    },
    dark: {
      background: "#0A0A0A",
      surface: "#1A1A1A",
      text: "#FFFFFF",
      textMuted: "#CCCCCC",
      primary: "#4AA8FF",
      primaryHover: "#1E90FF",
      border: "#333333",
    },
  },

  radii: {
    sm: "6px",
    md: "10px",
    lg: "14px",
    xl: "20px",
  },

  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.08)",
    md: "0 2px 8px rgba(0,0,0,0.12)",
    lg: "0 4px 16px rgba(0,0,0,0.16)",
  },

  spacing: {
    xs: "0.4rem",
    sm: "0.8rem",
    md: "1.2rem",
    lg: "1.8rem",
    xl: "2.4rem",
    xxl: "3.2rem",
  },

  transitions: {
    fast: "150ms ease",
    normal: "250ms ease",
    slow: "400ms ease",
  },
};

// Legacy exports for backward compatibility
export const lightTheme = tokens.colors.light;
export const darkTheme = tokens.colors.dark;

export const theme = {
  colors: tokens.colors.light,
  radius: {
    card: tokens.radii.lg,
    button: tokens.radii.md,
  },
  shadow: {
    card: tokens.shadows.md,
  },
};
