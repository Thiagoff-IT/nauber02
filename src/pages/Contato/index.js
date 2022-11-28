import React from "react";

import { Column, Row, Stack, Text, Img, Input, Button } from "components";
import Header2 from "components/Header/Header2";
import Footer1 from "components/Footer/Footer1";

const ContatoPage = () => {
  return (
    <>
      <Column className="bg-bluegray_50 flex flex-col font-bebasneue items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Header2 className="w-[100%]" />
          <Column className="flex flex-col items-center justify-start sm:mt-[35px] md:mt-[46px] mt-[67px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1173px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
              <Stack className="h-[633px] sm:mt-[2px] md:mt-[3px] mt-[5px] relative w-[37%]">
                <Column className="absolute bottom-[10%] flex flex-col items-center justify-start left-[1%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                      <Column className="bg-teal_901 flex flex-col items-center justify-end sm:p-[2px] md:p-[3px] p-[5px] w-[100%]">
                        <Text
                          className="sm:mt-[3px] md:mt-[4px] mt-[6px] text-white_A700 w-[auto]"
                          variant="body5"
                        >
                          telefone de contato
                        </Text>
                      </Column>
                      <Stack className="font-inter h-[69px] sm:mt-[10px] md:mt-[13px] mt-[19px] relative sm:w-[100%] w-[64%]">
                        <Column className="absolute bg-gradient10  flex flex-col justify-start left-[0] sm:mx-[0] md:p-[6px] p-[9px] sm:px-[0] sm:py-[4px] rounded-radius2859 top-[0] sm:w-[100%] w-[93%]">
                          <Text
                            className="ml-[12px] sm:ml-[6px] md:ml-[8px] text-white_A700 w-[auto]"
                            variant="body27"
                          >
                            (47) 3374-5969
                          </Text>
                          <Text
                            className="mb-[1px] ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[10px] sm:mt-[5px] md:mt-[6px] text-white_A700 w-[auto]"
                            variant="body27"
                          >
                            (47) 99621-0018
                          </Text>
                        </Column>
                        <Img
                          src="images/img_logowhast.png"
                          className="absolute bottom-[0] h-[42px] max-w-[100%] right-[0] sm:w-[22px] md:w-[28px] w-[42px]"
                          alt="LogoWhast"
                        />
                      </Stack>
                    </Column>
                    <Column className="flex flex-col justify-start sm:mt-[24px] md:mt-[31px] mt-[46px] w-[100%]">
                      <Column className="bg-teal_901 flex flex-col font-bebasneue items-center justify-start p-[4px] w-[100%]">
                        <Text
                          className="mb-[1px] text-white_A700 w-[auto]"
                          variant="body5"
                        >
                          horário de atendimento
                        </Text>
                      </Column>
                      <Text
                        className="font-inter ml-[2px] mt-[13px] sm:mt-[6px] md:mt-[8px] text-gray_919 w-[auto]"
                        variant="body19"
                      >
                        Segunda a Sexta-Feira
                      </Text>
                      <Text
                        className="font-inter ml-[2px] text-gray_919 w-[auto]"
                        variant="body19"
                      >
                        7h30 às 17h30
                      </Text>
                    </Column>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] w-[100%]">
                    <Column className="bg-teal_901 flex flex-col font-bebasneue justify-end sm:p-[2px] md:p-[3px] p-[5px] w-[100%]">
                      <Text
                        className="ml-[13px] sm:ml-[6px] md:ml-[8px] mt-[1px] text-white_A700 w-[auto]"
                        variant="body5"
                      >
                        localização
                      </Text>
                    </Column>
                    <Text
                      className="font-inter ml-[2px] mt-[13px] sm:mt-[6px] md:mt-[8px] text-gray_919 w-[auto]"
                      variant="body19"
                    >
                      Rua Marechal Castelo Branco, n°2477{" "}
                    </Text>
                    <Text
                      className="font-inter text-gray_919 w-[auto]"
                      variant="body19"
                    >
                      Centro - Schroeder - SC
                    </Text>
                  </Column>
                </Column>
                <Column className="absolute bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[30px] p-[45px] rounded-radius10 shadow-bs6 w-[100%]">
                  <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <Text
                      className="ml-[1px] text-green_930 w-[auto]"
                      variant="body7"
                    >
                      WHATSAPP
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start ml-[1px] mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                      <Img
                        src="images/img_whatsapp.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[12px] h-[17px] max-w-[100%] md:w-[11px] w-[17px] sm:w-[9px]"
                        alt="whatsapp"
                      />
                      <Text
                        className="flex-grow ml-[12px] sm:ml-[6px] md:ml-[8px] not-italic text-gray_700"
                        variant="body20"
                      >
                        (41) 9000-0000
                      </Text>
                    </Row>
                    <Text
                      className="ml-[1px] sm:mt-[13px] md:mt-[17px] mt-[25px] text-green_930 w-[auto]"
                      variant="body7"
                    >
                      TELEFONE
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start ml-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                      <Img
                        src="images/img_call_17X17.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[12px] h-[17px] max-w-[100%] mt-[1px] md:w-[11px] w-[17px] sm:w-[9px]"
                        alt="call"
                      />
                      <Text
                        className="flex-grow ml-[12px] sm:ml-[6px] md:ml-[8px] not-italic text-gray_700"
                        variant="body20"
                      >
                        (41) 9000-0000
                      </Text>
                    </Row>
                    <Text
                      className="ml-[1px] sm:mt-[12px] md:mt-[16px] mt-[24px] text-green_930 w-[auto]"
                      variant="body7"
                    >
                      E-MAIL
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center ml-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                      <Img
                        src="images/img_mail_green_A701.svg"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="Mail One"
                      />
                      <Text
                        className="flex-grow ml-[12px] sm:ml-[6px] md:ml-[8px] not-italic text-gray_700"
                        variant="body20"
                      >
                        contato@nauber.com.br
                      </Text>
                    </Row>
                    <Text
                      className="ml-[1px] sm:mt-[13px] md:mt-[17px] mt-[25px] text-green_930 w-[auto]"
                      variant="body7"
                    >
                      Localização
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start mt-[3px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_location_18X18.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] mt-[3px] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="location"
                      />
                      <Text
                        className="flex-grow leading-[normal] ml-[10px] md:ml-[6px] sm:mx-[0] not-italic text-gray_700"
                        variant="body20"
                      >
                        Rua Mal. Castelo Branco, 2477 Centro Schroeder - SC.
                      </Text>
                    </Row>
                    <Text
                      className="ml-[1px] sm:mt-[12px] md:mt-[15px] mt-[23px] text-green_930 w-[auto]"
                      variant="body7"
                    >
                      horário de atendimento
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                      <Img
                        src="images/img_clock.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mt-[1px] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="clock"
                      />
                      <Text
                        className="flex-grow sm:ml-[4px] md:ml-[6px] ml-[9px] not-italic text-gray_700"
                        variant="body20"
                      >
                        Segunda a Sexta: 7:30 - 17:48
                      </Text>
                    </Row>
                    <Text
                      className="ml-[1px] sm:mt-[12px] md:mt-[16px] mt-[24px] text-green_930 w-[auto]"
                      variant="body7"
                    >
                      REDES SOCIAIS
                    </Text>
                    <Img
                      src="images/img_iconesredes.svg"
                      className="max-w-[100%] ml-[3px] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:w-[100%] w-[60%]"
                      alt="Iconesredes"
                    />
                  </Column>
                </Column>
              </Stack>
              <Column className="flex flex-col items-center justify-start md:ml-[32px] ml-[47px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                <Text className="text-green_930 w-[auto]" variant="body7">
                  ficou com alguma dúvida? entre em contato.
                </Text>
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[14px] md:mt-[18px] mt-[27px] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius10 shadow-bs6 w-[100%]">
                  <Column className="flex flex-col justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <Text
                      className="font-inter text-gray_700 w-[auto]"
                      variant="body21"
                    >
                      Escolha o Setor para o envio do contato
                    </Text>
                    <Row className="border border-gray_401 border-solid flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between mt-[11px] sm:mt-[5px] md:mt-[7px] md:p-[11px] p-[17px] sm:px-[15px] sm:py-[9px] rounded-radius10 w-[100%]">
                      <Text
                        className="flex-grow font-medium mb-[2px] text-gray_700"
                        variant="body30"
                      >
                        Atendimento - atendimento@nauber.com.br
                      </Text>
                      <Img
                        src="images/img_arrowup.svg"
                        className="flex-shrink-0 max-w-[100%] mr-[3px] w-[2%]"
                        alt="arrowup"
                      />
                    </Row>
                    <Input
                      className="font-inter font-light p-[0] text-[12px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                      wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                      name="GroupFortyFive"
                      placeholder="Digite seu nome"
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineGray401"
                    ></Input>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                      <Input
                        className="font-light p-[0] text-[12px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[49%]"
                        name="GroupFortySeven"
                        placeholder="Estado"
                        shape="RoundedBorder10"
                        size="md"
                        variant="OutlineGray401"
                      ></Input>
                      <Input
                        className="font-light p-[0] text-[12px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[49%]"
                        name="GroupFortySix"
                        placeholder="Cidade"
                        shape="RoundedBorder10"
                        size="md"
                        variant="OutlineGray401"
                      ></Input>
                    </Row>
                    <Input
                      className="font-inter font-light p-[0] text-[12px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                      wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                      type="email"
                      name="GroupFortyEight"
                      placeholder="Seu melhor e-mail"
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineGray401"
                    ></Input>
                    <Input
                      className="font-inter font-light p-[0] text-[12px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                      wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                      name="GroupFortyNine"
                      placeholder="Telefone para contato"
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineGray401"
                    ></Input>
                    <Input
                      className="font-inter font-light p-[0] text-[12px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                      wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                      name="GroupFifty"
                      placeholder="Escreva sua mensagem aqui..."
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineGray401"
                    ></Input>
                    <Button
                      className="cursor-pointer font-bebasneue font-bold sm:mt-[21px] md:mt-[27px] mt-[40px] sm:text-[22px] md:text-[24px] text-[26px] text-center w-[100%]"
                      shape="RoundedBorder10"
                      variant="GradientGreen931Green932"
                    >
                      enviar
                    </Button>
                  </Column>
                </Column>
              </Column>
            </Row>
            <Footer1 className="bg-gray_900 font-inter sm:mt-[27px] md:mt-[35px] mt-[51px] w-[100%]" />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ContatoPage;
