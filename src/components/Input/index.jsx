import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcFillWhiteA700: "bg-white_A700",
  OutlineBlack90026: "bg-green_925 shadow-bs2",
  OutlineGray401: "border border-gray_401 border-solid",
};
const shapes = {
  srcRoundedBorder6: "rounded-radius628",
  RoundedBorder6: "rounded-radius698",
  RoundedBorder10: "rounded-radius10",
};
const sizes = {
  smSrc: "p-[12px] sm:p-[6px] md:p-[8px]",
  sm: "sm:p-[5px] px-[10px] md:px-[6px] py-[11px] md:py-[7px]",
  md: "md:px-[11px] sm:px-[15px] px-[17px] md:py-[12px] py-[18px] sm:py-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcRoundedBorder6",
    "RoundedBorder6",
    "RoundedBorder10",
  ]),
  variant: PropTypes.oneOf([
    "srcFillWhiteA700",
    "OutlineBlack90026",
    "OutlineGray401",
  ]),
  size: PropTypes.oneOf(["smSrc", "sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder6",
  variant: "OutlineBlack90026",
  size: "sm",
};

export { Input };
