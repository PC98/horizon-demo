import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { orange } from "@horizon/colors/primary";
import grays from "@horizon/colors/grays";
import { typographyStyles } from "@horizon/typography";
// testing
export default createMuiTheme({
  palette: {
    primary: { ...orange, contrastText: grays.white },
    text: {
      primary: grays["80"],
      secondary: grays["60"],
      disabled: grays["40"],
      hint: grays["40"]
    },
    background: { default: grays.bg }
  },
  typography: typographyStyles
});
