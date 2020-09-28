import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";

import HorizonTypography from "@horizon/typography";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column"
  }
});

interface Props {
  className?: string;
}

const TypographyDemo: React.FC<Props> = ({ className }) => {
  const { container } = useStyles();

  return (
    <div className={clsx(className, container)}>
      <HorizonTypography variant="h1">
        Visby CF Extra Bold 36px
      </HorizonTypography>
      <HorizonTypography variant="h2">
        Visby CF Extra Bold 24px
      </HorizonTypography>
      <HorizonTypography variant="h3">Visby CF Bold 24px</HorizonTypography>
      <HorizonTypography variant="h4">
        Visby CF Extra Bold 16px
      </HorizonTypography>
      <HorizonTypography variant="h5">Visby CF Bold 16px</HorizonTypography>
      <HorizonTypography variant="body1">
        Open Sans Regular 20px
      </HorizonTypography>
      <HorizonTypography>Open Sans Regular 16px</HorizonTypography>
      <HorizonTypography variant="overline">
        Visby CF Extra Bold 14px
      </HorizonTypography>
      <HorizonTypography variant="caption">
        Open Sans Regular 14px
      </HorizonTypography>
    </div>
  );
};

export default TypographyDemo;
