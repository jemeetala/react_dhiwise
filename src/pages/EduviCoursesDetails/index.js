import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Image,
  Text,
  Stack,
  List,
  Button,
  Grid,
} from "components";

const EduviCoursesDetailsPage = () => {
  const navigate = useNavigate();

  function handleNavigate41() {
    navigate("/eduvicoursespricing");
  }

  return (
    <>
      <Column className="bg-gray_100 font-metropolis items-start justify-start mx-[auto] lg:pb-[49px] xl:pb-[56px] pb-[63px] 3xl:pb-[75px] lg:pt-[23px] xl:pt-[26px] pt-[30px] 3xl:pt-[36px] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="mx-[auto] w-[89%]">
            <Row className="items-start justify-start w-[100%]">
              <Image
                src={"images/img_icon_2.svg"}
                className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain w-[2%]"
                alt="icon"
              />
              <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] hover:text-deep_purple_A200 text-gray_900 text-left w-[auto]">{`Eduvi`}</Text>
              <Text className="cursor-pointer font-medium hover:font-normal ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] hover:text-deep_purple_A200 text-gray_900 text-left w-[auto]">{`Shop`}</Text>
              <Row className="items-center justify-center lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] w-[47%]">
                <Text className="cursor-pointer font-medium hover:font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] hover:text-deep_purple_A200 text-gray_900 text-right w-[auto]">{`For Kindergarten`}</Text>
                <Text className="cursor-pointer font-medium hover:font-normal lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] hover:text-deep_purple_A200 text-gray_900 text-right w-[auto]">{`For High School`}</Text>
                <Text className="cursor-pointer font-medium hover:font-normal lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] hover:text-deep_purple_A200 text-gray_900 text-right w-[auto]">{`For College`}</Text>
                <Text className="cursor-pointer font-medium hover:font-normal lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-deep_purple_A200 text-right w-[auto]">{`Courses`}</Text>
              </Row>
              <Row className="items-center justify-center xl:ml-[103px] ml-[116px] 3xl:ml-[139px] lg:ml-[90px] w-[8%]">
                <Text className="cursor-pointer font-medium hover:font-normal lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] hover:text-deep_purple_A200 text-gray_900 text-right w-[auto]">{`Cart (0)`}</Text>
                <Image
                  src={"images/img_shoppingbag_1.svg"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                  alt="shoppingbag"
                />
              </Row>
              <Row className="items-center justify-between lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] w-[10%]">
                <Text className="cursor-pointer font-medium hover:font-normal lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] hover:text-deep_purple_A200 text-gray_900 text-right w-[auto]">{`My Account`}</Text>
                <Image
                  src={"images/img_profile24_1.svg"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                  alt="profile24"
                />
              </Row>
            </Row>
          </header>
          <Row className="bg-deep_purple_50 items-start justify-start lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] rounded-radius20 w-[89%]">
            <Column className="items-start justify-start xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[63%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_66 text-left tracking-ls1 w-[auto]">
                <span className="text-gray_900_66 font-metropolis">
                  <>{`Home | `}</>
                </span>
                <span className="text-gray_900_66 font-metropolis">
                  <>{`Courses |`}</>
                </span>
                <span className="text-deep_purple_A200 font-metropolis">
                  <>{` Course Details`}</>
                </span>
              </Text>
              <Column className="lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[100%]">
                <Stack className="lg:h-[389px] xl:h-[445px] h-[500px] 2xl:h-[501px] 3xl:h-[601px] w-[100%]">
                  <Image
                    src={"images/img_pexelsvanessa.png"}
                    className="absolute lg:h-[389px] xl:h-[445px] h-[500px] 2xl:h-[501px] 3xl:h-[601px] inset-[0] object-cover rounded-radius10 w-[100%]"
                    alt="pexelsvanessa"
                  />
                  <Image
                    src={"images/img_callbutton.svg"}
                    className="absolute lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] inset-[0] justify-center m-[auto] object-contain rounded-radius10 lg:w-[46px] xl:w-[53px] w-[60px] 3xl:w-[72px]"
                    alt="CallButton"
                  />
                </Stack>
              </Column>
              <Text className="font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-gray_900 text-left w-[auto]">{`Maths - for Standard 3 Students | Episode 2`}</Text>
            </Column>
            <Column className="items-start justify-start lg:mb-[35px] xl:mb-[40px] mb-[45px] 3xl:mb-[54px] lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] w-[30%]">
              <Text className="font-normal lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-gray_900 text-left w-[auto]">{`Course Playlists`}</Text>
              <Column className="lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="bg-white_A700 hover:cursor-pointer items-center justify-start lg:my-[6px] xl:my-[7px] hover:my-[8px] my-[8px] 3xl:my-[9px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] pr-[104px] 3xl:pr-[124px] lg:pr-[80px] xl:pr-[92px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                    <Image
                      src={"images/img_image.png"}
                      className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius5 w-[21%]"
                      alt="Image"
                    />
                    <Column className="items-start lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[47%]">
                      <Text className="font-normal lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`Maths - Introduction`}</Text>
                      <Text className="font-medium xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-deep_orange_400 text-left w-[auto]">{`1:57`}</Text>
                    </Column>
                  </Row>
                  <Row className="bg-white_A700 hover:cursor-pointer items-center justify-start lg:my-[6px] xl:my-[7px] hover:my-[8px] my-[8px] 3xl:my-[9px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[40px] xl:pr-[46px] pr-[52px] 3xl:pr-[62px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                    <Image
                      src={"images/img_image_1.png"}
                      className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius5 w-[21%]"
                      alt="Image"
                    />
                    <Column className="items-start lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[60%]">
                      <Text className="font-normal lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`Maths - for Standard 3 St..`}</Text>
                      <Text className="font-medium xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-deep_orange_400 text-left w-[auto]">{`5:43`}</Text>
                    </Column>
                  </Row>
                </List>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="bg-white_A700 items-center justify-start lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[40px] xl:pr-[46px] pr-[52px] 3xl:pr-[62px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius10 w-[100%]">
                    <Stack className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] w-[21%]">
                      <Image
                        src={"images/img_image_2.png"}
                        className="absolute lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] inset-[0] object-cover opacity-op5 rounded-radius5 w-[100%]"
                        alt="Image"
                      />
                      <Image
                        src={"images/img_group3238.svg"}
                        className="absolute lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] inset-[0] justify-center m-[auto] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                        alt="Group3238"
                      />
                    </Stack>
                    <Column className="items-start lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[60%]">
                      <Text className="font-normal opacity-op5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`Maths - for Standard 3 St..`}</Text>
                      <Text className="font-medium xl:mt-[2px] lg:mt-[2px] mt-[3px] opacity-op5 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-deep_orange_400 text-left w-[auto]">{`8:11`}</Text>
                    </Column>
                  </Row>
                  <Row className="bg-white_A700 items-center justify-start lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[40px] xl:pr-[46px] pr-[52px] 3xl:pr-[62px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius10 w-[100%]">
                    <Stack className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] w-[21%]">
                      <Image
                        src={"images/img_image_3.png"}
                        className="absolute lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] inset-[0] object-cover opacity-op5 rounded-radius5 w-[100%]"
                        alt="Image"
                      />
                      <Image
                        src={"images/img_group3237.svg"}
                        className="absolute lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] inset-[0] justify-center m-[auto] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                        alt="Group3237"
                      />
                    </Stack>
                    <Column className="items-start lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[60%]">
                      <Text className="font-normal opacity-op5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`Maths - for Standard 3 St..`}</Text>
                      <Text className="font-medium xl:mt-[2px] lg:mt-[2px] mt-[3px] opacity-op5 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-deep_orange_400 text-left w-[auto]">{`6:10`}</Text>
                    </Column>
                  </Row>
                  <Row className="bg-white_A700 items-center justify-start lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[40px] xl:pr-[46px] pr-[52px] 3xl:pr-[62px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius10 w-[100%]">
                    <Stack className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] w-[21%]">
                      <Image
                        src={"images/img_image_4.png"}
                        className="absolute lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] inset-[0] object-cover opacity-op5 rounded-radius5 w-[100%]"
                        alt="Image"
                      />
                      <Image
                        src={"images/img_group3237_1.svg"}
                        className="absolute lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] inset-[0] justify-center m-[auto] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                        alt="Group3237"
                      />
                    </Stack>
                    <Column className="items-start lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[60%]">
                      <Text className="font-normal opacity-op5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`Maths - for Standard 3 St..`}</Text>
                      <Text className="font-medium xl:mt-[2px] lg:mt-[2px] mt-[3px] opacity-op5 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-deep_orange_400 text-left w-[auto]">{`10:00`}</Text>
                    </Column>
                  </Row>
                  <Row className="bg-white_A700 items-center justify-start lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[40px] xl:pr-[46px] pr-[52px] 3xl:pr-[62px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius10 w-[100%]">
                    <Stack className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] w-[21%]">
                      <Image
                        src={"images/img_image_5.png"}
                        className="absolute lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] inset-[0] object-cover opacity-op5 rounded-radius5 w-[100%]"
                        alt="Image"
                      />
                      <Image
                        src={"images/img_group3237_2.svg"}
                        className="absolute lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] inset-[0] justify-center m-[auto] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                        alt="Group3237"
                      />
                    </Stack>
                    <Column className="items-start lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[60%]">
                      <Text className="font-normal opacity-op5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`Maths - for Standard 3 St..`}</Text>
                      <Text className="font-medium xl:mt-[2px] lg:mt-[2px] mt-[3px] opacity-op5 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-deep_orange_400 text-left w-[auto]">{`7:53`}</Text>
                    </Column>
                  </Row>
                </List>
              </Column>
            </Column>
          </Row>
          <Row className="items-start justify-start lg:mt-[55px] xl:mt-[63px] mt-[71px] 3xl:mt-[85px] lg:px-[62px] xl:px-[71px] px-[80px] 3xl:px-[96px] w-[100%]">
            <Column className="items-start justify-start w-[58%]">
              <Text className="font-normal lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Course Details`}</Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[100%]">
                {
                  <>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.`}
                    <br />
                    {``}
                    <br />
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.`}
                  </>
                }
              </Text>
              <Text className="font-normal lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Certification`}</Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.`}</Text>
              <Column className="lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[100%]">
                <Column className="items-start justify-start w-[100%]">
                  <Text className="font-normal lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Who this course is for`}</Text>
                  <Text className="font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.`}</Text>
                </Column>
              </Column>
              <Column className="items-start justify-start lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[55%]">
                <Text className="font-normal lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`What you'll learn in this course:`}</Text>
                <Row className="items-center justify-start lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[96%]">
                  <div className="bg-deep_orange_400 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] rounded-radius50 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit`}</Text>
                </Row>
                <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]">
                  <div className="bg-deep_orange_400 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] rounded-radius50 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit`}</Text>
                </Row>
                <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]">
                  <div className="bg-deep_orange_400 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] rounded-radius50 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit`}</Text>
                </Row>
                <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]">
                  <div className="bg-deep_orange_400 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] rounded-radius50 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit`}</Text>
                </Row>
                <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]">
                  <div className="bg-deep_orange_400 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] rounded-radius50 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit`}</Text>
                </Row>
              </Column>
            </Column>
            <Column className="lg:mb-[222px] xl:mb-[254px] mb-[286px] 3xl:mb-[343px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] w-[28%]">
              <Column className="bg-white_A700 font-metropolis items-center justify-start lg:px-[15px] xl:px-[17px] px-[20px] 3xl:px-[24px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius10 w-[100%]">
                <Row className="items-center justify-between mx-[auto] w-[90%]">
                  <Text className="font-normal xl:my-[1px] lg:my-[1px] my-[2px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_700 text-left w-[auto]">{`Price`}</Text>
                  <Text className="font-normal lg:ml-[174px] xl:ml-[199px] ml-[224px] 3xl:ml-[268px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-right w-[auto]">{`$49.00`}</Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] w-[90%]">
                  <Text className="font-normal lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_700 text-left w-[auto]">{`Instructor`}</Text>
                  <Text className="font-normal xl:ml-[113px] ml-[128px] 3xl:ml-[153px] lg:ml-[99px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 text-right underline w-[auto]">{`Wade Warren`}</Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] w-[90%]">
                  <Text className="font-normal lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_700 text-left w-[auto]">{`Ratings`}</Text>
                  <Image
                    src={"images/img_star.svg"}
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[151px] xl:ml-[173px] ml-[195px] 3xl:ml-[234px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain w-[26%]"
                    alt="star"
                  />
                </Row>
                <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] w-[90%]">
                  <Text className="font-normal lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_700 text-left w-[auto]">{`Durations`}</Text>
                  <Text className="font-normal lg:ml-[146px] xl:ml-[167px] ml-[188px] 3xl:ml-[225px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 text-right w-[auto]">{`10 Days`}</Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] w-[90%]">
                  <Text className="font-normal lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_700 text-left w-[auto]">{`Lessons`}</Text>
                  <Text className="font-normal lg:ml-[198px] xl:ml-[226px] ml-[255px] 3xl:ml-[306px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 text-right w-[auto]">{`30`}</Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] w-[90%]">
                  <Text className="font-normal lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_700 text-left w-[auto]">{`Quizzes`}</Text>
                  <Text className="font-normal lg:ml-[210px] xl:ml-[240px] ml-[270px] 3xl:ml-[324px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 text-right w-[auto]">{`5`}</Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] w-[90%]">
                  <Text className="font-normal lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_700 text-left w-[auto]">{`Certificate`}</Text>
                  <Text className="font-normal lg:ml-[174px] xl:ml-[199px] ml-[224px] 3xl:ml-[268px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 text-right w-[auto]">{`Yes`}</Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] w-[90%]">
                  <Text className="font-normal lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_700 text-left w-[auto]">{`Language`}</Text>
                  <Text className="font-normal lg:ml-[149px] xl:ml-[170px] ml-[192px] 3xl:ml-[230px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 text-right w-[auto]">{`English`}</Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] w-[90%]">
                  <Text className="font-normal lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_700 text-left w-[auto]">{`Access`}</Text>
                  <Text className="font-normal lg:ml-[164px] xl:ml-[188px] ml-[212px] 3xl:ml-[254px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 text-right w-[auto]">{`Lifetime`}</Text>
                </Row>
              </Column>
              <Button
                className="common-pointer bg-deep_purple_A200 font-inter font-medium lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:py-[16px] xl:py-[18px] py-[21px] 3xl:py-[25px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[100%]"
                onClick={handleNavigate41}
              >{`Purchase Course`}</Button>
            </Column>
          </Row>
        </Column>
        <Text className="font-bold lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] lg:text-[35px] xl:text-[40px] text-[45px] 3xl:text-[54px] text-gray_900 text-left w-[auto]">{`Similar Courses`}</Text>
        <Column className="items-center lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:px-[62px] xl:px-[71px] px-[80px] 3xl:px-[96px] w-[100%]">
          <Grid className="lg:gap-[31px] xl:gap-[35px] gap-[40px] 3xl:gap-[48px] grid grid-cols-2 mx-[auto] w-[89%]">
            <Row className="bg-white_A700 hover:cursor-pointer items-end justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Image
                src={"images/img_image_6.png"}
                className="h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] object-contain rounded-radius5 w-[26%]"
                alt="Image"
              />
              <Column className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[42%]">
                <Text className="font-normal lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[auto]">{`The Three Musketeers`}</Text>
                <Image
                  src={"images/img_star_1.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[43%]"
                  alt="star"
                />
                <Text className="font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-left w-[auto]">{`$40.00`}</Text>
              </Column>
              <Image
                src={"images/img_icon_3.svg"}
                className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                alt="icon"
              />
            </Row>
            <Row className="bg-white_A700 hover:cursor-pointer items-end justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Image
                src={"images/img_image_7.png"}
                className="h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] object-contain rounded-radius5 w-[26%]"
                alt="Image"
              />
              <Column className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[42%]">
                <Text className="font-normal lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[auto]">{`The Three Musketeers`}</Text>
                <Image
                  src={"images/img_star_2.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[43%]"
                  alt="star"
                />
                <Text className="font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-left w-[auto]">{`$40.00`}</Text>
              </Column>
              <Image
                src={"images/img_icon_4.svg"}
                className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                alt="icon"
              />
            </Row>
            <Row className="bg-white_A700 hover:cursor-pointer items-end justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Image
                src={"images/img_image_8.png"}
                className="h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] object-contain rounded-radius5 w-[26%]"
                alt="Image"
              />
              <Column className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[42%]">
                <Text className="font-normal lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[auto]">{`The Three Musketeers`}</Text>
                <Image
                  src={"images/img_star_3.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[43%]"
                  alt="star"
                />
                <Text className="font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-left w-[auto]">{`$40.00`}</Text>
              </Column>
              <Image
                src={"images/img_icon_5.svg"}
                className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                alt="icon"
              />
            </Row>
            <Row className="bg-white_A700 hover:cursor-pointer items-end justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Image
                src={"images/img_image_9.png"}
                className="h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] object-contain rounded-radius5 w-[26%]"
                alt="Image"
              />
              <Column className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[42%]">
                <Text className="font-normal lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[auto]">{`The Three Musketeers`}</Text>
                <Image
                  src={"images/img_star_4.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[43%]"
                  alt="star"
                />
                <Text className="font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-left w-[auto]">{`$40.00`}</Text>
              </Column>
              <Image
                src={"images/img_icon_6.svg"}
                className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                alt="icon"
              />
            </Row>
          </Grid>
          <Stack className="bg-gray_900 lg:h-[229px] xl:h-[262px] h-[294px] 2xl:h-[295px] 3xl:h-[354px] lg:mt-[140px] xl:mt-[161px] mt-[181px] 3xl:mt-[217px] mx-[auto] rounded-radius20 w-[82%]">
            <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[49%]">
              <Text className="font-bold lg:leading-[42px] xl:leading-[48px] leading-[55.00px] 2xl:leading-[55px] 3xl:leading-[66px] lg:text-[35px] xl:text-[40px] text-[45px] 3xl:text-[54px] text-center text-white_A700 w-[100%]">
                {
                  <>
                    {`Subscribe For Get Update`}
                    <br />
                    {`Every New Courses`}
                  </>
                }
              </Text>
              <Text className="font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700_b2 w-[auto]">{`20k+ students daily learn with Eduvi. Subscribe for new courses.`}</Text>
              <Row className="items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] w-[88%]">
                <Text className="bg-white_A700_33 font-medium font-metropolis lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-bl-[10px] rounded-br-[0] rounded-tl-[10px] rounded-tr-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-left text-white_A700 w-[72%]">{`enter your email`}</Text>
                <Button className="bg-deep_purple_A200 font-inter font-medium lg:pb-[16px] pb-[21.38px] 2xl:pb-[21px] 3xl:pb-[25px] lg:pt-[17px] pt-[22.38px] 2xl:pt-[22px] 3xl:pt-[26px] xl:py-[19px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[28%]">{`Subscribe`}</Button>
              </Row>
            </Column>
            <Column className="absolute inset-[0] w-[100%]">
              <Row className="gap-[1030px] 3xl:gap-[1236px] lg:gap-[801px] xl:gap-[916px] grid grid-cols-2 items-center justify-between w-[100%]">
                <Image
                  src={"images/img_ellipse168_2.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                  alt="Ellipse168"
                />
                <Image
                  src={"images/img_ellipse166_2.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rounded-radius50 w-[60px]"
                  alt="Ellipse166"
                />
              </Row>
              <Row className="lg:gap-[626px] xl:gap-[717px] gap-[806px] 3xl:gap-[967px] grid grid-cols-2 items-start justify-between lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[100%]">
                <Image
                  src={"images/img_ellipse167_2.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                  alt="Ellipse167"
                />
                <Image
                  src={"images/img_ellipse167_3.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] object-contain rounded-radius50 w-[60px]"
                  alt="Ellipse167"
                />
              </Row>
              <Row className="gap-[1030px] 3xl:gap-[1236px] lg:gap-[801px] xl:gap-[916px] grid grid-cols-2 items-center justify-between lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[100%]">
                <Image
                  src={"images/img_ellipse166_3.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                  alt="Ellipse166"
                />
                <Image
                  src={"images/img_ellipse168_3.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rounded-radius50 w-[60px]"
                  alt="Ellipse168"
                />
              </Row>
            </Column>
          </Stack>
          <footer className="lg:mt-[112px] xl:mt-[128px] mt-[145px] 3xl:mt-[174px] mx-[auto] w-[89%]">
            <Row className="items-start justify-between w-[100%]">
              <Column className="items-start justify-start lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] w-[13%]">
                <Row className="items-center justify-start w-[67%]">
                  <Image
                    src={"images/img_icon_7.svg"}
                    className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain w-[22%]"
                    alt="icon"
                  />
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Eduvi`}</Text>
                </Row>
                <Image
                  src={"images/img_social_1.svg"}
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] object-contain w-[86%]"
                  alt="social"
                />
                <Column className="lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">
                      <span className="text-gray_700 font-inter">
                        <>{`©`}</>
                      </span>
                      <span className="text-gray_700 font-metropolis">
                        <>{`2021 Eduvi.co`}</>
                      </span>
                    </Text>
                    <Text className="font-normal lg:leading-[20px] xl:leading-[23px] leading-[26.00px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[100%]">
                      {
                        <>
                          {`Eduvi is a registered`}
                          <br />
                          {`trademark of Eduvi.co`}
                        </>
                      }
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="items-start justify-start lg:mb-[28px] xl:mb-[32px] mb-[36px] 3xl:mb-[43px] lg:ml-[105px] xl:ml-[120px] ml-[135px] 3xl:ml-[162px] w-[15%]">
                <Text className="font-inter font-normal lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-gray_900 text-left w-[auto]">{`Courses`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Classroom courses`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Virtual classroom courses`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`E-learning courses`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Video Courses`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Offline Courses`}</Text>
              </Column>
              <Column className="items-start justify-start lg:ml-[105px] xl:ml-[120px] ml-[135px] 3xl:ml-[162px] w-[10%]">
                <Text className="font-inter font-normal lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-gray_900 text-left w-[auto]">{`Community`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Learners`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Parteners`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Developers`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Transactions`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Blog`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Teaching Center`}</Text>
              </Column>
              <Column className="items-start justify-start lg:ml-[105px] xl:ml-[120px] ml-[135px] 3xl:ml-[162px] w-[14%]">
                <Text className="font-inter font-normal lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-gray_900 text-left w-[auto]">{`Quick links`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Home`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Professional Education`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Courses`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Admissions`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Testimonial`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Programs`}</Text>
              </Column>
              <Column className="items-start justify-start lg:ml-[105px] xl:ml-[120px] ml-[135px] 3xl:ml-[162px] w-[5%]">
                <Text className="font-inter font-normal lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-gray_900 text-left w-[auto]">{`More`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Press`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Investors`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Terms`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Privacy`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Help`}</Text>
                <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Contact`}</Text>
              </Column>
            </Row>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default EduviCoursesDetailsPage;
