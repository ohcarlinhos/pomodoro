export interface ThemeType {
  colors: {
    textColor: string;
    primaryColor: string;
  };
}

export const theme: ThemeType = {
  colors: {
    textColor: "#2c3e50",
    primaryColor: "#605bff",
  },
};

export const provide = { theme };
