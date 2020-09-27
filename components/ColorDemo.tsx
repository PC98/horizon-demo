import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { red, yellow, orange } from "@horizon/colors/primary";
import { purple, blue, green } from "@horizon/colors/secondary";
import * as gradients from "@horizon/colors/gradients";
import grays from "@horizon/colors/grays";
import ColorBox from "./ColorBox";

const useStyles = makeStyles({
  container: {
    marginLeft: -12,
    marginRight: -12,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  box: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12
  }
});

interface Props {
  className?: string;
}

const ColorDemo: React.FC<Props> = ({ className }) => {
  const { container, box } = useStyles();

  const makeBoxes = (
    colorObj: { [key in string]: string },
    context: string,
    hideColorCaption = false
  ) =>
    Object.entries(colorObj).map(([type, color]) => (
      <ColorBox
        className={box}
        key={color}
        color={color}
        text={`${context}-${type}`}
        hideColorCaption={hideColorCaption}
      />
    ));

  return (
    <div className={clsx(className, container)}>
      {makeBoxes(grays, "Gray")}
      {makeBoxes(red, "Red")}
      {makeBoxes(orange, "Orange")}
      {makeBoxes(yellow, "Yellow")}
      {makeBoxes(purple, "Purple")}
      {makeBoxes(blue, "Blue")}
      {makeBoxes(green, "Green")}
      {makeBoxes(gradients, "Gradient", true)}
    </div>
  );
};

export default ColorDemo;
