import React from "react";

import { Column, Row, Text, Img, Line } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="flex flex-col items-center justify-start sm:mb-[43px] md:mb-[55px] mb-[81px] sm:mt-[31px] md:mt-[41px] mt-[60px] mx-[auto] sm:w-[100%] w-[82%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:px-[0] w-[100%]">
            <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%] common-column-list common-column-list common-column-list common-column-list common-column-list">
              <ul className="flex flex-col">
                <Column className="cursor-pointer flex flex-col justify-start common-column-list common-column-list common-column-list common-column-list common-column-list">
                  <ul className="flex flex-col">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-inter font-medium text-white_A700"
                        variant="body26"
                      >
                        Produtos
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-inter font-medium text-[14px] text-bluegray_401"
                        rel="noreferrer"
                      >
                        Construção civil
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-inter font-medium text-[14px] text-bluegray_401"
                        rel="noreferrer"
                      >
                        Linha industrial
                      </a>
                    </li>
                  </ul>
                </Column>
                <li className="w-[auto]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-inter font-medium text-[14px] text-white_A700"
                    rel="noreferrer"
                  >
                    Siga nas redes sociais
                  </a>
                </li>
                <li className="w-[76%] sm:w-[100%] max-w-[100%]">
                  <Img
                    src="images/img_redessociaisi.svg"
                    className="cursor-pointer max-w-[100%]"
                    alt="Redessociaisi"
                  />
                </li>
              </ul>
            </Column>
            <Column className="flex flex-col items-end justify-start md:ml-[59px] ml-[87px] sm:mt-[21px] md:mt-[28px] mt-[41px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[2%]">
              <Img
                src="images/img_location.svg"
                className="h-[11px] sm:h-[6px] md:h-[8px] max-w-[100%] w-[11px] sm:w-[5px] md:w-[7px]"
                alt="location"
              />
              <Img
                src="images/img_call.svg"
                className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[10px] md:w-[13px] w-[20px]"
                alt="call"
              />
            </Column>
            <Column className="flex flex-col items-end justify-start ml-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%] common-column-list common-column-list common-column-list common-column-list common-column-list">
                  <ul className="flex flex-col">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-inter font-medium text-white_A700"
                        variant="body26"
                      >
                        Nossa sede
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-inter font-medium leading-[normal] text-[12px] text-bluegray_401"
                        rel="noreferrer"
                      >
                        Rua Mal. Castelo Branco, 2477 Centro
                        <br />
                        <br />
                        Schroeder - SC.
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-inter font-medium text-[12px] text-bluegray_401"
                        rel="noreferrer"
                      >
                        +55 (47) 3374-5969
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-inter font-medium text-[12px] text-bluegray_401"
                        rel="noreferrer"
                      >
                        +55 (11) 96364-6599
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-inter font-medium text-[12px] text-bluegray_401"
                        rel="noreferrer"
                      >
                        +55 (47) 98821-2725
                      </a>
                    </li>
                  </ul>
                </Column>
                <Column className="flex flex-col justify-start ml-[118px] md:ml-[81px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%] common-column-list common-column-list common-column-list common-column-list common-column-list">
                  <ul className="flex flex-col">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-inter font-medium text-white_A700"
                        variant="body26"
                      >
                        Ficou com dúvidas?
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-inter font-medium text-[14px] text-bluegray_401"
                        rel="noreferrer"
                      >
                        Converse com um especialista
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-inter font-medium text-[14px] text-bluegray_401"
                        rel="noreferrer"
                      >
                        Envie um e-mail
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-inter font-medium text-[14px] text-bluegray_401"
                        rel="noreferrer"
                      >
                        Voltar ao início
                      </a>
                    </li>
                  </ul>
                </Column>
                <Img
                  src="images/img_logonauber.png"
                  className="max-w-[100%] sm:ml-[51px] md:ml-[66px] ml-[97px] w-[30%]"
                  alt="LogoNauber"
                />
              </Row>
              <Text
                className="font-inter font-normal mt-[122px] sm:mt-[64px] md:mt-[83px] not-italic text-white_A700 w-[auto]"
                variant="body30"
              >
                20.633.257/0001-98 |<br /> NAUBER MAQUINAS E EQUIPAMENTOS
              </Text>
            </Column>
          </Row>
          <Line className="bg-white_A700 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]">
            <Text
              className="font-inter font-normal not-italic text-white_A700 w-[auto]"
              variant="body30"
            >
              Nauber © 2022 Todos os direitos reservados.
            </Text>
            <Text
              className="font-inter font-normal not-italic text-white_A700 w-[auto]"
              variant="body30"
            >
              Politicas de Privacidade
              <br /> |<br /> Termos de Uso
            </Text>
          </Row>
        </Column>
      </footer>
    </>
  );
};

export default Footer;
