import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Image,
  Text,
  Stack,
  Line,
  Button,
  List,
} from "components";

const AllmentorsPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/eduvi");
  }
  function handleNavigate5() {
    navigate("/eduvijoinasteacher");
  }
  function handleNavigate6() {
    navigate("/singlementordetails");
  }

  return (
    <>
      <Column className="bg-gray_100 font-metropolis items-center justify-start mx-[auto] lg:pb-[49px] xl:pb-[56px] pb-[63px] 3xl:pb-[75px] lg:pt-[23px] xl:pt-[26px] pt-[30px] 3xl:pt-[36px] w-[100%]">
        <header className="mx-[auto] w-[89%]">
          <Row className="items-start justify-start w-[100%]">
            <Image
              src={"images/img_icon_43.svg"}
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
                src={"images/img_shoppingbag_6.svg"}
                className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                alt="shoppingbag"
              />
            </Row>
            <Row className="items-center justify-between lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] w-[10%]">
              <Text className="cursor-pointer font-medium hover:font-normal lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`My Account`}</Text>
              <Image
                src={"images/img_profile24_6.svg"}
                className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                alt="profile24"
              />
            </Row>
          </Row>
        </header>
        <Stack className="lg:h-[210px] xl:h-[241px] h-[270px] 2xl:h-[271px] 3xl:h-[325px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] w-[89%]">
          <Column className="absolute bg-deep_purple_52 inset-[0] items-center justify-start lg:pb-[29px] xl:pb-[33px] pb-[37.8px] 2xl:pb-[37px] 3xl:pb-[45px] lg:pl-[550px] xl:pl-[629px] pl-[707.3px] 2xl:pl-[707px] 3xl:pl-[849px] lg:pr-[126px] xl:pr-[145px] pr-[163px] 3xl:pr-[195px] lg:pt-[26px] xl:pt-[30px] pt-[34.29px] 2xl:pt-[34px] 3xl:pt-[41px] rounded-radius20 w-[100%]">
            <Stack className="lg:h-[154px] xl:h-[177px] h-[197.91px] 2xl:h-[199px] 3xl:h-[238px] rounded-radius20 w-[32%]">
              <Stack className="absolute bottom-[0] 3xl:h-[119px] lg:h-[77px] xl:h-[88px] h-[98.39px] 2xl:h-[99px] inset-x-[0] mx-[auto] w-[99%]">
                <Image
                  src={"images/img_backgroundcomp.svg"}
                  className="absolute bottom-[0] 3xl:h-[104px] lg:h-[67px] xl:h-[77px] h-[85.94px] 2xl:h-[86px] left-[0] object-contain rounded-radius20 w-[30%]"
                  alt="BackgroundComp"
                />
                <Row className="absolute h-[max-content] inset-[0] items-end justify-center m-[auto] rounded-radius20 w-[97%]">
                  <Image
                    src={"images/img_group.svg"}
                    className="lg:h-[38px] xl:h-[43px] h-[47.86px] 2xl:h-[48px] 3xl:h-[58px] lg:mt-[39px] xl:mt-[44px] mt-[50.45px] 2xl:mt-[50px] 3xl:mt-[60px] object-contain rounded-radius20 w-[8%]"
                    alt="Group"
                  />
                  <Column className="mb-[1px] lg:ml-[232px] xl:ml-[266px] ml-[299.52px] 2xl:ml-[299px] 3xl:ml-[359px] rounded-radius20 w-[16%]">
                    <Image
                      src={"images/img_group_1.svg"}
                      className="lg:h-[54px] xl:h-[62px] h-[68.67px] 2xl:h-[69px] 3xl:h-[83px] object-cover rounded-radius20 w-[100%]"
                      alt="Group"
                    />
                    <Column className="items-end lg:pl-[13px] xl:pl-[15px] pl-[17.22px] 2xl:pl-[17px] 3xl:pl-[20px] xl:pr-[10px] pr-[12.22px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[9px] w-[100%]">
                      <Stack className="lg:h-[26px] xl:h-[29px] h-[32.53px] 2xl:h-[33px] 3xl:h-[40px] mr-[0] pr-[1px] rounded-radius20 w-[52%]">
                        <Column className="absolute opacity-op3 right-[0] rounded-radius20 w-[83%]"></Column>
                        <Image
                          src={"images/img_group_2.svg"}
                          className="absolute lg:h-[26px] xl:h-[29px] h-[32.53px] 2xl:h-[33px] 3xl:h-[40px] left-[0] object-contain rounded-radius20 w-[74%]"
                          alt="Group"
                        />
                      </Stack>
                    </Column>
                  </Column>
                </Row>
              </Stack>
              <Column className="absolute inset-[0] items-center justify-start w-[100%]">
                <Stack className="lg:h-[154px] xl:h-[176px] h-[197.75998px] 2xl:h-[198px] 3xl:h-[238px] mx-[auto] w-[72%]">
                  <Image
                    src={"images/img_device.svg"}
                    className="absolute bottom-[0] lg:h-[143px] xl:h-[163px] h-[183.14px] 2xl:h-[184px] 3xl:h-[220px] inset-x-[0] object-contain rounded-radius20 w-[100%]"
                    alt="Device"
                  />
                  <Image
                    src={"images/img_character.svg"}
                    className="absolute lg:h-[122px] xl:h-[140px] h-[156.65px] 2xl:h-[157px] 3xl:h-[189px] left-[24%] object-contain rounded-radius20 top-[3%] w-[49%]"
                    alt="Character"
                  />
                  <Image
                    src={"images/img_speechbubble.svg"}
                    className="absolute lg:h-[38px] xl:h-[44px] h-[48.43px] 2xl:h-[49px] 3xl:h-[59px] object-contain right-[21%] rounded-radius20 top-[0] w-[17%]"
                    alt="SpeechBubble"
                  />
                </Stack>
                <Line className="h-[0.3px] mb-[0] w-[100%]" />
              </Column>
            </Stack>
          </Column>
          <Column className="absolute items-start justify-start left-[2%] top-[7%] w-[41%]">
            <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_66 text-left tracking-ls1 w-[auto]">
              <span className="text-gray_900_66 font-metropolis">
                <>{`Home | `}</>
              </span>
              <span className="text-deep_purple_A200 font-metropolis">
                <>{`Our Mentors`}</>
              </span>
            </Text>
            <Column className="items-end lg:mt-[38px] xl:mt-[43px] mt-[49px] 3xl:mt-[58px] lg:pl-[128px] xl:pl-[146px] pl-[165px] 3xl:pl-[198px] w-[100%]">
              <Text className="font-normal lg:leading-[38px] xl:leading-[44px] leading-[50.00px] 2xl:leading-[50px] 3xl:leading-[60px] lg:text-[35px] xl:text-[40px] text-[45px] 3xl:text-[54px] text-gray_900 text-left w-[69%]">
                {
                  <>
                    {`Eduvi has the`}
                    <br />
                    {`qualified mentor`}
                  </>
                }
              </Text>
            </Column>
          </Column>
        </Stack>
        <Row className="items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] w-[85%]">
          <Row className="font-inter items-center justify-between w-[75%]">
            <Button className="bg-white_A700 font-medium lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[16%]">{`All Mentors`}</Button>
            <Button className="bg-white_A700 font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[21%]">{`For Kindergarten`}</Button>
            <Button className="bg-deep_orange_400 font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 shadow-bs2 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[19%]">{`For high school`}</Button>
            <Button className="bg-white_A700 font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[16%]">{`For college`}</Button>
            <Button className="bg-white_A700 font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[19%]">{`For Technology`}</Button>
          </Row>
          <Text
            className="common-pointer font-medium font-metropolis lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_66 text-left tracking-ls1 w-[auto]"
            onClick={handleNavigate5}
          >
            <span className="text-gray_900_66">
              <>{`Home | `}</>
            </span>
            <span className="text-deep_purple_A200">
              <>{`Become An Instructor`}</>
            </span>
          </Text>
        </Row>
        <List
          className="font-inter gap-[0] min-h-[auto] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] w-[89%]"
          orientation="vertical"
        >
          <Row className="lg:gap-[31px] xl:gap-[35px] gap-[40px] 3xl:gap-[48px] grid grid-cols-4 items-center justify-between lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[100%]">
            <Column
              className="common-pointer items-start w-[100%]"
              onClick={handleNavigate6}
            >
              <Column className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] w-[100%]">
                <Image
                  src={"images/img_bg_8.png"}
                  className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] mx-[auto] object-cover rounded-radius10 lg:w-[225px] xl:w-[257px] w-[290px] 3xl:w-[348px]"
                  alt="BG"
                />
              </Column>
              <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Kristin Watson`}</Text>
              <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 text-left w-[auto]">{`Founder & Mentor`}</Text>
            </Column>
            <Column className="items-start w-[100%]">
              <Column className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] w-[100%]">
                <Image
                  src={"images/img_bg_9.png"}
                  className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] mx-[auto] object-cover rounded-radius10 lg:w-[225px] xl:w-[257px] w-[290px] 3xl:w-[348px]"
                  alt="BG"
                />
              </Column>
              <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Brooklyn Simmons`}</Text>
              <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 text-left w-[auto]">{`Founder & Mentor`}</Text>
            </Column>
            <Column className="items-start w-[100%]">
              <Column className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] w-[100%]">
                <Image
                  src={"images/img_bg_10.png"}
                  className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] mx-[auto] object-cover rounded-radius10 lg:w-[225px] xl:w-[257px] w-[290px] 3xl:w-[348px]"
                  alt="BG"
                />
              </Column>
              <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Robert Fox`}</Text>
              <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 text-left w-[auto]">{`Founder & Mentor`}</Text>
            </Column>
            <Column className="items-start w-[100%]">
              <Column className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] w-[100%]">
                <Image
                  src={"images/img_bg_11.png"}
                  className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] mx-[auto] object-cover rounded-radius10 lg:w-[225px] xl:w-[257px] w-[290px] 3xl:w-[348px]"
                  alt="BG"
                />
              </Column>
              <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Wade Warren`}</Text>
              <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 text-left w-[auto]">{`Founder & Mentor`}</Text>
            </Column>
          </Row>
          <Row className="items-start justify-between lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[100%]">
            <Column className="items-start justify-start lg:mb-[28px] xl:mb-[32px] mb-[37px] 3xl:mb-[44px] w-[23%]">
              <Column className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] w-[100%]">
                <Image
                  src={"images/img_bg_12.png"}
                  className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] mx-[auto] object-cover rounded-radius10 lg:w-[225px] xl:w-[257px] w-[290px] 3xl:w-[348px]"
                  alt="BG"
                />
              </Column>
              <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Bessie Cooper`}</Text>
              <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 text-left w-[auto]">{`Founder & Mentor`}</Text>
            </Column>
            <Column className="items-start justify-start lg:mb-[28px] xl:mb-[32px] mb-[37px] 3xl:mb-[44px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] w-[23%]">
              <Column className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] w-[100%]">
                <Image
                  src={"images/img_bg_13.png"}
                  className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] mx-[auto] object-cover rounded-radius10 lg:w-[225px] xl:w-[257px] w-[290px] 3xl:w-[348px]"
                  alt="BG"
                />
              </Column>
              <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Ronald Richards`}</Text>
              <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 text-left w-[auto]">{`Founder & Mentor`}</Text>
            </Column>
            <Column className="lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] w-[23%]">
              <Image
                src={"images/img_bg_14.png"}
                className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:w-[225px] xl:w-[257px] w-[290px] 3xl:w-[348px]"
                alt="BG"
              />
              <Stack className="3xl:h-[113px] lg:h-[74px] xl:h-[84px] h-[94px] 2xl:h-[95px] w-[100%]">
                <Row className="absolute bottom-[13%] inset-x-[0] items-center justify-center mx-[auto] w-[33%]">
                  <Line className="bg-gray_700 lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] w-[1px]" />
                  <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 text-left w-[auto]">
                    <span className="text-gray_700 font-inter">
                      <>{`Courses(`}</>
                    </span>
                    <span className="text-deep_orange_400 font-inter underline">
                      <>{`30`}</>
                    </span>
                    <span className="text-gray_700 font-inter">
                      <>{`)`}</>
                    </span>
                  </Text>
                </Row>
                <Column className="absolute bg-white_A700 inset-[0] items-start justify-start xl:pb-[10px] pb-[12px] 3xl:pb-[14px] lg:pb-[9px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] shadow-bs5 w-[100%]">
                  <Column className="w-[100%]">
                    <Line className="bg-deep_purple_A200 h-[1px] w-[100%]" />
                  </Column>
                  <Text className="font-medium lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-deep_orange_400 text-left w-[auto]">{`Guy Hawkins`}</Text>
                  <Text className="font-medium lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 text-left w-[auto]">{`Founder & Mentor`}</Text>
                  <Row className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[28%]">
                    <Image
                      src={"images/img_vector_5.svg"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Vector"
                    />
                    <Text className="font-medium lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 text-left w-[auto]">
                      <span className="text-gray_700 font-inter">
                        <>{`4.9 (`}</>
                      </span>
                      <span className="text-deep_orange_400 font-inter underline">
                        <>{`135`}</>
                      </span>
                      <span className="text-gray_700 font-inter">
                        <>{`)`}</>
                      </span>
                    </Text>
                  </Row>
                </Column>
              </Stack>
            </Column>
            <Column className="items-start justify-start lg:mb-[28px] xl:mb-[32px] mb-[37px] 3xl:mb-[44px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] w-[23%]">
              <Column className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] w-[100%]">
                <Image
                  src={"images/img_bg_15.png"}
                  className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] mx-[auto] object-cover rounded-radius10 lg:w-[225px] xl:w-[257px] w-[290px] 3xl:w-[348px]"
                  alt="BG"
                />
              </Column>
              <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Floyd Miles`}</Text>
              <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 text-left w-[auto]">{`Founder & Mentor`}</Text>
            </Column>
          </Row>
          <Row className="lg:gap-[31px] xl:gap-[35px] gap-[40px] 3xl:gap-[48px] grid grid-cols-4 items-center justify-between lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[100%]">
            <Column className="items-start w-[100%]">
              <Column className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] w-[100%]">
                <Image
                  src={"images/img_bg_16.png"}
                  className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] mx-[auto] object-cover rounded-radius10 lg:w-[225px] xl:w-[257px] w-[290px] 3xl:w-[348px]"
                  alt="BG"
                />
              </Column>
              <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Theresa Webb`}</Text>
              <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 text-left w-[auto]">{`Founder & Mentor`}</Text>
            </Column>
            <Column className="items-start w-[100%]">
              <Column className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] w-[100%]">
                <Image
                  src={"images/img_bg_17.png"}
                  className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] mx-[auto] object-cover rounded-radius10 lg:w-[225px] xl:w-[257px] w-[290px] 3xl:w-[348px]"
                  alt="BG"
                />
              </Column>
              <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Cody Fisher`}</Text>
              <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 text-left w-[auto]">{`Founder & Mentor`}</Text>
            </Column>
            <Column className="items-start w-[100%]">
              <Column className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] w-[100%]">
                <Image
                  src={"images/img_bg_18.png"}
                  className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] mx-[auto] object-cover rounded-radius10 lg:w-[225px] xl:w-[257px] w-[290px] 3xl:w-[348px]"
                  alt="BG"
                />
              </Column>
              <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Courtney Henry`}</Text>
              <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 text-left w-[auto]">{`Founder & Mentor`}</Text>
            </Column>
            <Column className="items-start w-[100%]">
              <Column className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] w-[100%]">
                <Image
                  src={"images/img_bg_19.png"}
                  className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] mx-[auto] object-cover rounded-radius10 lg:w-[225px] xl:w-[257px] w-[290px] 3xl:w-[348px]"
                  alt="BG"
                />
              </Column>
              <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Jerome Bell`}</Text>
              <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 text-left w-[auto]">{`Founder & Mentor`}</Text>
            </Column>
          </Row>
        </List>
        <Row className="font-metropolis items-center justify-center lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] mx-[auto] w-[19%]">
          <Image
            src={"images/img_previous_1.svg"}
            className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
            alt="previous"
          />
          <Row className="items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] w-[53%]">
            <Text className="font-medium lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Page`}</Text>
            <Button className="bg-white_A700 font-medium lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:py-[11px] xl:py-[12px] py-[14.54px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius8 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 text-center lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]">{`1`}</Button>
            <Text className="font-medium lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`of 3`}</Text>
          </Row>
          <Image
            src={"images/img_next_1.svg"}
            className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
            alt="Next"
          />
        </Row>
        <Stack className="bg-gray_900 font-metropolis lg:h-[229px] xl:h-[262px] h-[294px] 2xl:h-[295px] 3xl:h-[354px] lg:mt-[125px] xl:mt-[143px] mt-[161px] 3xl:mt-[193px] mx-[auto] rounded-radius20 w-[82%]">
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
                src={"images/img_ellipse168_12.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                alt="Ellipse168"
              />
              <Image
                src={"images/img_ellipse166_12.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rounded-radius50 w-[60px]"
                alt="Ellipse166"
              />
            </Row>
            <Row className="lg:gap-[626px] xl:gap-[717px] gap-[806px] 3xl:gap-[967px] grid grid-cols-2 items-start justify-between lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[100%]">
              <Image
                src={"images/img_ellipse167_12.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                alt="Ellipse167"
              />
              <Image
                src={"images/img_ellipse167_13.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] object-contain rounded-radius50 w-[60px]"
                alt="Ellipse167"
              />
            </Row>
            <Row className="gap-[1030px] 3xl:gap-[1236px] lg:gap-[801px] xl:gap-[916px] grid grid-cols-2 items-center justify-between lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[100%]">
              <Image
                src={"images/img_ellipse166_13.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                alt="Ellipse166"
              />
              <Image
                src={"images/img_ellipse168_13.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rounded-radius50 w-[60px]"
                alt="Ellipse168"
              />
            </Row>
          </Column>
        </Stack>
        <footer className="font-metropolis lg:mt-[112px] xl:mt-[128px] mt-[145px] 3xl:mt-[174px] mx-[auto] w-[89%]">
          <Row className="items-start justify-between w-[100%]">
            <Column className="items-start justify-start lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] w-[13%]">
              <Row className="items-center justify-start w-[67%]">
                <Image
                  src={"images/img_icon_44.svg"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain w-[22%]"
                  alt="icon"
                />
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Eduvi`}</Text>
              </Row>
              <Image
                src={"images/img_social_8.svg"}
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
    </>
  );
};

export default AllmentorsPage;
