export const styles = ({ breakpoints }) => ({
    root: {
      padding: 16,
      [breakpoints.up("sm")]: {
        padding: 24,
        maxWidth: 700,
        margin: "auto"
      },
      [breakpoints.up("md")]: {
        maxWidth: 1200
      }
    }
  });