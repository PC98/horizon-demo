import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { orange } from "@horizon/colors/primary";
import grays from "@horizon/colors/grays";
import { typographyStyles } from "@horizon/typography";

export default createMuiTheme({
  palette: {
    primary: orange,
    background: { default: grays["1"] }
  },
  typography: typographyStyles
});
