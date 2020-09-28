import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

import HorizonTypography from "@horizon/typography";

interface Props {
  color: string;
  text: string;
  className?: string;
  hideColorCaption?: boolean;
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  root: {
    height: 148,
    width: 148,
    background: (props: Props) => props.color,
    marginBottom: 8
  },
  rounded: {
    borderRadius: 16
  }
});

const ColorBox: React.FC<Props> = props => {
  const { container, root, rounded } = useStyles(props);

  return (
    <div className={clsx(props.className, container)}>
      <Paper variant="outlined" classes={{ root, rounded }} />
      <HorizonTypography variant="h4">{props.text}</HorizonTypography>
      {props.hideColorCaption !== true && (
        <HorizonTypography variant="caption">{props.color}</HorizonTypography>
      )}
    </div>
  );
};

export default ColorBox;
