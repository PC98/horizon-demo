import React from "react";
import { TypographyStyleOptions } from "@material-ui/core/styles/createTypography";
import Typography from "@material-ui/core/Typography";
import grays from "@horizon/colors/grays";

type Variant = "h1" | "h2" | "h3" | "overline" | "body1" | "caption";

const commonStyles = { fontStyle: "normal", color: grays["80"] };
export const typographyStyles: Readonly<Record<
  Variant,
  TypographyStyleOptions
>> = {
  h1: {
    fontFamily: "Visby CF",
    fontWeight: 800,
    fontSize: "2.25rem",
    lineHeight: "150%",
    fontFeatureSettings: "'liga' off",
    letterSpacing: "normal",
    ...commonStyles
  },
  h2: {
    fontFamily: "Visby CF",
    fontWeight: 800,
    fontSize: "1.5rem",
    lineHeight: "140%",
    fontFeatureSettings: "'liga' off",
    letterSpacing: "normal",
    ...commonStyles
  },
  h3: {
    fontFamily: "Visby CF",
    fontWeight: 800,
    fontSize: "1rem",
    lineHeight: "130%",
    fontFeatureSettings: "'liga' off",
    letterSpacing: "normal",
    ...commonStyles
  },
  overline: {
    fontFamily: "Visby CF",
    fontWeight: 800,
    fontSize: "0.875rem",
    lineHeight: "130%",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    ...commonStyles
  },
  body1: {
    fontFamily: "Open Sans",
    fontWeight: "normal",
    fontSize: "1rem",
    lineHeight: "150%",
    letterSpacing: "normal",
    ...commonStyles
  },
  caption: {
    fontFamily: "Open Sans",
    fontWeight: "normal",
    fontSize: "0.875rem",
    lineHeight: "130%",
    letterSpacing: "normal",
    ...commonStyles
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
