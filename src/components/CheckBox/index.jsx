import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray602: "border-bw118 border-gray_602 border-solid",
  OutlineGreen924: "bg-green_924 border-bw118 border-green_924 border-solid",
};

const sizes = { sm: "pb-[1px]" };

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName}  ${variants[variant] || ""} ${
              sizes[size] || ""
            }`}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["OutlineGray602", "OutlineGreen924"]),
  size: PropTypes.oneOf(["sm"]),
};
CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  variant: "OutlineGray602",
  size: "",
};

export { CheckBox };
