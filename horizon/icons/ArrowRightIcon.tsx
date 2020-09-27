import React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const ArrowRight: React.FC<SvgIconProps> = props => {
  return (
    <SvgIcon viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.47773 0.469668C5.77062 0.176777 6.2455 0.176777 6.53839 0.469668L10.7884 4.71967C11.0813 5.01256 11.0813 5.48744 10.7884 5.78033L6.53839 10.0303C6.2455 10.3232 5.77062 10.3232 5.47773 10.0303C5.18484 9.7374 5.18484 9.2626 5.47773 8.9697L8.44736 6H1.00806C0.593847 6 0.258057 5.66421 0.258057 5.25C0.258057 4.83579 0.593847 4.5 1.00806 4.5H8.44736L5.47773 1.53033C5.18484 1.23744 5.18484 0.762558 5.47773 0.469668Z"
      />
    </SvgIcon>
  );
};

export default ArrowRight;
