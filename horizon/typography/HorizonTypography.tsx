import React from "react";
import { TypographyStyleOptions } from "@material-ui/core/styles/createTypography";
import Typography from "@material-ui/core/Typography";

type Variant = "h1" | "h2" | "h3" | "overline" | "body1" | "caption";

export const typographyStyles: Readonly<Record<
  Variant,
  TypographyStyleOptions
>> = {
  h1: {
    fontFamily: "Visby CF",
    fontWeight: 800,
    fontSize: "2.25rem",
    fontStyle: "normal",
    fontFeatureSettings: "'liga' off",
    lineHeight: "150%",
    letterSpacing: "normal"
  },
  h2: {
    fontFamily: "Visby CF",
    fontWeight: 800,
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontFeatureSettings: "'liga' off",
    lineHeight: "140%",
    letterSpacing: "normal"
  },
  h3: {
    fontFamily: "Visby CF",
    fontWeight: 800,
    fontSize: "1rem",
    fontStyle: "normal",
    fontFeatureSettings: "'liga' off",
    lineHeight: "130%",
    letterSpacing: "normal"
  },
  overline: {
    fontFamily: "Visby CF",
    fontWeight: 800,
    fontSize: "0.875rem",
    fontStyle: "normal",
    lineHeight: "130%",
    letterSpacing: "0.05em",
    textTransform: "uppercase"
  },
  body1: {
    fontFamily: "Open Sans",
    fontWeight: "normal",
    fontSize: "1rem",
    fontStyle: "normal",
    lineHeight: "150%",
    letterSpacing: "normal"
  },
  caption: {
    fontFamily: "Open Sans",
    fontWeight: "normal",
    fontSize: "0.875rem",
    fontStyle: "normal",
    lineHeight: "130%",
    letterSpacing: "normal"
  }
};

type Props = Omit<React.ComponentProps<typeof Typography>, "variant"> & {
  variant?: Variant;
};

const HorizonTypography: React.FC<Props> = ({ children, variant, ...rest }) => {
  const horizonVariant: Variant = variant ?? "body1";
  return (
    <Typography variant={horizonVariant} {...rest}>
      {children}
    </Typography>
  );
};

export default HorizonTypography;
