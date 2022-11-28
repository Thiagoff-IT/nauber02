import React from "react";

import { Column, Stack, Img, Text, Row, List, CheckBox } from "components";
import Header from "components/Header/Header";
import Footer1 from "components/Footer/Footer1";

const ProdutosPage = () => {
  return (
    <>
      <Column className="bg-bluegray_50 flex flex-col font-bebasneue items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="flex flex-col justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
            <Stack className="h-[63px] relative w-[100%]">
              <Img
                src="images/img_vector117_2.png"
                className="absolute h-[12px] max-w-[100%] top-[35%] w-[100%]"
                alt="Vector117"
              />
              <Column
                className="absolute bg-cover bg-no-repeat flex flex-col items-end justify-end sm:mx-[0] p-[4px] sm:w-[100%] w-[38%]"
                style={{ backgroundImage: "url('images/img_group34.png')" }}
              >
                <Text
                  className="sm:mr-[20px] md:mr-[26px] mr-[39px] mt-[1px] text-white_A700 w-[auto]"
                  variant="body4"
                >
                  máquinas para pintura
                </Text>
              </Column>
            </Stack>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1192px] md:ml-[92px] sm:mt-[25px] md:mt-[33px] mt-[48px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
              <List
                className="sm:gap-[17px] md:gap-[23px] gap-[33.65px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:w-[100%] w-[73%]"
                orientation="horizontal"
              >
                <Stack className="h-[494px] relative w-[100%]">
                  <Stack className="absolute h-[494px] w-[100%]">
                    <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <div className="bg-white_A700 sm:h-[197px] md:h-[254px] h-[368px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20.06px] rounded-tr-[20.06px] shadow-bs4 w-[100%]"></div>
                        <div className="bg-gradient7  h-[111px] sm:h-[60px] md:h-[77px] mt-[14px] sm:mt-[7px] md:mt-[9px] rounded-bl-[36.78px] rounded-br-[36.78px] rounded-tl-[0] rounded-tr-[0] w-[100%]"></div>
                      </Column>
                    </Column>
                    <Img
                      src="images/img_011.png"
                      className="absolute h-[401px] max-w-[100%] top-[1%] w-[100%]"
                      alt="Eleven"
                    />
                  </Stack>
                  <Text
                    className="absolute bottom-[6%] inset-x-[0] mx-[auto] text-white_A700 w-[max-content]"
                    as="h6"
                    variant="h6"
                  >
                    d-3.0x
                  </Text>
                </Stack>
                <Stack className="h-[494px] relative w-[100%]">
                  <Stack className="absolute h-[494px] w-[100%]">
                    <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <div className="bg-white_A700 sm:h-[197px] md:h-[254px] h-[368px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20.06px] rounded-tr-[20.06px] shadow-bs4 w-[100%]"></div>
                        <div className="bg-gradient7  h-[111px] sm:h-[60px] md:h-[77px] mt-[14px] sm:mt-[7px] md:mt-[9px] rounded-bl-[36.78px] rounded-br-[36.78px] rounded-tl-[0] rounded-tr-[0] w-[100%]"></div>
                      </Column>
                    </Column>
                    <Img
                      src="images/img_011.png"
                      className="absolute h-[401px] max-w-[100%] top-[1%] w-[100%]"
                      alt="Eleven One"
                    />
                  </Stack>
                  <Text
                    className="absolute bottom-[6%] inset-x-[0] mx-[auto] text-white_A700 w-[max-content]"
                    as="h6"
                    variant="h6"
                  >
                    d-3.0x
                  </Text>
                </Stack>
                <Stack className="h-[494px] relative w-[100%]">
                  <Stack className="absolute h-[494px] w-[100%]">
                    <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <div className="bg-white_A700 sm:h-[197px] md:h-[254px] h-[368px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20.06px] rounded-tr-[20.06px] shadow-bs4 w-[100%]"></div>
                        <div className="bg-gradient7  h-[111px] sm:h-[60px] md:h-[77px] mt-[14px] sm:mt-[7px] md:mt-[9px] rounded-bl-[36.78px] rounded-br-[36.78px] rounded-tl-[0] rounded-tr-[0] w-[100%]"></div>
                      </Column>
                    </Column>
                    <Img
                      src="images/img_011.png"
                      className="absolute h-[401px] max-w-[100%] top-[1%] w-[100%]"
                      alt="Eleven Two"
                    />
                  </Stack>
                  <Text
                    className="absolute bottom-[6%] inset-x-[0] mx-[auto] text-white_A700 w-[max-content]"
                    as="h6"
                    variant="h6"
                  >
                    d-3.0x
                  </Text>
                </Stack>
              </List>
              <Column className="flex flex-col justify-start ml-[100px] md:ml-[68px] mt-[4px] sm:mx-[0] pb-[1px] pr-[1px] sm:px-[0] sm:w-[100%] w-[19%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                  <Text
                    className="font-bebasneue text-green_804 md:tracking-ls1 sm:tracking-ls1 tracking-ls2125531768798828 w-[auto]"
                    variant="body15"
                  >
                    Categorias
                  </Text>
                  <CheckBox
                    className="font-inter font-medium ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[21px] pl-[3px] text-[16.53px] text-gray_601"
                    inputClassName="h-[18.89px] mr-[5px] w-[18.89px]"
                    name="Mquinasparap One"
                    label="Máquinas para pintura"
                    size="sm"
                    variant="OutlineGreen924"
                  ></CheckBox>
                  <CheckBox
                    className="font-inter font-medium ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] pl-[3px] text-[16.53px] text-gray_601"
                    inputClassName="h-[18.89px] mr-[5px] w-[18.89px]"
                    name="Lixadeiras"
                    label="Lixadeiras"
                    size="sm"
                  ></CheckBox>
                  <CheckBox
                    className="font-inter font-medium ml-[1px] mt-[13px] sm:mt-[6px] md:mt-[8px] pl-[3px] text-[16.53px] text-gray_601"
                    inputClassName="h-[18.89px] mr-[5px] w-[18.89px]"
                    name="Aspiradores"
                    label="Aspiradores"
                    size="sm"
                  ></CheckBox>
                  <CheckBox
                    className="font-inter font-medium ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] pl-[3px] text-[16.53px] text-gray_601"
                    inputClassName="h-[18.89px] mr-[5px] w-[18.89px]"
                    name="Misturadores"
                    label="Misturadores"
                    size="sm"
                  ></CheckBox>
                  <CheckBox
                    className="font-inter font-medium ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] pl-[3px] text-[16.53px] text-gray_601"
                    inputClassName="h-[18.89px] mr-[5px] w-[18.89px]"
                    name="Fresadoradepa"
                    label="Fresadora de parede"
                    size="sm"
                  ></CheckBox>
                  <CheckBox
                    className="font-inter font-medium ml-[1px] mt-[13px] sm:mt-[6px] md:mt-[8px] pl-[3px] text-[16.53px] text-gray_601"
                    inputClassName="h-[18.89px] mr-[5px] w-[18.89px]"
                    name="Lixaseabrasiv"
                    label="Lixas e abrasivos"
                    size="sm"
                  ></CheckBox>
                  <CheckBox
                    className="font-inter font-medium ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] pl-[3px] text-[16.53px] text-gray_601"
                    inputClassName="h-[18.89px] mr-[5px] w-[18.89px]"
                    name="Peas"
                    label="Peças"
                    size="sm"
                  ></CheckBox>
                  <CheckBox
                    className="font-inter font-medium ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] pl-[3px] text-[16.53px] text-gray_601"
                    inputClassName="h-[18.89px] mr-[5px] w-[18.89px]"
                    name="Acessrios"
                    label="Acessórios"
                    size="sm"
                  ></CheckBox>
                </Column>
                <Img
                  src="images/img_linha.svg"
                  className="max-w-[100%] sm:mt-[14px] md:mt-[18px] mt-[27px] sm:w-[100%] w-[91%]"
                  alt="Linha"
                />
                <Column className="flex flex-col justify-start ml-[1px] md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                  <Text
                    className="font-bebasneue text-green_804 md:tracking-ls1 sm:tracking-ls1 tracking-ls2125531768798828 w-[auto]"
                    variant="body15"
                  >
                    tipo de produto
                  </Text>
                  <CheckBox
                    className="font-inter font-medium leading-[normal] sm:mt-[14px] md:mt-[18px] mt-[27px] sm:pl-[2px] md:pl-[3px] pl-[5px] text-[16.53px] text-gray_601 w-[100%]"
                    inputClassName="h-[18.89px] mr-[5px] w-[18.89px]"
                    name="airlessdiafrag"
                    label="airless diafragma (7523)"
                  ></CheckBox>
                  <CheckBox
                    className="font-inter font-medium mt-[13px] sm:mt-[6px] md:mt-[8px] sm:pl-[2px] md:pl-[3px] pl-[5px] text-[16.53px] text-gray_601"
                    inputClassName="h-[18.89px] mr-[5px] w-[18.89px]"
                    name="airlesspisto"
                    label="airless pistão (7523)"
                    size="sm"
                  ></CheckBox>
                </Column>
              </Column>
            </Row>
            <List
              className="sm:gap-[17px] md:gap-[23px] gap-[33.65px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 max-w-[870px] min-h-[auto] sm:ml-[71px] md:ml-[92px] sm:mt-[29px] md:mt-[38px] mt-[56px] mx-[auto] sm:px-[15px] w-[100%]"
              orientation="horizontal"
            >
              <Stack className="h-[494px] relative w-[100%]">
                <Stack className="absolute h-[494px] w-[100%]">
                  <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <div className="bg-white_A700 sm:h-[197px] md:h-[254px] h-[368px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20.06px] rounded-tr-[20.06px] shadow-bs4 w-[100%]"></div>
                      <div className="bg-gradient7  h-[111px] sm:h-[60px] md:h-[77px] mt-[14px] sm:mt-[7px] md:mt-[9px] rounded-bl-[36.78px] rounded-br-[36.78px] rounded-tl-[0] rounded-tr-[0] w-[100%]"></div>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_011.png"
                    className="absolute h-[401px] max-w-[100%] top-[1%] w-[100%]"
                    alt="Eleven Three"
                  />
                </Stack>
                <Text
                  className="absolute bottom-[6%] inset-x-[0] mx-[auto] text-white_A700 w-[max-content]"
                  as="h6"
                  variant="h6"
                >
                  d-3.0x
                </Text>
              </Stack>
              <Stack className="h-[494px] relative w-[100%]">
                <Stack className="absolute h-[494px] w-[100%]">
                  <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <div className="bg-white_A700 sm:h-[197px] md:h-[254px] h-[368px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20.06px] rounded-tr-[20.06px] shadow-bs4 w-[100%]"></div>
                      <div className="bg-gradient7  h-[111px] sm:h-[60px] md:h-[77px] mt-[14px] sm:mt-[7px] md:mt-[9px] rounded-bl-[36.78px] rounded-br-[36.78px] rounded-tl-[0] rounded-tr-[0] w-[100%]"></div>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_011.png"
                    className="absolute h-[401px] max-w-[100%] top-[1%] w-[100%]"
                    alt="Eleven Four"
                  />
                </Stack>
                <Text
                  className="absolute bottom-[6%] inset-x-[0] mx-[auto] text-white_A700 w-[max-content]"
                  as="h6"
                  variant="h6"
                >
                  d-3.0x
                </Text>
              </Stack>
              <Stack className="h-[494px] relative w-[100%]">
                <Stack className="absolute h-[494px] w-[100%]">
                  <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <div className="bg-white_A700 sm:h-[197px] md:h-[254px] h-[368px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20.06px] rounded-tr-[20.06px] shadow-bs4 w-[100%]"></div>
                      <div className="bg-gradient7  h-[111px] sm:h-[60px] md:h-[77px] mt-[14px] sm:mt-[7px] md:mt-[9px] rounded-bl-[36.78px] rounded-br-[36.78px] rounded-tl-[0] rounded-tr-[0] w-[100%]"></div>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_011.png"
                    className="absolute h-[401px] max-w-[100%] top-[1%] w-[100%]"
                    alt="Eleven Five"
                  />
                </Stack>
                <Text
                  className="absolute bottom-[6%] inset-x-[0] mx-[auto] text-white_A700 w-[max-content]"
                  as="h6"
                  variant="h6"
                >
                  d-3.0x
                </Text>
              </Stack>
            </List>
            <Footer1 className="bg-gray_900 font-inter sm:mt-[108px] md:mt-[139px] mt-[203px] w-[100%]" />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ProdutosPage;
