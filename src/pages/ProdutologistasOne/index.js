import React from "react";

import { Column, Stack, Img, Text, Row, List, Button, Line } from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const ProdutologistasOnePage = () => {
  return (
    <>
      <Column className="bg-bluegray_50 flex flex-col font-bebasneue items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
            <Stack className="h-[63px] relative w-[100%]">
              <Img
                src="images/img_vector117_4.png"
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
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1170px] sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                    <div className="bg-bluegray_100 border border-gray_400 border-solid sm:h-[43px] md:h-[56px] h-[80px] rounded-radius10 w-[100%]"></div>
                    <div className="bg-bluegray_100 border border-gray_400 border-solid sm:h-[43px] md:h-[56px] h-[80px] mt-[10px] sm:mt-[5px] md:mt-[6px] rounded-radius10 w-[100%]"></div>
                    <div className="bg-bluegray_100 border border-gray_400 border-solid sm:h-[43px] md:h-[56px] h-[80px] mt-[10px] sm:mt-[5px] md:mt-[6px] rounded-radius10 w-[100%]"></div>
                    <div className="bg-bluegray_100 border border-gray_400 border-solid sm:h-[43px] md:h-[56px] h-[80px] mt-[10px] sm:mt-[5px] md:mt-[6px] rounded-radius10 w-[100%]"></div>
                  </Column>
                  <Stack className="h-[361px] sm:ml-[26px] md:ml-[34px] ml-[50px] relative sm:w-[100%] w-[74%]">
                    <Img
                      src="images/img_011.png"
                      className="absolute h-[351px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[59%]"
                      alt="Eleven"
                    />
                    <div className="absolute border border-gray_400 border-solid bottom-[3%] sm:h-[187px] md:h-[241px] h-[350px] rounded-radius10 w-[100%]"></div>
                  </Stack>
                </Row>
                <Column className="flex flex-col items-center justify-start sm:mt-[18px] md:mt-[24px] mt-[35px] w-[100%]">
                  <Stack className="bg-bluegray_100 h-[300px] sm:p-[15px] md:p-[62px] p-[91px] relative rounded-radius2233 w-[100%]">
                    <Img
                      src="images/img_vector_gray_900.svg"
                      className="absolute h-[117px] inset-[0] justify-center m-[auto] max-w-[100%] w-[117px] sm:w-[62px] md:w-[80px]"
                      alt="Vector"
                    />
                  </Stack>
                  <Text
                    className="leading-[103.00%] sm:mt-[25px] md:mt-[33px] mt-[48px] sm:mx-[0] text-green_901 sm:w-[100%] w-[85%]"
                    variant="body1"
                  >
                    Apresentação Técnica - Turbina
                    <br />
                    Sopro e Aspiração Nauber TBN-750
                  </Text>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[45px] md:mt-[59px] mt-[86px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Text className="text-green_901 w-[auto]" variant="body12">
                      Downloads
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[27px] md:mt-[35px] mt-[52px] w-[100%]">
                      <List
                        className="sm:gap-[30px] md:gap-[38px] gap-[56.5px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[71%]"
                        orientation="horizontal"
                      >
                        <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                              <Stack className="h-[124px] relative w-[100%]">
                                <div className="absolute bg-gradient3  h-[112px] sm:h-[60px] md:h-[78px] inset-y-[4%] right-[1%] rounded-radius50 w-[112px] sm:w-[59px] md:w-[77px]"></div>
                                <Img
                                  src="images/img_manual1.png"
                                  className="absolute h-[98px] max-w-[100%] w-[100%]"
                                  alt="ManualOne"
                                />
                                <Img
                                  src="images/img_flagbrasil1.png"
                                  className="absolute h-[19px] inset-x-[0] max-w-[100%] mx-[auto] w-[34%]"
                                  alt="FlagBrasilTwo"
                                />
                              </Stack>
                              <Text
                                className="mt-[3px] text-gray_900 w-[auto]"
                                variant="body24"
                              >
                                Manual de instruções
                              </Text>
                            </Column>
                            <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                              <Img
                                src="images/img_flagespanha1.png"
                                className="max-w-[100%] sm:w-[100%] w-[98%]"
                                alt="FlagEspanhaTwo"
                              />
                              <Img
                                src="images/img_flageua1.png"
                                className="max-w-[100%] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:w-[100%] w-[98%]"
                                alt="FlagEUATwo"
                              />
                            </Column>
                          </Row>
                        </Column>
                        <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                              <Stack className="h-[118px] relative w-[100%]">
                                <Stack className="absolute bg-gradient3  bottom-[0] h-[112px] md:p-[14px] p-[21px] sm:px-[15px] sm:py-[11px] rounded-radius50 w-[112px] sm:w-[59px] md:w-[77px]">
                                  <Img
                                    src="images/img_file.svg"
                                    className="absolute h-[68px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[49%]"
                                    alt="file"
                                  />
                                </Stack>
                                <Img
                                  src="images/img_flagbrasil1.png"
                                  className="absolute h-[19px] inset-x-[0] max-w-[100%] mx-[auto] top-[0] w-[34%]"
                                  alt="FlagBrasilTwo One"
                                />
                              </Stack>
                              <Text
                                className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[auto]"
                                variant="body24"
                              >
                                fecha técnica
                              </Text>
                            </Column>
                            <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                              <Img
                                src="images/img_flagespanha1.png"
                                className="max-w-[100%] sm:w-[100%] w-[98%]"
                                alt="FlagEspanhaThree"
                              />
                              <Img
                                src="images/img_flageua1.png"
                                className="max-w-[100%] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:w-[100%] w-[98%]"
                                alt="FlagEUAThree"
                              />
                            </Column>
                          </Row>
                        </Column>
                      </List>
                      <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                        <Stack className="h-[118px] relative w-[100%]">
                          <Stack className="absolute bg-gradient3  bottom-[0] h-[112px] md:p-[14px] p-[21px] sm:px-[15px] sm:py-[11px] rounded-radius50 w-[112px] sm:w-[59px] md:w-[77px]">
                            <Img
                              src="images/img_file.svg"
                              className="absolute h-[68px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[49%]"
                              alt="file One"
                            />
                          </Stack>
                          <Img
                            src="images/img_flagbrasil1.png"
                            className="absolute h-[19px] inset-x-[0] max-w-[100%] mx-[auto] top-[0] w-[34%]"
                            alt="FlagBrasilTwo Two"
                          />
                        </Stack>
                        <Text
                          className="mt-[10px] sm:mt-[5px] md:mt-[6px] text-gray_900 w-[auto]"
                          variant="body24"
                        >
                          vista explodida
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="flex flex-col md:ml-[20px] ml-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                <Button
                  className="cursor-pointer font-bold min-w-[100%] ml-[1px] sm:text-[34px] md:text-[36px] text-[38px] text-center w-[max-content]"
                  shape="CustomBorderTL20"
                  variant="GradientGreen903Green801"
                >
                  máquinas para pintura d-3.0x
                </Button>
                <Column className="flex flex-col font-inter items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                  <Column className="bg-gradient4  flex flex-col items-center justify-start sm:p-[4px] md:p-[6px] p-[9px] rounded-radius659 w-[100%]">
                    <List
                      className="md:gap-[12px] gap-[18.67px] sm:gap-[9px] sm:mb-[25px] md:mb-[33px] mb-[48px] min-h-[auto] sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]"
                      orientation="vertical"
                    >
                      <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[4px] md:p-[6px] p-[9px] rounded-radius659 shadow-bs5 w-[100%]">
                        <Column className="flex flex-col justify-start sm:mb-[4px] md:mb-[6px] mb-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                            <Column className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                              <Text
                                className="font-bold text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                Nome da loja aqui
                              </Text>
                              <Text
                                className="font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                Localização: Rua bla bla bla - n°000
                              </Text>
                              <Text
                                className="font-normal mt-[3px] not-italic text-green_908 w-[auto]"
                                variant="body28"
                              >
                                Aberto - Fecha às 18:00
                              </Text>
                            </Column>
                            <Column className="flex flex-col items-center justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                              <Img
                                src="images/img_logorevendapr.png"
                                className="max-w-[100%] w-[100%]"
                                alt="LOGOREVENDAPR One"
                              />
                              <Img
                                src="images/img_call_23X24.svg"
                                className="max-w-[100%] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:w-[100%] w-[73%]"
                                alt="call"
                              />
                            </Column>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                            <Text
                              className="flex-grow font-normal not-italic text-gray_700"
                              variant="body28"
                            >
                              (41) 90000-0000
                            </Text>
                            <Img
                              src="images/img_location_23X24.svg"
                              className="flex-shrink-0 max-w-[100%] mt-[2px] w-[8%]"
                              alt="location"
                            />
                          </Row>
                          <Text
                            className="font-normal mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                            variant="body28"
                          >
                            Compras na loja - Retirada na loja - Entrega
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[4px] md:p-[6px] p-[9px] rounded-radius659 shadow-bs5 w-[100%]">
                        <Column className="flex flex-col justify-start sm:mb-[4px] md:mb-[6px] mb-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                            <Column className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                              <Text
                                className="font-bold text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                Nome da loja aqui
                              </Text>
                              <Text
                                className="font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                Localização: Rua bla bla bla - n°000
                              </Text>
                              <Text
                                className="font-normal mt-[3px] not-italic text-green_908 w-[auto]"
                                variant="body28"
                              >
                                Aberto - Fecha às 18:00
                              </Text>
                            </Column>
                            <Column className="flex flex-col items-center justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                              <Img
                                src="images/img_logorevendapr.png"
                                className="max-w-[100%] w-[100%]"
                                alt="LOGOREVENDAPR Two"
                              />
                              <Img
                                src="images/img_call_23X24.svg"
                                className="max-w-[100%] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:w-[100%] w-[73%]"
                                alt="call One"
                              />
                            </Column>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                            <Text
                              className="flex-grow font-normal not-italic text-gray_700"
                              variant="body28"
                            >
                              (41) 90000-0000
                            </Text>
                            <Img
                              src="images/img_location_23X24.svg"
                              className="flex-shrink-0 max-w-[100%] mt-[2px] w-[8%]"
                              alt="location One"
                            />
                          </Row>
                          <Text
                            className="font-normal mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                            variant="body28"
                          >
                            Compras na loja - Retirada na loja - Entrega
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius659 shadow-bs5 w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                            <Text
                              className="flex-grow font-bold mt-[1px] text-gray_700"
                              variant="body28"
                            >
                              Nome da loja aqui
                            </Text>
                            <Img
                              src="images/img_call_23X24.svg"
                              className="flex-shrink-0 max-w-[100%] w-[8%]"
                              alt="call Two"
                            />
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[3px] md:mt-[4px] mt-[6px] w-[100%]">
                            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                              <Text
                                className="font-normal not-italic text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                Localização: Rua bla bla bla - n°000
                              </Text>
                              <Text
                                className="font-normal mt-[3px] not-italic text-green_908 w-[auto]"
                                variant="body28"
                              >
                                Aberto - Fecha às 18:00
                              </Text>
                              <Text
                                className="font-normal mt-[3px] not-italic text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                (41) 90000-0000
                              </Text>
                              <Text
                                className="font-normal sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                Compras na loja - Retirada na loja - Entrega
                              </Text>
                            </Column>
                            <Img
                              src="images/img_location_23X24.svg"
                              className="max-w-[100%] mt-[2px] w-[8%]"
                              alt="location Two"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius659 shadow-bs5 w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                            <Text
                              className="flex-grow font-bold mt-[1px] text-gray_700"
                              variant="body28"
                            >
                              Nome da loja aqui
                            </Text>
                            <Img
                              src="images/img_call_23X24.svg"
                              className="flex-shrink-0 max-w-[100%] w-[8%]"
                              alt="call Three"
                            />
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[3px] md:mt-[4px] mt-[6px] w-[100%]">
                            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                              <Text
                                className="font-normal not-italic text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                Localização: Rua bla bla bla - n°000
                              </Text>
                              <Text
                                className="font-normal mt-[3px] not-italic text-green_908 w-[auto]"
                                variant="body28"
                              >
                                Aberto - Fecha às 18:00
                              </Text>
                              <Text
                                className="font-normal mt-[3px] not-italic text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                (41) 90000-0000
                              </Text>
                              <Text
                                className="font-normal sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                Compras na loja - Retirada na loja - Entrega
                              </Text>
                            </Column>
                            <Img
                              src="images/img_location_23X24.svg"
                              className="max-w-[100%] mt-[2px] w-[8%]"
                              alt="location Three"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius659 shadow-bs5 w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                            <Text
                              className="flex-grow font-bold mt-[1px] text-gray_700"
                              variant="body28"
                            >
                              Nome da loja aqui
                            </Text>
                            <Img
                              src="images/img_call_23X24.svg"
                              className="flex-shrink-0 max-w-[100%] w-[8%]"
                              alt="call Four"
                            />
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[3px] md:mt-[4px] mt-[6px] w-[100%]">
                            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                              <Text
                                className="font-normal not-italic text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                Localização: Rua bla bla bla - n°000
                              </Text>
                              <Text
                                className="font-normal mt-[3px] not-italic text-green_908 w-[auto]"
                                variant="body28"
                              >
                                Aberto - Fecha às 18:00
                              </Text>
                              <Text
                                className="font-normal mt-[3px] not-italic text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                (41) 90000-0000
                              </Text>
                              <Text
                                className="font-normal sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                Compras na loja - Retirada na loja - Entrega
                              </Text>
                            </Column>
                            <Img
                              src="images/img_location_23X24.svg"
                              className="max-w-[100%] mt-[2px] w-[8%]"
                              alt="location Four"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius659 shadow-bs5 w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                            <Text
                              className="flex-grow font-bold mt-[1px] text-gray_700"
                              variant="body28"
                            >
                              Nome da loja aqui
                            </Text>
                            <Img
                              src="images/img_call_23X24.svg"
                              className="flex-shrink-0 max-w-[100%] w-[8%]"
                              alt="call Five"
                            />
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[3px] md:mt-[4px] mt-[6px] w-[100%]">
                            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                              <Text
                                className="font-normal not-italic text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                Localização: Rua bla bla bla - n°000
                              </Text>
                              <Text
                                className="font-normal mt-[3px] not-italic text-green_908 w-[auto]"
                                variant="body28"
                              >
                                Aberto - Fecha às 18:00
                              </Text>
                              <Text
                                className="font-normal mt-[3px] not-italic text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                (41) 90000-0000
                              </Text>
                              <Text
                                className="font-normal sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-gray_700 w-[auto]"
                                variant="body28"
                              >
                                Compras na loja - Retirada na loja - Entrega
                              </Text>
                            </Column>
                            <Img
                              src="images/img_location_23X24.svg"
                              className="max-w-[100%] mt-[2px] w-[8%]"
                              alt="location Five"
                            />
                          </Row>
                        </Column>
                      </Column>
                    </List>
                  </Column>
                </Column>
              </Column>
            </Row>
            <Column className="flex flex-col justify-start max-w-[1170px] sm:mt-[45px] md:mt-[58px] mt-[85px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
              <Text
                className="bg-clip-text bg-gradient5  text-transparent md:tracking-ls1 sm:tracking-ls1 tracking-ls28000000000000003 w-[auto]"
                variant="body11"
              >
                produtos relacionados
              </Text>
              <Line className="bg-gray_200 h-[2.5px] mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]" />
              <Line className="bg-green_802 h-[2.5px] w-[11%]" />
            </Column>
            <List
              className="sm:gap-[10px] md:gap-[13px] gap-[19.78px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 max-w-[1167px] min-h-[auto] sm:mt-[23px] md:mt-[30px] mt-[44px] mx-[auto] sm:px-[15px] w-[100%]"
              orientation="horizontal"
            >
              <Stack className="h-[517px] relative w-[100%]">
                <Column className="absolute bg-gradient6  border-bw124 border-gray_300 border-solid flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[7px] rounded-radius1236 shadow-bs3 top-[2%] w-[100%]">
                  <div className="bg-gray_50 border-bw124 border-gray_300 border-solid sm:h-[144px] md:h-[186px] h-[269px] mt-[2px] rounded-radius1236 w-[100%]"></div>
                  <Column className="flex flex-col justify-start sm:mb-[13px] md:mb-[17px] mb-[25px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                    <Text
                      className="font-bebasneue text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      D-3.0X{" "}
                    </Text>
                    <Text
                      className="font-inter sm:mt-[11px] md:mt-[15px] mt-[22px] text-white_A700 w-[auto]"
                      variant="body22"
                    >
                      Breve descrição sobre o produto
                    </Text>
                    <Button
                      className="flex items-center justify-center md:ml-[8px] md:mt-[33px] min-w-[72%] ml-[12px] mt-[49px] sm:ml-[6px] sm:mt-[26px] text-center w-[max-content]"
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="ml-[15px] sm:ml-[7px] md:ml-[10px] text-center"
                          alt="arrow_right"
                        />
                      }
                      shape="RoundedBorder6"
                    >
                      <div className="bg-transparent cursor-pointer font-inter font-medium text-[12.36px] md:tracking-ls1 sm:tracking-ls1 tracking-ls24724576950073245">
                        SAIBA MAIS
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Img
                  src="images/img_011.png"
                  className="absolute h-[305px] inset-x-[0] max-w-[100%] mx-[auto] sm:w-[100%] w-[74%]"
                  alt="Twelve"
                />
              </Stack>
              <Stack className="h-[517px] relative w-[100%]">
                <Column className="absolute bg-gradient6  border-bw124 border-gray_300 border-solid flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[7px] rounded-radius1236 shadow-bs3 top-[2%] w-[100%]">
                  <div className="bg-gray_50 border-bw124 border-gray_300 border-solid sm:h-[144px] md:h-[186px] h-[269px] mt-[2px] rounded-radius1236 w-[100%]"></div>
                  <Column className="flex flex-col justify-start sm:mb-[13px] md:mb-[17px] mb-[25px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                    <Text
                      className="font-bebasneue text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      D-3.0X{" "}
                    </Text>
                    <Text
                      className="font-inter sm:mt-[11px] md:mt-[15px] mt-[22px] text-white_A700 w-[auto]"
                      variant="body22"
                    >
                      Breve descrição sobre o produto
                    </Text>
                    <Button
                      className="flex items-center justify-center md:ml-[8px] md:mt-[33px] min-w-[72%] ml-[12px] mt-[49px] sm:ml-[6px] sm:mt-[26px] text-center w-[max-content]"
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="ml-[15px] sm:ml-[7px] md:ml-[10px] text-center"
                          alt="arrow_right"
                        />
                      }
                      shape="RoundedBorder6"
                    >
                      <div className="bg-transparent cursor-pointer font-inter font-medium text-[12.36px] md:tracking-ls1 sm:tracking-ls1 tracking-ls24724576950073245">
                        SAIBA MAIS
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Img
                  src="images/img_011.png"
                  className="absolute h-[305px] inset-x-[0] max-w-[100%] mx-[auto] sm:w-[100%] w-[74%]"
                  alt="Twelve One"
                />
              </Stack>
              <Stack className="h-[517px] relative w-[100%]">
                <Column className="absolute bg-gradient6  border-bw124 border-gray_300 border-solid flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[7px] rounded-radius1236 shadow-bs3 top-[2%] w-[100%]">
                  <div className="bg-gray_50 border-bw124 border-gray_300 border-solid sm:h-[144px] md:h-[186px] h-[269px] mt-[2px] rounded-radius1236 w-[100%]"></div>
                  <Column className="flex flex-col justify-start sm:mb-[13px] md:mb-[17px] mb-[25px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                    <Text
                      className="font-bebasneue text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      D-3.0X{" "}
                    </Text>
                    <Text
                      className="font-inter sm:mt-[11px] md:mt-[15px] mt-[22px] text-white_A700 w-[auto]"
                      variant="body22"
                    >
                      Breve descrição sobre o produto
                    </Text>
                    <Button
                      className="flex items-center justify-center md:ml-[8px] md:mt-[33px] min-w-[72%] ml-[12px] mt-[49px] sm:ml-[6px] sm:mt-[26px] text-center w-[max-content]"
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="ml-[15px] sm:ml-[7px] md:ml-[10px] text-center"
                          alt="arrow_right"
                        />
                      }
                      shape="RoundedBorder6"
                    >
                      <div className="bg-transparent cursor-pointer font-inter font-medium text-[12.36px] md:tracking-ls1 sm:tracking-ls1 tracking-ls24724576950073245">
                        SAIBA MAIS
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Img
                  src="images/img_011.png"
                  className="absolute h-[305px] inset-x-[0] max-w-[100%] mx-[auto] sm:w-[100%] w-[74%]"
                  alt="Twelve Two"
                />
              </Stack>
              <Stack className="h-[517px] relative w-[100%]">
                <Column className="absolute bg-gradient6  border-bw124 border-gray_300 border-solid flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[7px] rounded-radius1236 shadow-bs3 top-[2%] w-[100%]">
                  <div className="bg-gray_50 border-bw124 border-gray_300 border-solid sm:h-[144px] md:h-[186px] h-[269px] mt-[2px] rounded-radius1236 w-[100%]"></div>
                  <Column className="flex flex-col justify-start sm:mb-[13px] md:mb-[17px] mb-[25px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                    <Text
                      className="font-bebasneue text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      D-3.0X{" "}
                    </Text>
                    <Text
                      className="font-inter sm:mt-[11px] md:mt-[15px] mt-[22px] text-white_A700 w-[auto]"
                      variant="body22"
                    >
                      Breve descrição sobre o produto
                    </Text>
                    <Button
                      className="flex items-center justify-center md:ml-[8px] md:mt-[33px] min-w-[72%] ml-[12px] mt-[49px] sm:ml-[6px] sm:mt-[26px] text-center w-[max-content]"
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="ml-[15px] sm:ml-[7px] md:ml-[10px] text-center"
                          alt="arrow_right"
                        />
                      }
                      shape="RoundedBorder6"
                    >
                      <div className="bg-transparent cursor-pointer font-inter font-medium text-[12.36px] md:tracking-ls1 sm:tracking-ls1 tracking-ls24724576950073245">
                        SAIBA MAIS
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Img
                  src="images/img_011.png"
                  className="absolute h-[305px] inset-x-[0] max-w-[100%] mx-[auto] sm:w-[100%] w-[74%]"
                  alt="Twelve Three"
                />
              </Stack>
            </List>
            <Footer className="bg-gray_900 font-inter sm:mt-[28px] md:mt-[36px] mt-[53px] w-[100%]" />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ProdutologistasOnePage;
