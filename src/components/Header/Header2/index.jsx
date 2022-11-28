import React from "react";

import { Stack, Column, Row, Img, Text, Line } from "components";

const Header2 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Stack className="h-[133px] relative w-[100%]">
          <Column className="absolute bg-gradient2  bottom-[0] flex flex-col inset-x-[0] items-center justify-end sm:mx-[0] mx-[auto] md:p-[11px] p-[17px] sm:px-[15px] sm:py-[9px] rounded-radius10 sm:w-[100%] w-[93%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:pl-[0] md:pr-[13px] sm:pr-[15px] pr-[19px] sm:w-[100%] w-[81%] common-row-list common-row-list common-row-list common-row-list common-row-list">
              <ul className="flex flex-row">
                <li className="w-[6%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-row flex">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start">
                    <Img
                      src="images/img_home.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="HOME"
                    />
                    <a
                      href={"javascript:"}
                      className="cursor-pointer flex-grow font-bebasneue sm:ml-[3px] md:ml-[4px] ml-[7px] mt-[3px] text-white_A700 hover:text-yellow_A400"
                      variant="body18"
                      rel="noreferrer"
                    >
                      HOME
                    </a>
                  </Row>
                </li>
                <li className="w-[8%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-row flex">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center">
                    <Img
                      src="images/img_vector.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="Vector One"
                    />
                    <a
                      href={"javascript:"}
                      className="cursor-pointer flex-grow font-bebasneue sm:ml-[3px] md:ml-[4px] ml-[7px] mt-[3px] text-yellow_A400"
                      variant="body18"
                      rel="noreferrer"
                    >
                      EMPRESA
                    </a>
                  </Row>
                </li>
                <li className="w-[9%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-row flex">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center">
                    <Img
                      src="images/img_mail_17X21.svg"
                      className="flex-shrink-0 max-w-[100%] w-[25%]"
                      alt="mail"
                    />
                    <a
                      href={"javascript:"}
                      className="cursor-pointer flex-grow font-bebasneue sm:ml-[3px] md:ml-[4px] ml-[7px] text-white_A700 hover:text-yellow_A400"
                      variant="body18"
                      rel="noreferrer"
                    >
                      PRODUTOS
                    </a>
                  </Row>
                </li>
                <li className="w-[11%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-row flex">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center">
                    <Img
                      src="images/img_camera.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mt-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="camera"
                    />
                    <a
                      href={"javascript:"}
                      className="cursor-pointer flex-grow font-bebasneue sm:ml-[4px] md:ml-[6px] ml-[9px] text-white_A700 hover:text-yellow_A400"
                      variant="body18"
                      rel="noreferrer"
                    >
                      ASSISTÊNCIAS
                    </a>
                  </Row>
                </li>
                <li className="w-[14%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-row flex">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center">
                    <Img
                      src="images/img_volume.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mt-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="volume"
                    />
                    <a
                      href={"javascript:"}
                      className="cursor-pointer flex-grow font-bebasneue sm:ml-[3px] md:ml-[4px] ml-[6px] text-white_A700 hover:text-yellow_A400"
                      variant="body18"
                      rel="noreferrer"
                    >
                      CATÁLOGOS VIRTUAIS
                    </a>
                  </Row>
                </li>
                <li className="w-[8%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-row flex">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center">
                    <Img
                      src="images/img_user.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="user"
                    />
                    <a
                      href={"javascript:"}
                      className="cursor-pointer flex-grow font-bebasneue sm:ml-[3px] md:ml-[4px] ml-[7px] mt-[3px] text-white_A700 hover:text-yellow_A400"
                      variant="body18"
                      rel="noreferrer"
                    >
                      CONTATO
                    </a>
                  </Row>
                </li>
                <li className="w-[6%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-row flex">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center">
                    <Img
                      src="images/img_user_24X24.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="user One"
                    />
                    <a
                      href={"javascript:"}
                      className="cursor-pointer flex-grow font-bebasneue sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-white_A700 hover:text-yellow_A400"
                      variant="body18"
                      rel="noreferrer"
                    >
                      login
                    </a>
                  </Row>
                </li>
              </ul>
            </Row>
          </Column>
          <Row className="absolute bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[11px] sm:p-[5px] md:p-[7px] shadow-bs1 top-[0] w-[100%]">
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
                  className="absolute font-inter font-normal h-[max-content] inset-y-[0] left-[5%] my-[auto] not-italic text-gray_600 w-[auto]"
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
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[13px] ml-[19px] md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                <Img
                  src="images/img_flagbrasil1.png"
                  className="max-w-[100%] w-[21%]"
                  alt="FlagBrasilOne"
                />
                <Img
                  src="images/img_flagespanha1.png"
                  className="max-w-[100%] w-[21%]"
                  alt="FlagEspanhaOne"
                />
                <Img
                  src="images/img_flageua1.png"
                  className="max-w-[100%] w-[21%]"
                  alt="FlagEUAOne"
                />
                <Img
                  src="images/img_flagarabia1.png"
                  className="max-w-[100%] w-[21%]"
                  alt="FlagArabiaOne"
                />
              </Row>
            </Row>
          </Row>
        </Stack>
      </header>
    </>
  );
};

export default Header2;
