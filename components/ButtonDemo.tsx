import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";

import HorizonButton from "@horizon/button";
import { LongArrowRightIcon } from "@horizon/icons";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});

interface Props {
  className?: string;
}

const ButtonDemo: React.FC<Props> = ({ className }) => {
  const { container } = useStyles();

  return (
    <div className={clsx(className, container)}>
      <HorizonButton variant="contained">Button</HorizonButton>
      <HorizonButton variant="outlined">Button</HorizonButton>
      <HorizonButton endIcon={<LongArrowRightIcon />}>Action</HorizonButton>
    </div>
  );
};

export default ButtonDemo;
