import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-radius628",
  CustomBorderTL20:
    "rounded-bl-[0] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[0]",
  RoundedBorder10: "rounded-radius10",
};
const variants = {
  OutlineGreen9007f: "bg-white_A700 shadow-bs text-green_908",
  GradientGreen903Green801: "bg-gradient  text-white_A700",
  OutlineBlack9003f: "bg-white_A700 shadow-bs1 text-green_906",
  FillGreen600: "bg-green_600 text-white_A700",
  FillTeal900: "bg-teal_900 text-white_A700",
  FillGray901: "bg-gray_901 text-amber_A400",
  FillGray902: "bg-gray_902 text-white_A700",
  GradientGreen931Green932: "bg-gradient1  text-white_A700",
};
const sizes = {
  sm: "sm:p-[4px] md:p-[5px] p-[8px]",
  md: "p-[11px] sm:p-[5px] md:p-[7px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "CustomBorderTL20",
    "RoundedBorder10",
  ]),
  variant: PropTypes.oneOf([
    "OutlineGreen9007f",
    "GradientGreen903Green801",
    "OutlineBlack9003f",
    "FillGreen600",
    "FillTeal900",
    "FillGray901",
    "FillGray902",
    "GradientGreen931Green932",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "OutlineGreen9007f",
  size: "md",
};

export { Button };
