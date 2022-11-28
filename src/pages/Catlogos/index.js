import React from "react";

import { Column, Stack, Img, Text, List, Button, Row } from "components";
import Header2 from "components/Header/Header2";
import Footer1 from "components/Footer/Footer1";

const CatlogosPage = () => {
  return (
    <>
      <Column className="bg-bluegray_50 flex flex-col font-bebasneue items-center justify-start mx-[auto] w-[100%]">
        <Header2 className="w-[100%]" />
        <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
          <Stack className="h-[63px] relative w-[100%]">
            <Img
              src="images/img_vector117_12X1440.png"
              className="absolute h-[12px] max-w-[100%] top-[35%] w-[100%]"
              alt="Vector117"
            />
            <Column
              className="absolute bg-cover bg-no-repeat flex flex-col items-end justify-start sm:mx-[0] p-[3px] sm:w-[100%] w-[38%]"
              style={{ backgroundImage: "url('images/img_group34.png')" }}
            >
              <Text
                className="mb-[1px] mr-[102px] sm:mr-[54px] md:mr-[70px] text-white_A700 w-[auto]"
                variant="body4"
              >
                catálogos virtuais
              </Text>
            </Column>
          </Stack>
          <Column className="flex flex-col items-center justify-start max-w-[970px] sm:mt-[48px] md:mt-[62px] mt-[91px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Column className="flex flex-col justify-start w-[100%]">
              <List
                className="sm:gap-[42px] md:gap-[55px] gap-[80px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]"
                orientation="horizontal"
              >
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Button
                    className="cursor-pointer font-bold min-w-[90%] sm:text-[34.4px] md:text-[36.4px] text-[38.4px] text-center w-[max-content]"
                    variant="FillGreen600"
                  >
                    linha varejo
                  </Button>
                  <div className="bg-bluegray_100 sm:h-[140px] md:h-[181px] h-[262px] sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]"></div>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Button
                    className="cursor-pointer font-bold min-w-[90%] sm:text-[34.4px] md:text-[36.4px] text-[38.4px] text-center w-[max-content]"
                    size="sm"
                    variant="FillTeal900"
                  >
                    linha técnica
                  </Button>
                  <div className="bg-bluegray_100 sm:h-[140px] md:h-[181px] h-[262px] sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]"></div>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Button
                    className="cursor-pointer font-bold min-w-[90%] sm:text-[34.4px] md:text-[36.4px] text-[38.4px] text-center w-[max-content]"
                    variant="FillGray901"
                  >
                    linha industrial
                  </Button>
                  <div className="bg-bluegray_100 sm:h-[140px] md:h-[181px] h-[262px] sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]"></div>
                </Column>
              </List>
              <Column className="flex flex-col items-center justify-start mt-[103px] sm:mt-[54px] md:mt-[70px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                <Button
                  className="cursor-pointer font-bold min-w-[90%] sm:text-[34.4px] md:text-[36.4px] text-[38.4px] text-center w-[max-content]"
                  variant="FillGray902"
                >
                  linha completa
                </Button>
                <div className="bg-bluegray_100 sm:h-[140px] md:h-[181px] h-[262px] sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]"></div>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                  <Img
                    src="images/img_flagbrasil1.png"
                    className="max-w-[100%] w-[28%]"
                    alt="FlagBrasilTwo"
                  />
                  <Img
                    src="images/img_flagespanha1.png"
                    className="max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[28%]"
                    alt="FlagEspanhaTwo"
                  />
                  <Img
                    src="images/img_flageua1.png"
                    className="max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[28%]"
                    alt="FlagEUATwo"
                  />
                </Row>
              </Column>
            </Column>
          </Column>
          <Footer1 className="bg-gray_900 font-inter md:mt-[116px] mt-[170px] sm:mt-[90px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default CatlogosPage;
