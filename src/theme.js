import { Platform } from "react-native";

const theme = {
  roundness: 3,
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    textWhite: 'white',
    appBarBackground: "#24292e",
    backgroundPrimary: "#e1e4e8",
    backgroundSecondry: "white",
    emphasisPrimary: "#0366d6",
    error: '#d73a4a'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: Platform.select({
    ios: 'Arial',
    android: 'Roboto',
    default: 'System',
  }),
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
