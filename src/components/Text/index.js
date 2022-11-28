import React from "react";
const variantClasses = {
  h1: "font-normal text-[9.21px]",
  h2: "font-bold md:text-[48px] sm:text-[48px] text-[77.7px]",
  h3: "font-normal text-[7.84px]",
  h4: "font-bold md:text-[48px] sm:text-[48px] text-[60px]",
  h5: "font-normal text-[6.22px]",
  h6: "font-bold sm:text-[43.19px] md:text-[49.19px] text-[57.19px]",
  body1: "font-bold sm:text-[40px] md:text-[46px] text-[50px]",
  body2: "font-bold sm:text-[39.77px] md:text-[45.77px] text-[49.77px]",
  body3: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  body4: "font-bold sm:text-[37.04px] md:text-[43.04px] text-[47.04px]",
  body5: "font-bold sm:text-[35.41px] md:text-[37.41px] text-[39.41px]",
  body6: "font-normal sm:text-[32px] md:text-[34px] text-[36px]",
  body7: "font-bold sm:text-[31.58px] md:text-[33.58px] text-[35.58px]",
  body8: "font-bold sm:text-[30px] md:text-[32px] text-[34px]",
  body9: "font-bold sm:text-[26px] md:text-[28px] text-[30px]",
  body10: "font-bold sm:text-[24.64px] md:text-[26.64px] text-[28.64px]",
  body11: "font-bold sm:text-[24px] md:text-[26px] text-[28px]",
  body12: "font-bold sm:text-[23.94px] md:text-[25.94px] text-[27.94px]",
  body13: "font-normal sm:text-[20px] md:text-[22px] text-[24px]",
  body14: "font-bold sm:text-[18px] md:text-[20px] text-[22px]",
  body15: "font-bold sm:text-[17.26px] md:text-[19.26px] text-[21.26px]",
  body16: "font-bold sm:text-[16.03px] md:text-[18.03px] text-[20.03px]",
  body17: "font-medium text-[20px]",
  body18: "font-bold text-[18px]",
  body19: "font-bold text-[16.94px]",
  body20: "font-normal text-[16.34px]",
  body21: "font-bold text-[16px]",
  body22: "font-medium text-[14.83px]",
  body23: "font-normal text-[14.68px]",
  body24: "font-bold text-[14.3px]",
  body25: "font-normal text-[14.25px]",
  body26: "text-[14px]",
  body27: "font-bold text-[13.98px]",
  body28: "text-[13.45px]",
  body29: "font-normal text-[12.49px]",
  body30: "text-[12px]",
  body31: "font-medium text-[10.63px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
