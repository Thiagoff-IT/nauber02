import React from "react";

import { Column, Stack, Img, Text, Row, Input, Grid } from "components";
import Header2 from "components/Header/Header2";
import { CloseSVG } from "../../assets/images/index.js";
import Footer1 from "components/Footer/Footer1";

const AssistnciaPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <Column className="bg-bluegray_50 flex flex-col font-bebasneue items-center justify-start mx-[auto] w-[100%]">
        <Header2 className="w-[100%]" />
        <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
          <Stack className="h-[63px] relative w-[100%]">
            <Img
              src="images/img_vector117_5.png"
              className="absolute h-[12px] max-w-[100%] top-[35%] w-[100%]"
              alt="Vector117"
            />
            <Column
              className="absolute bg-cover bg-no-repeat flex flex-col justify-start sm:mx-[0] p-[3px] sm:w-[100%] w-[38%]"
              style={{ backgroundImage: "url('images/img_group34.png')" }}
            >
              <Text
                className="mb-[1px] ml-[130px] sm:ml-[69px] md:ml-[89px] text-white_A700 w-[auto]"
                variant="body4"
              >
                assistências
              </Text>
            </Column>
          </Stack>
          <Column className="bg-gradient4  flex flex-col items-center justify-start max-w-[1171px] sm:mt-[38px] md:mt-[50px] mt-[73px] sm:mx-[0] mx-[auto] md:p-[21px] p-[31px] sm:px-[15px] sm:py-[16px] rounded-radius10 shadow-bs6 w-[100%]">
            <Column className="flex flex-col items-center justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
              <Text className="text-white_A700 w-[auto]" variant="body16">
                Localize a assistência mais próximo de você
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start justify-between md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                <Stack className="h-[42px] sm:mt-[15px] md:mt-[20px] mt-[30px] relative sm:w-[100%] w-[69%]">
                  <Text
                    className="absolute font-normal not-italic right-[41%] text-white_A700 top-[2%] w-[auto]"
                    variant="body26"
                  >
                    ou
                  </Text>
                  <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between shadow-bs7 w-[100%]">
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-normal not-italic p-[0] text-[12.49px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                      wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[47%]"
                      name="CEP"
                      placeholder="Informe seu CEP"
                      suffix={
                        inputvalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer ml-[35px] mr-[5px] sm:mr-[2px] sm:ml-[18px] md:mr-[3px] md:ml-[24px] my-[auto]"
                            onClick={() => setInputvalue("")}
                            color="#929292"
                          />
                        ) : (
                          <Img
                            src="images/img_search.svg"
                            className="cursor-pointer ml-[35px] mr-[5px] sm:mr-[2px] sm:ml-[18px] md:mr-[3px] md:ml-[24px] my-[auto]"
                            alt="search"
                          />
                        )
                      }
                      shape="srcRoundedBorder6"
                      size="smSrc"
                      variant="srcFillWhiteA700"
                    ></Input>
                    <Input
                      value={inputvalue1}
                      onChange={(e) => setInputvalue1(e?.target?.value)}
                      className="font-normal not-italic p-[0] text-[12.49px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                      wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[47%]"
                      name="Cidade"
                      placeholder="Informe a sua Cidade"
                      suffix={
                        inputvalue1?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer ml-[35px] mr-[5px] sm:mr-[2px] sm:ml-[18px] md:mr-[3px] md:ml-[24px] my-[auto]"
                            onClick={() => setInputvalue1("")}
                            color="#929292"
                          />
                        ) : (
                          <Img
                            src="images/img_search.svg"
                            className="cursor-pointer ml-[35px] mr-[5px] sm:mr-[2px] sm:ml-[18px] md:mr-[3px] md:ml-[24px] my-[auto]"
                            alt="search"
                          />
                        )
                      }
                      shape="srcRoundedBorder6"
                      size="smSrc"
                      variant="srcFillWhiteA700"
                    ></Input>
                  </Row>
                </Stack>
                <Stack className="h-[115px] relative w-[26%]">
                  <Text
                    className="absolute font-normal left-[2%] not-italic text-white_A700 top-[26%] w-[auto]"
                    variant="body26"
                  >
                    ou
                  </Text>
                  <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Stack className="h-[86px] relative w-[100%]">
                        <Column className="absolute bg-white_A700 flex flex-col h-[max-content] inset-y-[0] items-center justify-start sm:mx-[0] my-[auto] sm:p-[4px] md:p-[6px] p-[9px] right-[0] rounded-radius1717 sm:w-[100%] w-[75%]">
                          <Text
                            className="mb-[1px] not-italic text-gray_500 w-[auto]"
                            variant="body29"
                          >
                            Usar minha localização
                          </Text>
                        </Column>
                        <Stack className="absolute bg-white_A700 h-[86px] left-[0] sm:p-[4px] md:p-[6px] p-[9px] rounded-radius50 sm:w-[45px] md:w-[59px] w-[86px]">
                          <Img
                            src="images/img_global11.png"
                            className="absolute h-[66px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[35px] md:w-[45px] w-[66px]"
                            alt="globalEleven"
                          />
                        </Stack>
                      </Stack>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly md:mt-[10px] mt-[15px] sm:mt-[7px] sm:px-[0] w-[100%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex-shrink-0 h-[13px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[13px] sm:w-[6px] md:w-[8px]"
                          alt="checkmark"
                        />
                        <Text
                          className="flex-grow mt-[1px] not-italic text-white_A700"
                          as="h3"
                          variant="h3"
                        >
                          concordo em compartilhar a minha localização
                          geográfica atual.
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Stack>
              </Row>
            </Column>
          </Column>
          <Text
            className="sm:mt-[43px] md:mt-[55px] mt-[81px] text-green_930 w-[auto]"
            variant="body8"
          >
            assistências mais próximas
          </Text>
          <Grid className="font-inter sm:gap-[15px] md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 max-w-[1170px] min-h-[auto] sm:mt-[18px] md:mt-[24px] mt-[35px] mx-[auto] sm:px-[15px] w-[100%]">
            <Stack className="h-[166px] relative w-[100%]">
              <Column className="absolute bg-white_A700 flex flex-col items-center justify-end p-[13px] sm:p-[6px] md:p-[8px] rounded-radius698 shadow-bs8 top-[1%] w-[100%]">
                <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[7px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-gray_700 w-[auto]"
                        variant="body25"
                      >
                        Localização: Rua bla bla bla - n°000
                      </Text>
                      <Text
                        className="mt-[3px] not-italic text-green_908 w-[auto]"
                        variant="body25"
                      >
                        Email: assistencia@loja.com.br
                      </Text>
                    </Column>
                    <Img
                      src="images/img_call_23X24.svg"
                      className="max-w-[100%] mb-[3px] sm:mt-[4px] md:mt-[6px] mt-[9px] w-[8%]"
                      alt="call"
                    />
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] w-[100%]">
                    <Text
                      className="flex-grow not-italic text-gray_700"
                      variant="body25"
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
                    variant="body26"
                  >
                    Cidade que atende: Nome da cidade{" "}
                  </Text>
                </Column>
              </Column>
              <Input
                className="absolute font-bold p-[0] text-[14.25px] placeholder:text-white_A700 text-white_A700 top-[0] w-[100%]"
                wrapClassName="absolute w-[100%]"
                name="GroupSeventySix"
                placeholder="Nome da assistência"
              ></Input>
            </Stack>
            <Stack className="h-[166px] relative w-[100%]">
              <Column className="absolute bg-white_A700 flex flex-col items-center justify-end p-[13px] sm:p-[6px] md:p-[8px] rounded-radius698 shadow-bs8 top-[1%] w-[100%]">
                <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[7px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-gray_700 w-[auto]"
                        variant="body25"
                      >
                        Localização: Rua bla bla bla - n°000
                      </Text>
                      <Text
                        className="mt-[3px] not-italic text-green_908 w-[auto]"
                        variant="body25"
                      >
                        Email: assistencia@loja.com.br
                      </Text>
                    </Column>
                    <Img
                      src="images/img_call_23X24.svg"
                      className="max-w-[100%] mb-[3px] sm:mt-[4px] md:mt-[6px] mt-[9px] w-[8%]"
                      alt="call One"
                    />
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] w-[100%]">
                    <Text
                      className="flex-grow not-italic text-gray_700"
                      variant="body25"
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
                    variant="body26"
                  >
                    Cidade que atende: Nome da cidade{" "}
                  </Text>
                </Column>
              </Column>
              <Input
                className="absolute font-bold p-[0] text-[14.25px] placeholder:text-white_A700 text-white_A700 top-[0] w-[100%]"
                wrapClassName="absolute w-[100%]"
                name="GroupSeventyEight"
                placeholder="Nome da assistência"
              ></Input>
            </Stack>
            <Stack className="h-[166px] relative w-[100%]">
              <Column className="absolute bg-white_A700 flex flex-col items-center justify-end p-[13px] sm:p-[6px] md:p-[8px] rounded-radius698 shadow-bs8 top-[1%] w-[100%]">
                <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[7px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-gray_700 w-[auto]"
                        variant="body25"
                      >
                        Localização: Rua bla bla bla - n°000
                      </Text>
                      <Text
                        className="mt-[3px] not-italic text-green_908 w-[auto]"
                        variant="body25"
                      >
                        Email: assistencia@loja.com.br
                      </Text>
                    </Column>
                    <Img
                      src="images/img_call_23X24.svg"
                      className="max-w-[100%] mb-[3px] sm:mt-[4px] md:mt-[6px] mt-[9px] w-[8%]"
                      alt="call Two"
                    />
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] w-[100%]">
                    <Text
                      className="flex-grow not-italic text-gray_700"
                      variant="body25"
                    >
                      (41) 90000-0000
                    </Text>
                    <Img
                      src="images/img_location_23X24.svg"
                      className="flex-shrink-0 max-w-[100%] mt-[2px] w-[8%]"
                      alt="location Two"
                    />
                  </Row>
                  <Text
                    className="font-normal mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                    variant="body26"
                  >
                    Cidade que atende: Nome da cidade{" "}
                  </Text>
                </Column>
              </Column>
              <Input
                className="absolute font-bold p-[0] text-[14.25px] placeholder:text-white_A700 text-white_A700 top-[0] w-[100%]"
                wrapClassName="absolute w-[100%]"
                name="GroupEighty"
                placeholder="Nome da assistência"
              ></Input>
            </Stack>
            <Stack className="h-[166px] relative w-[100%]">
              <Column className="absolute bg-white_A700 flex flex-col items-center justify-end p-[13px] sm:p-[6px] md:p-[8px] rounded-radius698 shadow-bs8 top-[1%] w-[100%]">
                <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[7px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-gray_700 w-[auto]"
                        variant="body25"
                      >
                        Localização: Rua bla bla bla - n°000
                      </Text>
                      <Text
                        className="mt-[3px] not-italic text-green_908 w-[auto]"
                        variant="body25"
                      >
                        Email: assistencia@loja.com.br
                      </Text>
                    </Column>
                    <Img
                      src="images/img_call_23X24.svg"
                      className="max-w-[100%] mb-[3px] sm:mt-[4px] md:mt-[6px] mt-[9px] w-[8%]"
                      alt="call Three"
                    />
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] w-[100%]">
                    <Text
                      className="flex-grow not-italic text-gray_700"
                      variant="body25"
                    >
                      (41) 90000-0000
                    </Text>
                    <Img
                      src="images/img_location_23X24.svg"
                      className="flex-shrink-0 max-w-[100%] mt-[2px] w-[8%]"
                      alt="location Three"
                    />
                  </Row>
                  <Text
                    className="font-normal mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                    variant="body26"
                  >
                    Cidade que atende: Nome da cidade{" "}
                  </Text>
                </Column>
              </Column>
              <Input
                className="absolute font-bold p-[0] text-[14.25px] placeholder:text-white_A700 text-white_A700 top-[0] w-[100%]"
                wrapClassName="absolute w-[100%]"
                name="GroupEightyTwo"
                placeholder="Nome da assistência"
              ></Input>
            </Stack>
            <Stack className="h-[166px] relative w-[100%]">
              <Column className="absolute bg-white_A700 flex flex-col items-center justify-end p-[13px] sm:p-[6px] md:p-[8px] rounded-radius698 shadow-bs8 top-[1%] w-[100%]">
                <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[7px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-gray_700 w-[auto]"
                        variant="body25"
                      >
                        Localização: Rua bla bla bla - n°000
                      </Text>
                      <Text
                        className="mt-[3px] not-italic text-green_908 w-[auto]"
                        variant="body25"
                      >
                        Email: assistencia@loja.com.br
                      </Text>
                    </Column>
                    <Img
                      src="images/img_call_23X24.svg"
                      className="max-w-[100%] mb-[3px] sm:mt-[4px] md:mt-[6px] mt-[9px] w-[8%]"
                      alt="call Four"
                    />
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] w-[100%]">
                    <Text
                      className="flex-grow not-italic text-gray_700"
                      variant="body25"
                    >
                      (41) 90000-0000
                    </Text>
                    <Img
                      src="images/img_location_23X24.svg"
                      className="flex-shrink-0 max-w-[100%] mt-[2px] w-[8%]"
                      alt="location Four"
                    />
                  </Row>
                  <Text
                    className="font-normal mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                    variant="body26"
                  >
                    Cidade que atende: Nome da cidade{" "}
                  </Text>
                </Column>
              </Column>
              <Input
                className="absolute font-bold p-[0] text-[14.25px] placeholder:text-white_A700 text-white_A700 top-[0] w-[100%]"
                wrapClassName="absolute w-[100%]"
                name="GroupEightyFour"
                placeholder="Nome da assistência"
              ></Input>
            </Stack>
            <Stack className="h-[166px] relative w-[100%]">
              <Column className="absolute bg-white_A700 flex flex-col items-center justify-end p-[13px] sm:p-[6px] md:p-[8px] rounded-radius698 shadow-bs8 top-[1%] w-[100%]">
                <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[7px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-gray_700 w-[auto]"
                        variant="body25"
                      >
                        Localização: Rua bla bla bla - n°000
                      </Text>
                      <Text
                        className="mt-[3px] not-italic text-green_908 w-[auto]"
                        variant="body25"
                      >
                        Email: assistencia@loja.com.br
                      </Text>
                    </Column>
                    <Img
                      src="images/img_call_23X24.svg"
                      className="max-w-[100%] mb-[3px] sm:mt-[4px] md:mt-[6px] mt-[9px] w-[8%]"
                      alt="call Five"
                    />
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] w-[100%]">
                    <Text
                      className="flex-grow not-italic text-gray_700"
                      variant="body25"
                    >
                      (41) 90000-0000
                    </Text>
                    <Img
                      src="images/img_location_23X24.svg"
                      className="flex-shrink-0 max-w-[100%] mt-[2px] w-[8%]"
                      alt="location Five"
                    />
                  </Row>
                  <Text
                    className="font-normal mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                    variant="body26"
                  >
                    Cidade que atende: Nome da cidade{" "}
                  </Text>
                </Column>
              </Column>
              <Input
                className="absolute font-bold p-[0] text-[14.25px] placeholder:text-white_A700 text-white_A700 top-[0] w-[100%]"
                wrapClassName="absolute w-[100%]"
                name="GroupEightySix"
                placeholder="Nome da assistência"
              ></Input>
            </Stack>
            <Stack className="h-[166px] relative w-[100%]">
              <Column className="absolute bg-white_A700 flex flex-col items-center justify-end p-[13px] sm:p-[6px] md:p-[8px] rounded-radius698 shadow-bs8 top-[1%] w-[100%]">
                <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[7px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-gray_700 w-[auto]"
                        variant="body25"
                      >
                        Localização: Rua bla bla bla - n°000
                      </Text>
                      <Text
                        className="mt-[3px] not-italic text-green_908 w-[auto]"
                        variant="body25"
                      >
                        Email: assistencia@loja.com.br
                      </Text>
                    </Column>
                    <Img
                      src="images/img_call_23X24.svg"
                      className="max-w-[100%] mb-[3px] sm:mt-[4px] md:mt-[6px] mt-[9px] w-[8%]"
                      alt="call Six"
                    />
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] w-[100%]">
                    <Text
                      className="flex-grow not-italic text-gray_700"
                      variant="body25"
                    >
                      (41) 90000-0000
                    </Text>
                    <Img
                      src="images/img_location_23X24.svg"
                      className="flex-shrink-0 max-w-[100%] mt-[2px] w-[8%]"
                      alt="location Six"
                    />
                  </Row>
                  <Text
                    className="font-normal mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                    variant="body26"
                  >
                    Cidade que atende: Nome da cidade{" "}
                  </Text>
                </Column>
              </Column>
              <Input
                className="absolute font-bold p-[0] text-[14.25px] placeholder:text-white_A700 text-white_A700 top-[0] w-[100%]"
                wrapClassName="absolute w-[100%]"
                name="GroupEightyEight"
                placeholder="Nome da assistência"
              ></Input>
            </Stack>
            <Stack className="h-[166px] relative w-[100%]">
              <Column className="absolute bg-white_A700 flex flex-col items-center justify-end p-[13px] sm:p-[6px] md:p-[8px] rounded-radius698 shadow-bs8 top-[1%] w-[100%]">
                <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[7px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-gray_700 w-[auto]"
                        variant="body25"
                      >
                        Localização: Rua bla bla bla - n°000
                      </Text>
                      <Text
                        className="mt-[3px] not-italic text-green_908 w-[auto]"
                        variant="body25"
                      >
                        Email: assistencia@loja.com.br
                      </Text>
                    </Column>
                    <Img
                      src="images/img_call_23X24.svg"
                      className="max-w-[100%] mb-[3px] sm:mt-[4px] md:mt-[6px] mt-[9px] w-[8%]"
                      alt="call Seven"
                    />
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] w-[100%]">
                    <Text
                      className="flex-grow not-italic text-gray_700"
                      variant="body25"
                    >
                      (41) 90000-0000
                    </Text>
                    <Img
                      src="images/img_location_23X24.svg"
                      className="flex-shrink-0 max-w-[100%] mt-[2px] w-[8%]"
                      alt="location Seven"
                    />
                  </Row>
                  <Text
                    className="font-normal mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                    variant="body26"
                  >
                    Cidade que atende: Nome da cidade{" "}
                  </Text>
                </Column>
              </Column>
              <Input
                className="absolute font-bold p-[0] text-[14.25px] placeholder:text-white_A700 text-white_A700 top-[0] w-[100%]"
                wrapClassName="absolute w-[100%]"
                name="GroupNinety"
                placeholder="Nome da assistência"
              ></Input>
            </Stack>
            <Stack className="h-[166px] relative w-[100%]">
              <Column className="absolute bg-white_A700 flex flex-col items-center justify-end p-[13px] sm:p-[6px] md:p-[8px] rounded-radius698 shadow-bs8 top-[1%] w-[100%]">
                <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[7px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-gray_700 w-[auto]"
                        variant="body25"
                      >
                        Localização: Rua bla bla bla - n°000
                      </Text>
                      <Text
                        className="mt-[3px] not-italic text-green_908 w-[auto]"
                        variant="body25"
                      >
                        Email: assistencia@loja.com.br
                      </Text>
                    </Column>
                    <Img
                      src="images/img_call_23X24.svg"
                      className="max-w-[100%] mb-[3px] sm:mt-[4px] md:mt-[6px] mt-[9px] w-[8%]"
                      alt="call Eight"
                    />
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] w-[100%]">
                    <Text
                      className="flex-grow not-italic text-gray_700"
                      variant="body25"
                    >
                      (41) 90000-0000
                    </Text>
                    <Img
                      src="images/img_location_23X24.svg"
                      className="flex-shrink-0 max-w-[100%] mt-[2px] w-[8%]"
                      alt="location Eight"
                    />
                  </Row>
                  <Text
                    className="font-normal mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                    variant="body26"
                  >
                    Cidade que atende: Nome da cidade{" "}
                  </Text>
                </Column>
              </Column>
              <Input
                className="absolute font-bold p-[0] text-[14.25px] placeholder:text-white_A700 text-white_A700 top-[0] w-[100%]"
                wrapClassName="absolute w-[100%]"
                name="GroupNinetyTwo"
                placeholder="Nome da assistência"
              ></Input>
            </Stack>
          </Grid>
          <Footer1 className="bg-gray_900 font-inter sm:mt-[153px] md:mt-[198px] mt-[289px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default AssistnciaPage;
