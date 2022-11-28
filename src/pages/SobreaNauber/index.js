import React from "react";

import { Column, Stack, Row, Img, Text } from "components";
import Header2 from "components/Header/Header2";
import Footer1 from "components/Footer/Footer1";

const SobreaNauberPage = () => {
  return (
    <>
      <Column className="bg-bluegray_50 flex flex-col font-bebasneue items-center justify-start mx-[auto] w-[100%]">
        <Stack className="h-[1496px] relative w-[100%]">
          <Column
            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start p-[135px] sm:p-[15px] md:p-[92px] top-[5%] w-[100%]"
            style={{ backgroundImage: "url('images/img_group143.png')" }}
          >
            <Column className="flex flex-col items-center justify-start md:mb-[116px] mb-[169px] sm:mb-[90px] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-bebasneue items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                      <Img
                        src="images/img_flagbrasil1.png"
                        className="flex-shrink-0 max-w-[100%] w-[13%]"
                        alt="FlagBrasilTwo"
                      />
                      <Text
                        className="bg-clip-text bg-gradient8  flex-grow sm:ml-[4px] md:ml-[6px] ml-[9px] text-transparent"
                        as="h4"
                        variant="h4"
                      >
                        nauber máquinas
                      </Text>
                    </Row>
                    <Text
                      className="bg-clip-text bg-gradient9  font-inter leading-[normal] sm:mt-[20px] md:mt-[26px] mt-[38px] text-transparent w-[100%]"
                      variant="body17"
                    >
                      A Nauber Máquinas é uma empresa Brasileira, sediada na
                      cidade de Schroeder, Santa Catarina, a 8 km da cidade de
                      Jaraguá do Sul, e 25 km da Cidade de Joinville. Nosso
                      objetivo é desenvolver e buscar novas tecnologias que
                      proporcionem melhorias significativas de qualidade e
                      desempenho de processos da construção civil. Com a
                      globalização, e a disputa constante em um mercado cada vez
                      mais acirrado, não há melhor forma de se tornar mais
                      competitivo do que aprimorar processos para reduzir
                      custos. Nossa linha de equipamentos Airless, Lixadeiras,
                      Aspiradores e Acessórios, são desenvolvidas para
                      profissionais que buscam otimização de mão de obra , e
                      desempenhar produtividade sem abrir mão da qualidade. Os
                      equipamentos e acessórios Nauber são produzidos sob total
                      supervisão de qualidade, sendo que 100% dos equipamentos
                      são testados antes do envio para nossos clientes,
                      garantindo, dessa forma, a qualidade final, e a satisfação
                      de compra através de equipamentos de ponta.{" "}
                    </Text>
                  </Column>
                </Column>
                <Stack className="bg-green_929 h-[312px] sm:mb-[46px] md:mb-[60px] mb-[88px] mt-[127px] sm:mt-[67px] md:mt-[87px] p-[115px] sm:p-[15px] md:p-[79px] relative rounded-radius2327 sm:w-[100%] w-[49%]">
                  <Img
                    src="images/img_vector_white_A700.svg"
                    className="absolute h-[80px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[42px] md:w-[55px] w-[80px]"
                    alt="Vector"
                  />
                </Stack>
              </Row>
            </Column>
          </Column>
          <Header2 className="absolute w-[100%]" />
          <Column
            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-center p-[135px] sm:p-[15px] md:p-[92px] w-[100%]"
            style={{ backgroundImage: "url('images/img_nauberpro.png')" }}
          >
            <Column className="flex flex-col items-center justify-start my-[3px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                <Img
                  src="images/img_logorevendapr.png"
                  className="max-w-[100%] w-[18%]"
                  alt="LOGOREVENDAPR One"
                />
                <Column className="flex flex-col md:ml-[17px] ml-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                  <Text
                    className="leading-[normal] md:ml-[29px] ml-[43px] sm:mx-[0] text-center text-white_A700 sm:w-[100%] w-[54%]"
                    variant="body8"
                  >
                    CONHEÇA O<br />
                    SISTEMA DE
                    <br />
                    REVENDA
                  </Text>
                  <Text
                    className="md:mt-[10px] mt-[15px] sm:mt-[7px] text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    NAUBER PRO
                  </Text>
                </Column>
                <Column className="bg-green_929 flex flex-col items-center md:ml-[50px] ml-[73px] sm:mx-[0] sm:py-[15px] md:py-[35px] py-[52px] rounded-radius20 sm:w-[100%] w-[55%]">
                  <Stack className="bg-white_A700 h-[209px] mb-[2px] md:p-[15px] sm:p-[15px] p-[22px] relative w-[100%]">
                    <Img
                      src="images/img_logorevendapr.png"
                      className="absolute h-[163px] inset-[0] justify-center m-[auto] max-w-[100%] w-[25%]"
                      alt="LOGOREVENDAPR Two"
                    />
                  </Stack>
                </Column>
              </Row>
            </Column>
          </Column>
        </Stack>
        <Footer1 className="bg-gray_900 font-inter w-[100%]" />
      </Column>
    </>
  );
};

export default SobreaNauberPage;
