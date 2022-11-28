import React from "react";

import { Row, Img, Stack, Text, Line } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[11px] sm:p-[5px] md:p-[7px] shadow-bs1 w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[123px] md:ml-[84px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
            <Img
              src="images/img_logonauber1.png"
              className="max-w-[100%] w-[15%]"
              alt="LOGONAUBEROne"
            />
            <Stack className="h-[38px] ml-[100px] sm:ml-[53px] md:ml-[68px] mt-[4px] relative w-[33%]">
              <Stack className="absolute bg-gray_200 h-[38px] p-[11px] sm:p-[5px] md:p-[7px] rounded-radius19 w-[100%]">
                <Img
                  src="images/img_search.svg"
                  className="absolute h-[15px] inset-y-[0] max-w-[100%] my-[auto] right-[8%] w-[4%]"
                  alt="search"
                />
              </Stack>
              <Text
                className="absolute font-inter font-normal h-[max-content] inset-y-[0] left-[4%] my-[auto] not-italic text-gray_600 w-[auto]"
                variant="body30"
              >
                busque aqui seu produto
              </Text>
            </Stack>
            <Img
              src="images/img_logorevendapr.png"
              className="max-w-[100%] sm:ml-[16px] md:ml-[21px] ml-[31px] mt-[2px] w-[4%]"
              alt="LOGOREVENDAPR"
            />
            <Text
              className="font-inter leading-[9.50px] md:leading-[normal] sm:leading-[normal] md:ml-[4px] ml-[6px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] text-black_900 sm:w-[100%] w-[8%]"
              variant="body31"
            >
              <span className="text-black_900 text-[7.59px] font-medium">
                CONHEÇA O SISTEMA
                <br />
                DE REVÊNDA
              </span>
              <span className="text-black_900 text-[10.63px] font-medium">
                 
              </span>
              <span className="text-black_900 text-[10.63px] font-bold">
                NAUBER PRO
              </span>
            </Text>
            <Img
              src="images/img_basedeconheci.png"
              className="max-w-[100%] sm:ml-[11px] md:ml-[15px] ml-[22px] mt-[2px] w-[14%]"
              alt="basedeconheci"
            />
            <Line className="bg-bluegray_400 sm:h-[11px] md:h-[14px] h-[20px] sm:ml-[12px] md:ml-[16px] ml-[24px] my-[13px] sm:my-[6px] md:my-[8px] w-[1px]" />
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap md:ml-[13px] ml-[19px] md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%] common-row-list common-row-list">
              <ul className="flex flex-row">
                <li className="w-[21%] sm:w-[100%] sm:my-[10px] max-w-[100%]">
                  <Img
                    src="images/img_flagbrasil1.png"
                    className="max-w-[100%]"
                    alt="FlagBrasilOne"
                  />
                </li>
                <li className="w-[21%] sm:w-[100%] sm:my-[10px] max-w-[100%]">
                  <Img
                    src="images/img_flagespanha1.png"
                    className="max-w-[100%]"
                    alt="FlagEspanhaOne"
                  />
                </li>
                <li className="w-[21%] sm:w-[100%] sm:my-[10px] max-w-[100%]">
                  <Img
                    src="images/img_flageua1.png"
                    className="max-w-[100%]"
                    alt="FlagEUAOne"
                  />
                </li>
                <li className="w-[21%] sm:w-[100%] sm:my-[10px] max-w-[100%]">
                  <Img
                    src="images/img_flagarabia1.png"
                    className="max-w-[100%]"
                    alt="FlagArabiaOne"
                  />
                </li>
              </ul>
            </Row>
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header1;
