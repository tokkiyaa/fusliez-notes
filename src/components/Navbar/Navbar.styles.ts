import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  Navbar: {
    flex: "0 0 3.5rem",
    height: "3.5rem",
    width: "100%",
    borderTop: `1px solid ${theme.borderColor}`,
    zIndex: 10,
  },
  NavbarContainer: {
    display: "flex",
    height: "100%",
  },
}));
