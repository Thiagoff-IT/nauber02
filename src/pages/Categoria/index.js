import React from "react";

import { Column, Stack, Img, Text } from "components";
import Header2 from "components/Header/Header2";
import Footer1 from "components/Footer/Footer1";

const CategoriaPage = () => {
  return (
    <>
      <Column className="flex flex-col font-bebasneue items-center justify-start mx-[auto] w-[100%]">
        <Stack className="h-[852px] relative w-[100%]">
          <Stack className="absolute bottom-[0] h-[779px] w-[100%]">
            <Stack className="absolute h-[779px] w-[100%]">
              <Img
                src="images/img_vector87.png"
                className="absolute h-[779px] left-[0] max-w-[100%] sm:w-[100%] w-[56%]"
                alt="VectorEightySeven"
              />
              <Column
                className="absolute bg-cover bg-no-repeat flex flex-col justify-end sm:mx-[0] sm:p-[15px] md:p-[24px] p-[36px] right-[0] sm:w-[100%] w-[56%]"
                style={{ backgroundImage: "url('images/img_group37.png')" }}
              >
                <Column
                  className="bg-cover bg-no-repeat flex flex-col justify-end mb-[127px] sm:mb-[67px] md:mb-[87px] sm:mt-[266px] md:mt-[344px] mt-[501px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] sm:w-[100%] w-[64%]"
                  style={{
                    backgroundImage:
                      "url('images/img_projetorasdet_gray_904.svg')",
                  }}
                >
                  <Text
                    className="sm:ml-[38px] md:ml-[49px] ml-[72px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-amber_A400_75 w-[auto]"
                    variant="body3"
                  >
                    Linha Industrial
                  </Text>
                </Column>
              </Column>
            </Stack>
            <Column
              className="absolute bg-cover bg-no-repeat bottom-[21%] flex flex-col items-center justify-end left-[15%] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] sm:w-[100%] w-[33%]"
              style={{ backgroundImage: "url('images/img_group38.svg')" }}
            >
              <Text
                className="mt-[1px] text-white_A700 w-[auto]"
                variant="body3"
              >
                Construção Civil
              </Text>
            </Column>
          </Stack>
          <Header2 className="absolute top-[0] w-[100%]" />
        </Stack>
        <Footer1 className="bg-gray_900 font-inter w-[100%]" />
      </Column>
    </>
  );
};

export default CategoriaPage;
