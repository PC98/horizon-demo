import HorizonTypography from "@horizon/typography";

interface Props {
  className?: string;
}

const TypographyDemo: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <HorizonTypography variant="h1">
        Visby CF Extra Bold 36px
      </HorizonTypography>
      <HorizonTypography variant="h2">
        Visby CF Extra Bold 24px
      </HorizonTypography>
      <HorizonTypography variant="h3">
        Visby CF Extra Bold 16px
      </HorizonTypography>
      <HorizonTypography variant="overline">
        Visby CF Extra Bold 14px
      </HorizonTypography>
      <HorizonTypography>Open Sans Regular 16px</HorizonTypography>
      <HorizonTypography variant="caption">
        Open Sans Regular 14px
      </HorizonTypography>
    </div>
  );
};

export default TypographyDemo;
