import React from "react";

import { Column, Stack, List, Img, Text, Row } from "components";
import Header1 from "components/Header/Header1";
import Footer1 from "components/Footer/Footer1";

const CategoriasdeProdutosPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-bebasneue items-center justify-start mx-[auto] w-[100%]">
        <Stack className="h-[1530px] relative w-[100%]">
          <Column className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[86%]">
            <List
              className="md:gap-[10px] gap-[15px] sm:gap-[7px] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Stack className="h-[279px] my-[0] relative w-[100%]">
                <Stack className="absolute h-[279px] w-[100%]">
                  <Stack className="absolute h-[279px] w-[100%]">
                    <Stack className="absolute h-[279px] right-[0] sm:w-[100%] w-[69%]">
                      <Img
                        src="images/img_vector107.png"
                        className="absolute h-[279px] max-w-[100%] right-[0] sm:w-[100%] w-[54%]"
                        alt="Vector107"
                      />
                      <Img
                        src="images/img_vector107.png"
                        className="absolute h-[279px] left-[0] max-w-[100%] sm:w-[100%] w-[54%]"
                        alt="Vector109"
                      />
                    </Stack>
                    <Img
                      src="images/img_vector107.png"
                      className="absolute h-[279px] left-[0] max-w-[100%] w-[37%]"
                      alt="Vector110"
                    />
                  </Stack>
                  <Column
                    className="absolute bg-cover bg-no-repeat bottom-[10%] flex flex-col items-center justify-start left-[32%] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[3px] md:px-[4px] px-[7px] sm:w-[100%] w-[32%]"
                    style={{
                      backgroundImage:
                        "url('images/img_projetorasdet_gray_904.svg')",
                    }}
                  >
                    <Text
                      className="not-italic text-amber_600_87 w-[auto]"
                      variant="body6"
                    >
                      projetoras de textura
                    </Text>
                  </Column>
                </Stack>
                <Row className="absolute bottom-[10%] flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between left-[1%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[3px] md:px-[4px] px-[7px] sm:w-[100%] w-[34%]"
                    style={{
                      backgroundImage:
                        "url('images/img_projetorasdet_gray_904.svg')",
                    }}
                  >
                    <Text
                      className="not-italic text-amber_600_87 w-[auto]"
                      variant="body6"
                    >
                      equipamentos airless
                    </Text>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] p-[1px] sm:w-[100%] w-[34%]"
                    style={{
                      backgroundImage:
                        "url('images/img_projetorasdet_gray_904.svg')",
                    }}
                  >
                    <Text
                      className="mt-[3px] not-italic text-amber_600_87 w-[auto]"
                      variant="body6"
                    >
                      demarcação viária
                    </Text>
                  </Column>
                </Row>
              </Stack>
              <Stack className="h-[279px] my-[0] relative rotate-[180deg] w-[100%]">
                <Stack className="absolute h-[279px] w-[100%]">
                  <Stack className="absolute h-[279px] w-[100%]">
                    <Stack className="absolute h-[279px] right-[0] sm:w-[100%] w-[69%]">
                      <Img
                        src="images/img_vector105.png"
                        className="absolute h-[279px] max-w-[100%] right-[0] sm:w-[100%] w-[54%]"
                        alt="Vector105"
                      />
                      <Img
                        src="images/img_vector105.png"
                        className="absolute h-[279px] left-[0] max-w-[100%] sm:w-[100%] w-[54%]"
                        alt="Vector112"
                      />
                    </Stack>
                    <Img
                      src="images/img_vector105.png"
                      className="absolute h-[279px] left-[0] max-w-[100%] w-[37%]"
                      alt="Vector106"
                    />
                  </Stack>
                  <Column
                    className="absolute bg-cover bg-no-repeat bottom-[10%] flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[3px] md:px-[4px] px-[7px] rotate-[180deg] sm:w-[100%] w-[32%]"
                    style={{
                      backgroundImage:
                        "url('images/img_aspiradores_gray_907.svg')",
                    }}
                  >
                    <Text
                      className="not-italic text-amber_600 w-[auto]"
                      variant="body6"
                    >
                      ASPIRADORES
                    </Text>
                  </Column>
                </Stack>
                <Row className="absolute bottom-[10%] flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] right-[1%] sm:w-[100%] w-[95%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[3px] md:px-[4px] px-[7px] rotate-[180deg] sm:w-[100%] w-[34%]"
                    style={{
                      backgroundImage:
                        "url('images/img_aspiradores_gray_907.svg')",
                    }}
                  >
                    <Text
                      className="not-italic text-amber_600_87 w-[auto]"
                      variant="body6"
                    >
                      lixadeiras
                    </Text>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[3px] md:px-[4px] px-[7px] rotate-[180deg] sm:w-[100%] w-[34%]"
                    style={{
                      backgroundImage:
                        "url('images/img_aspiradores_gray_907.svg')",
                    }}
                  >
                    <Text
                      className="not-italic text-amber_600_87 w-[auto]"
                      variant="body6"
                    >
                      misturadores
                    </Text>
                  </Column>
                </Row>
              </Stack>
            </List>
            <Column className="flex flex-col justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
              <Stack className="h-[279px] relative w-[100%]">
                <Stack className="absolute h-[279px] w-[100%]">
                  <Img
                    src="images/img_vector94.png"
                    className="absolute h-[279px] inset-x-[32%] max-w-[100%] w-[37%]"
                    alt="VectorNinetyFour"
                  />
                  <Column
                    className="absolute bg-cover bg-no-repeat flex flex-col justify-end sm:mx-[0] sm:p-[3px] md:p-[4px] p-[7px] sm:w-[100%] w-[37%]"
                    style={{
                      backgroundImage: "url('images/img_vector94.png')",
                    }}
                  >
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mb-[10px] md:mb-[13px] mb-[19px] sm:mt-[107px] md:mt-[138px] mt-[201px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[3px] md:px-[4px] px-[7px] sm:w-[100%] w-[88%]"
                      style={{
                        backgroundImage:
                          "url('images/img_projetorasdet_gray_904.svg')",
                      }}
                    >
                      <Text
                        className="not-italic text-amber_600_87 w-[auto]"
                        variant="body6"
                      >
                        fresadora
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="absolute bg-cover bg-no-repeat flex flex-col justify-end sm:mx-[0] sm:p-[3px] md:p-[4px] p-[7px] sm:w-[100%] w-[37%]"
                    style={{
                      backgroundImage: "url('images/img_vector94.png')",
                    }}
                  >
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mb-[10px] md:mb-[13px] mb-[19px] sm:mt-[107px] md:mt-[138px] mt-[201px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[3px] md:px-[4px] px-[7px] sm:w-[100%] w-[88%]"
                      style={{
                        backgroundImage:
                          "url('images/img_projetorasdet_gray_904.svg')",
                      }}
                    >
                      <Text
                        className="not-italic text-amber_600_87 w-[auto]"
                        variant="body6"
                      >
                        desempenadeiras
                      </Text>
                    </Column>
                  </Column>
                </Stack>
                <Column
                  className="absolute bg-cover bg-no-repeat bottom-[10%] flex flex-col items-center justify-start left-[32%] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[3px] md:px-[4px] px-[7px] sm:w-[100%] w-[32%]"
                  style={{
                    backgroundImage:
                      "url('images/img_projetorasdet_gray_904.svg')",
                  }}
                >
                  <Text
                    className="not-italic text-amber_600_7f w-[auto]"
                    variant="body6"
                  >
                    compressor
                  </Text>
                </Column>
              </Stack>
              <Stack className="h-[279px] md:mt-[10px] mt-[15px] sm:mt-[7px] relative rotate-[180deg] w-[100%]">
                <Column
                  className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[32%] items-end justify-end sm:mx-[0] sm:p-[4px] md:p-[5px] p-[8px] sm:w-[100%] w-[37%]"
                  style={{ backgroundImage: "url('images/img_group65.png')" }}
                >
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mb-[10px] md:mb-[13px] mb-[20px] sm:mt-[105px] md:mt-[136px] mt-[198px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[3px] md:px-[4px] px-[7px] rotate-[180deg] sm:w-[100%] w-[89%]"
                    style={{
                      backgroundImage:
                        "url('images/img_aspiradores_gray_907.svg')",
                    }}
                  >
                    <Text
                      className="not-italic text-amber_600_7f w-[auto]"
                      variant="body6"
                    >
                      bicos airless
                    </Text>
                  </Column>
                </Column>
                <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between rotate-[180deg] w-[100%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] sm:p-[4px] md:p-[5px] p-[8px] sm:w-[100%] w-[37%]"
                    style={{ backgroundImage: "url('images/img_group66.png')" }}
                  >
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:mb-[10px] md:mb-[13px] mb-[20px] sm:mt-[105px] md:mt-[136px] mt-[198px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[3px] md:px-[4px] px-[7px] sm:w-[100%] w-[89%]"
                      style={{
                        backgroundImage:
                          "url('images/img_aspiradores_gray_907.svg')",
                      }}
                    >
                      <Text
                        className="sm:mr-[42px] md:mr-[55px] mr-[80px] not-italic text-amber_600_7f w-[auto]"
                        variant="body6"
                      >
                        pistolas airless
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:w-[100%] w-[37%]"
                    style={{ backgroundImage: "url('images/img_group66.png')" }}
                  >
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-end justify-end sm:p-[4px] md:p-[5px] p-[8px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group66.png')",
                      }}
                    >
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mb-[10px] md:mb-[13px] mb-[20px] sm:mt-[105px] md:mt-[136px] mt-[198px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[3px] md:px-[4px] px-[7px] rotate-[180deg] sm:w-[100%] w-[89%]"
                        style={{
                          backgroundImage:
                            "url('images/img_aspiradores_gray_907.svg')",
                        }}
                      >
                        <Text
                          className="not-italic text-amber_600_7f w-[auto]"
                          variant="body6"
                        >
                          filmes de mascaramento
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                </Row>
              </Stack>
              <Column
                className="bg-cover bg-no-repeat flex flex-col justify-end md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:p-[3px] md:p-[4px] p-[7px] sm:w-[100%] w-[37%]"
                style={{
                  backgroundImage: "url('images/img_vector94_279X455.png')",
                }}
              >
                <Column
                  className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:mb-[10px] md:mb-[13px] mb-[19px] sm:mt-[107px] md:mt-[138px] mt-[201px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[3px] md:px-[4px] px-[7px] sm:w-[100%] w-[88%]"
                  style={{
                    backgroundImage:
                      "url('images/img_projetorasdet_gray_904.svg')",
                  }}
                >
                  <Text
                    className="sm:mr-[22px] md:mr-[29px] mr-[43px] not-italic text-amber_600_87 w-[auto]"
                    variant="body6"
                  >
                    lixadeiras e abrasivos
                  </Text>
                </Column>
              </Column>
            </Column>
          </Column>
          <Stack className="absolute h-[133px] top-[0] w-[100%]">
            <Column className="absolute bg-gradient2  bottom-[0] flex flex-col inset-x-[0] items-center justify-end sm:mx-[0] mx-[auto] md:p-[12px] p-[18px] sm:px-[15px] sm:py-[9px] rounded-radius10 sm:w-[100%] w-[93%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:pl-[0] md:pr-[13px] sm:pr-[15px] pr-[19px] sm:w-[100%] w-[81%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[6%]">
                  <Img
                    src="images/img_home.svg"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="HOME"
                  />
                  <Text
                    className="flex-grow sm:ml-[3px] md:ml-[4px] ml-[7px] mt-[3px] text-white_A700"
                    variant="body18"
                  >
                    HOME
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[48px] ml-[70px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                  <Img
                    src="images/img_map.svg"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="map"
                  />
                  <Text
                    className="flex-grow sm:ml-[3px] md:ml-[4px] ml-[7px] mt-[3px] text-white_A700"
                    variant="body18"
                  >
                    EMPRESA
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[48px] ml-[70px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                  <Img
                    src="images/img_mail.svg"
                    className="flex-shrink-0 max-w-[100%] w-[25%]"
                    alt="mail"
                  />
                  <Text
                    className="flex-grow sm:ml-[3px] md:ml-[4px] ml-[7px] text-yellow_A400"
                    variant="body18"
                  >
                    PRODUTOS
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[48px] ml-[70px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                  <Img
                    src="images/img_camera.svg"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mt-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="camera"
                  />
                  <Text
                    className="flex-grow sm:ml-[4px] md:ml-[6px] ml-[9px] text-white_A700"
                    variant="body18"
                  >
                    ASSISTÊNCIAS
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[48px] ml-[70px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                  <Img
                    src="images/img_volume.svg"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mt-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="volume"
                  />
                  <Text
                    className="flex-grow sm:ml-[3px] md:ml-[4px] ml-[6px] text-white_A700"
                    variant="body18"
                  >
                    CATÁLOGOS VIRTUAIS
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[48px] ml-[71px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                  <Img
                    src="images/img_user.svg"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="user"
                  />
                  <Text
                    className="flex-grow sm:ml-[3px] md:ml-[4px] ml-[7px] mt-[3px] text-white_A700"
                    variant="body18"
                  >
                    CONTATO
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center mb-[1px] md:ml-[48px] ml-[71px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[6%]">
                  <Img
                    src="images/img_user_24X24.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="user One"
                  />
                  <Text
                    className="flex-grow sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-white_A700"
                    variant="body18"
                  >
                    login
                  </Text>
                </Row>
              </Row>
            </Column>
            <Header1 className="absolute font-inter top-[0] w-[100%]" />
          </Stack>
        </Stack>
        <Footer1 className="bg-gray_900 font-inter md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]" />
      </Column>
    </>
  );
};

export default CategoriasdeProdutosPage;
