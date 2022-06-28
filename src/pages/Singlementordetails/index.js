import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Image, Text, Stack, List, Button } from "components";

const SinglementordetailsPage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/eduvi");
  }

  return (
    <>
      <Column className="bg-gray_100 font-metropolis items-start justify-start mx-[auto] lg:pb-[56px] xl:pb-[64px] pb-[73px] 3xl:pb-[87px] lg:pt-[23px] xl:pt-[26px] pt-[30px] 3xl:pt-[36px] w-[100%]">
        <Column className="items-center lg:px-[62px] xl:px-[71px] px-[80px] 3xl:px-[96px] w-[100%]">
          <header className="mx-[auto] w-[89%]">
            <Row className="items-start justify-start w-[100%]">
              <Image
                src={"images/img_icon_41.svg"}
                className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain w-[2%]"
                alt="icon"
              />
              <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Eduvi`}</Text>
              <Text className="cursor-pointer font-medium hover:font-normal ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Shop`}</Text>
              <Row className="items-center justify-center lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] w-[47%]">
                <Text className="cursor-pointer font-medium hover:font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`For Kindergarten`}</Text>
                <Text className="cursor-pointer font-medium hover:font-normal lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`For High School`}</Text>
                <Text className="cursor-pointer font-medium hover:font-normal lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`For College`}</Text>
                <Text className="cursor-pointer font-medium hover:font-normal lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`Courses`}</Text>
              </Row>
              <Row className="items-center justify-center xl:ml-[103px] ml-[116px] 3xl:ml-[139px] lg:ml-[90px] w-[8%]">
                <Text className="cursor-pointer font-medium hover:font-normal lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`Cart (0)`}</Text>
                <Image
                  src={"images/img_shoppingbag_5.svg"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                  alt="shoppingbag"
                />
              </Row>
              <Row className="items-center justify-between lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] w-[10%]">
                <Text className="cursor-pointer font-medium hover:font-normal lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`My Account`}</Text>
                <Image
                  src={"images/img_profile24_5.svg"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                  alt="profile24"
                />
              </Row>
            </Row>
          </header>
          <Stack className="lg:h-[487px] xl:h-[557px] h-[626px] 2xl:h-[627px] 3xl:h-[752px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] w-[89%]">
            <Stack className="absolute lg:h-[487px] xl:h-[557px] h-[626px] 2xl:h-[627px] 3xl:h-[752px] inset-[0] w-[100%]">
              <Column className="absolute bg-white_A700 bottom-[17%] items-center justify-start lg:px-[15px] xl:px-[17px] px-[20px] 3xl:px-[24px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] right-[0] rounded-radius10 w-[31%]">
                <Row className="items-center justify-between mx-[auto] w-[90%]">
                  <Text className="font-normal xl:my-[1px] lg:my-[1px] my-[2px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_700 text-left w-[auto]">{`Total Course`}</Text>
                  <Text className="font-normal lg:ml-[158px] xl:ml-[181px] ml-[204px] 3xl:ml-[244px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-right w-[auto]">{`30`}</Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] w-[90%]">
                  <Text className="font-normal lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_700 text-left w-[auto]">{`Ratings`}</Text>
                  <Image
                    src={"images/img_star_15.svg"}
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[145px] xl:ml-[166px] ml-[187px] 3xl:ml-[224px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                    alt="star"
                  />
                  <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 text-right w-[auto]">
                    <span className="text-gray_900 font-metropolis">
                      <>{`4.9(`}</>
                    </span>
                    <span className="text-deep_orange_400 font-metropolis underline">
                      <>{`153`}</>
                    </span>
                    <span className="text-gray_900 font-metropolis">
                      <>{`)`}</>
                    </span>
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] w-[90%]">
                  <Text className="font-normal lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_700 text-left w-[auto]">{`Experiences`}</Text>
                  <Text className="font-normal lg:ml-[124px] xl:ml-[142px] ml-[160px] 3xl:ml-[192px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 text-right w-[auto]">{`10 Years`}</Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] w-[90%]">
                  <Text className="font-normal lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_700 text-left w-[auto]">{`Grauduated`}</Text>
                  <Text className="font-normal lg:ml-[162px] xl:ml-[185px] ml-[209px] 3xl:ml-[250px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 text-right w-[auto]">{`Yes`}</Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] w-[90%]">
                  <Text className="font-normal lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_700 text-left w-[auto]">{`Language`}</Text>
                  <Text className="font-normal xl:ml-[100px] ml-[113px] 3xl:ml-[135px] lg:ml-[87px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 text-right w-[auto]">{`English, French`}</Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] w-[90%]">
                  <Text className="font-normal lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_700 text-left w-[auto]">{`Social`}</Text>
                  <Image
                    src={"images/img_social_6.svg"}
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[120px] xl:ml-[137px] ml-[155px] 3xl:ml-[186px] object-contain w-[41%]"
                    alt="social"
                  />
                </Row>
              </Column>
              <Column className="absolute bottom-[0] items-start justify-start left-[2%] w-[63%]">
                <Text className="font-normal lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`About Kritsin`}</Text>
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
              </Column>
              <Stack className="absolute bg-deep_purple_52 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] rounded-radius20 top-[0] w-[100%]">
                <Stack className="absolute font-airbnbcerealapp lg:h-[184px] xl:h-[210px] h-[236px] 2xl:h-[237px] 3xl:h-[284px] right-[0] top-[0] w-[100%]">
                  <div className="absolute bg-deep_purple_A200_79 lg:h-[121px] xl:h-[138px] h-[155px] 2xl:h-[156px] 3xl:h-[187px] right-[0] rounded-radius775 top-[0] w-[16%]"></div>
                  <Column className="absolute inset-y-[0] left-[0] right-[3%] w-[97%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-center w-[100%]">
                        <Row className="items-center justify-start lg:pr-[13px] xl:pr-[15px] pr-[17.32px] 2xl:pr-[17px] 3xl:pr-[20px] w-[147]">
                          <Stack className="lg:h-[133px] xl:h-[153px] h-[171px] 2xl:h-[172px] 3xl:h-[206px] w-[1061.68]">
                            <Column className="absolute right-[2%] rotate-[90deg] rounded-radius20 top-[0] w-[17%]">
                              <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-10 items-center justify-evenly w-[100%]">
                                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              </Row>
                              <List
                                className="gap-[0] min-h-[auto] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]"
                                orientation="vertical"
                              >
                                <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-10 items-center justify-evenly my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                </Row>
                                <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-10 items-center justify-evenly my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                </Row>
                                <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-10 items-center justify-evenly my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                </Row>
                                <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-10 items-center justify-evenly my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                </Row>
                                <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-10 items-center justify-evenly my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                </Row>
                                <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-10 items-center justify-evenly my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                </Row>
                                <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-10 items-center justify-evenly my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                </Row>
                                <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-10 items-center justify-evenly my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                </Row>
                                <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-10 items-center justify-evenly my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                  <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                                </Row>
                              </List>
                            </Column>
                            <Image
                              src={"images/img_group754.svg"}
                              className="absolute lg:h-[133px] xl:h-[153px] h-[171px] 2xl:h-[172px] 3xl:h-[206px] inset-[0] object-cover rounded-radius20 w-[100%]"
                              alt="Group754"
                            />
                          </Stack>
                        </Row>
                        <Row className="items-center justify-end lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] w-[38]">
                          <div className="bg-deep_purple_A200_79 lg:h-[121px] xl:h-[138px] h-[155px] 2xl:h-[156px] 3xl:h-[187px] rounded-radius775 w-[222]"></div>
                        </Row>
                      </Row>
                    </Column>
                    <Column className="items-end 3xl:pl-[1119px] lg:pl-[724px] xl:pl-[829px] pl-[932px] lg:pr-[149px] xl:pr-[170px] pr-[192px] 3xl:pr-[230px] w-[100%]">
                      <List
                        className="gap-[0] min-h-[auto] rotate-[90deg] rounded-radius20 w-[14%]"
                        orientation="vertical"
                      >
                        <Row className="items-center justify-evenly lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                          <Row className="items-center justify-evenly w-[79%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-8 items-center justify-evenly w-[100%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                          <Row className="items-center justify-evenly lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] w-[21%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-2 items-center justify-evenly w-[87%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                          <Row className="items-center justify-evenly w-[79%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-8 items-center justify-evenly w-[100%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                          <Row className="items-center justify-evenly lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] w-[21%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-2 items-center justify-evenly w-[87%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                          <Row className="items-center justify-evenly w-[79%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-8 items-center justify-evenly w-[100%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                          <Row className="items-center justify-evenly lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] w-[21%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-2 items-center justify-evenly w-[87%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                          <Row className="items-center justify-evenly w-[79%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-8 items-center justify-evenly w-[100%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                          <Row className="items-center justify-evenly lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] w-[21%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-2 items-center justify-evenly w-[87%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                          <Row className="items-center justify-evenly w-[79%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-8 items-center justify-evenly w-[100%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                          <Row className="items-center justify-evenly lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] w-[21%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-2 items-center justify-evenly w-[87%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                          <Row className="items-center justify-evenly w-[79%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-8 items-center justify-evenly w-[100%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                          <Row className="items-center justify-evenly lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] w-[21%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-2 items-center justify-evenly w-[87%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                          <Row className="items-center justify-evenly w-[79%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-8 items-center justify-evenly w-[100%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                          <Row className="items-center justify-evenly lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] w-[21%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-2 items-center justify-evenly w-[87%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                          <Row className="items-center justify-evenly w-[79%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-8 items-center justify-evenly w-[100%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                          <Row className="items-center justify-evenly lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] w-[21%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-2 items-center justify-evenly w-[87%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                          <Row className="items-center justify-evenly w-[79%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-8 items-center justify-evenly w-[100%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                          <Row className="items-center justify-evenly lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] w-[21%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-2 items-center justify-evenly w-[87%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                          <Row className="items-center justify-evenly w-[79%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-8 items-center justify-evenly w-[100%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                          <Row className="items-center justify-evenly lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] w-[21%]">
                            <Row className="lg:gap-[3px] xl:gap-[4px] gap-[5px] 3xl:gap-[6px] grid grid-cols-2 items-center justify-evenly w-[87%]">
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                              <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200_4c w-[100%]">{`+`}</Text>
                            </Row>
                          </Row>
                        </Row>
                      </List>
                    </Column>
                  </Column>
                </Stack>
                <Text className="absolute font-medium font-metropolis left-[2%] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_66 text-left top-[8%] tracking-ls1 w-[auto]">
                  <span className="text-gray_900_66">
                    <>{`Home | Mentor | `}</>
                  </span>
                  <span className="text-deep_purple_A200">
                    <>{`Kristin Watson`}</>
                  </span>
                </Text>
                <Row className="absolute bottom-[0] font-inter items-end justify-start left-[2%] w-[63%]">
                  <Image
                    src={"images/img_bg_7.png"}
                    className="lg:h-[133px] xl:h-[152px] h-[170px] 2xl:h-[171px] 3xl:h-[205px] object-contain rounded-radius10 lg:w-[132px] xl:w-[151px] w-[170px] 3xl:w-[204px]"
                    alt="BG"
                  />
                  <Column className="font-metropolis items-start justify-start lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:mt-[101px] mt-[114px] 3xl:mt-[136px] lg:mt-[88px] w-[26%]">
                    <Text className="font-medium lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Kritsin Watson`}</Text>
                    <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_700 text-left w-[auto]">{`Founder & Mentor`}</Text>
                  </Column>
                  <Button className="bg-deep_purple_A200 font-medium lg:ml-[182px] xl:ml-[208px] ml-[234px] 3xl:ml-[280px] mt-[110px] 3xl:mt-[132px] lg:mt-[85px] xl:mt-[97px] lg:py-[16px] xl:py-[18px] py-[21px] 3xl:py-[25px] rounded-radius10 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[21%]">{`Contact Now`}</Button>
                </Row>
              </Stack>
            </Stack>
            <Row className="absolute bottom-[42%] font-inter items-center justify-start left-[2%] w-[31%]">
              <Button className="bg-deep_orange_400 font-medium lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 shadow-bs2 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[27%]">{`About`}</Button>
              <Button className="bg-white_A700 font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[31%]">{`Courses`}</Button>
              <Button className="bg-white_A700 font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[31%]">{`Reviews`}</Button>
            </Row>
          </Stack>
        </Column>
        <Text className="font-normal ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[97px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Certification`}</Text>
        <Text className="font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[97px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[56%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.`}</Text>
        <Column className="items-center lg:mt-[140px] xl:mt-[161px] mt-[181px] 3xl:mt-[217px] lg:pl-[62px] xl:pl-[71px] pl-[80px] 3xl:pl-[96px] lg:pr-[63px] xl:pr-[72px] pr-[81px] 3xl:pr-[97px] w-[100%]">
          <Stack className="bg-gray_900 lg:h-[229px] xl:h-[262px] h-[294px] 2xl:h-[295px] 3xl:h-[354px] mx-[auto] rounded-radius20 w-[82%]">
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
                  src={"images/img_ellipse168_10.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                  alt="Ellipse168"
                />
                <Image
                  src={"images/img_ellipse166_10.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rounded-radius50 w-[60px]"
                  alt="Ellipse166"
                />
              </Row>
              <Row className="lg:gap-[626px] xl:gap-[717px] gap-[806px] 3xl:gap-[967px] grid grid-cols-2 items-start justify-between lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[100%]">
                <Image
                  src={"images/img_ellipse167_10.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                  alt="Ellipse167"
                />
                <Image
                  src={"images/img_ellipse167_11.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] object-contain rounded-radius50 w-[60px]"
                  alt="Ellipse167"
                />
              </Row>
              <Row className="gap-[1030px] 3xl:gap-[1236px] lg:gap-[801px] xl:gap-[916px] grid grid-cols-2 items-center justify-between lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[100%]">
                <Image
                  src={"images/img_ellipse166_11.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                  alt="Ellipse166"
                />
                <Image
                  src={"images/img_ellipse168_11.png"}
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
                    src={"images/img_icon_42.svg"}
                    className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain w-[22%]"
                    alt="icon"
                  />
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Eduvi`}</Text>
                </Row>
                <Image
                  src={"images/img_social_7.svg"}
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] object-contain w-[86%]"
                  alt="social"
                />
                <Text className="font-normal lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">
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

export default SinglementordetailsPage;
