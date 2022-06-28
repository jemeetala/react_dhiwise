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
  Input,
  Grid,
} from "components";

const EduviCoursesPage = () => {
  const navigate = useNavigate();

  function handleNavigate42() {
    navigate("/eduvi");
  }
  function handleNavigate43() {
    navigate("/eduvicoursesdetails");
  }

  return (
    <>
      <Column className="bg-gray_100 font-metropolis items-start justify-start mx-[auto] lg:pb-[49px] xl:pb-[56px] pb-[63px] 3xl:pb-[75px] lg:pt-[23px] xl:pt-[26px] pt-[30px] 3xl:pt-[36px] w-[100%]">
        <Column className="items-center lg:px-[62px] xl:px-[71px] px-[80px] 3xl:px-[96px] w-[100%]">
          <header className="mx-[auto] w-[89%]">
            <Row className="items-start justify-start w-[100%]">
              <Image
                src={"images/img_icon_8.svg"}
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
                  src={"images/img_shoppingbag_2.svg"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                  alt="shoppingbag"
                />
              </Row>
              <Row className="items-center justify-between lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] w-[10%]">
                <Text className="cursor-pointer font-medium hover:font-normal lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] hover:text-deep_purple_A200 text-gray_900 text-right w-[auto]">{`My Account`}</Text>
                <Image
                  src={"images/img_profile24_2.svg"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                  alt="profile24"
                />
              </Row>
            </Row>
          </header>
          <Stack className="bg-deep_purple_50 lg:h-[210px] xl:h-[241px] h-[270px] 2xl:h-[271px] 3xl:h-[325px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] lg:pb-[13px] xl:pb-[15px] pb-[17px] 3xl:pb-[20px] lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:pr-[124px] xl:pr-[142px] pr-[160px] 3xl:pr-[192px] lg:pt-[15px] xl:pt-[17px] pt-[20px] 3xl:pt-[24px] rounded-radius20 w-[89%]">
            <Row className="absolute h-[max-content] inset-y-[0] items-start justify-between left-[0] my-[auto] w-[85%]">
              <Column className="items-start justify-start lg:mb-[52px] xl:mb-[60px] mb-[68px] 3xl:mb-[81px] w-[47%]">
                <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_66 text-left tracking-ls1 w-[auto]">
                  <span className="text-gray_900_66 font-metropolis">
                    <>{`Home | `}</>
                  </span>
                  <span className="text-deep_purple_A200 font-metropolis">
                    <>{`Courses`}</>
                  </span>
                </Text>
                <Column className="items-end lg:mt-[38px] xl:mt-[43px] mt-[49px] 3xl:mt-[58px] lg:pl-[100px] xl:pl-[114px] pl-[129px] 3xl:pl-[154px] w-[100%]">
                  <Text className="font-normal lg:leading-[38px] xl:leading-[44px] leading-[50.00px] 2xl:leading-[50px] 3xl:leading-[60px] lg:text-[35px] xl:text-[40px] text-[45px] 3xl:text-[54px] text-gray_900 text-left w-[75%]">
                    {
                      <>
                        {`Eduvi Courses`}
                        <br />
                        {`For All Standards`}
                      </>
                    }
                  </Text>
                </Column>
              </Column>
              <Stack className="font-airbnbcerealapp lg:h-[182px] xl:h-[208px] h-[233px] 2xl:h-[234px] 3xl:h-[280px] lg:ml-[124px] xl:ml-[142px] ml-[160px] 3xl:ml-[192px] w-[38%]">
                <List
                  className="absolute gap-[0] left-[5%] min-h-[auto] rounded-radius20 top-[0] w-[33%]"
                  orientation="vertical"
                >
                  <Row className="2xl:gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] gap-[9.999975px] grid grid-cols-10 items-center justify-between lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                  </Row>
                  <Row className="2xl:gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] gap-[9.999975px] grid grid-cols-10 items-center justify-between lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                  </Row>
                  <Row className="2xl:gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] gap-[9.999975px] grid grid-cols-10 items-center justify-between lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                  </Row>
                  <Row className="2xl:gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] gap-[9.999975px] grid grid-cols-10 items-center justify-between lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                  </Row>
                  <Row className="2xl:gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] gap-[9.999975px] grid grid-cols-10 items-center justify-between lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                  </Row>
                  <Row className="2xl:gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] gap-[9.999975px] grid grid-cols-10 items-center justify-between lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                  </Row>
                  <Row className="2xl:gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] gap-[9.999975px] grid grid-cols-10 items-center justify-between lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_A200 w-[100%]">{`+`}</Text>
                  </Row>
                </List>
                <Image
                  src={"images/img_image_10.png"}
                  className="absolute lg:h-[182px] xl:h-[208px] h-[233px] 2xl:h-[234px] 3xl:h-[280px] inset-[0] object-cover rounded-radius20 w-[100%]"
                  alt="Image"
                />
              </Stack>
            </Row>
            <div className="absolute backdrop-opacity-[0.5] bg-black_900_cc blur-[90.00px] bottom-[1%] lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] right-[0] rounded-radius8 w-[34%]"></div>
          </Stack>
          <Row className="font-inter items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] w-[89%]">
            <Button className="bg-white_A700 font-medium lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[12%]">{`All Courses`}</Button>
            <Input
              className="placeholder:bg-transparent bg-white_A700 border-0 font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_900 text-gray_900 text-left w-[12%]"
              name="Kindergarten"
              placeholder={`Kindergarten`}
            ></Input>
            <Button className="bg-deep_orange_400 font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 shadow-bs2 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[12%]">{`High School`}</Button>
            <Button className="bg-white_A700 font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]">{`College`}</Button>
            <Button className="bg-white_A700 font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[11%]">{`Computer`}</Button>
            <Button className="bg-white_A700 font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]">{`Science`}</Button>
            <Button className="bg-white_A700 font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[12%]">{`Engineering`}</Button>
            <Button className="bg-white_A700 font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[13%]">{`More Courses`}</Button>
          </Row>
        </Column>
        <Text className="font-normal lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Standard Classes`}</Text>
        <Column className="items-center lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[100%]">
          <Grid className="lg:gap-[31px] xl:gap-[35px] gap-[40px] 3xl:gap-[48px] grid grid-cols-4 mx-[auto] w-[89%]">
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Image
                src={"images/img_0281.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="0281"
              />
              <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard One`}</Text>
              <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 1 is a foundation Standard that reflects 7 important concepts...`}</Text>
              <Button
                className="common-pointer border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]"
                onClick={handleNavigate43}
              >{`Class Details`}</Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Image
                src={"images/img_0292.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="0292"
              />
              <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Two`}</Text>
              <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 2 builds on the foundations of Standard 1 and includes requirements...`}</Text>
              <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Image
                src={"images/img_0303.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="0303"
              />
              <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Three`}</Text>
              <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 3 of the Aged Care Quality Standards applies to all services delivering personal...`}</Text>
              <Button className="bg-deep_purple_A200 font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[56%]">{`Class Details`}</Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Image
                src={"images/img_0314.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="0314"
              />
              <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Four`}</Text>
              <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 4 of the Aged Care Quality Standards focuses on services and supports...`}</Text>
              <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Image
                src={"images/img_0325.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="0325"
              />
              <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Five`}</Text>
              <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 5 Learning Resources. Learning Resources ensure that the school has the...`}</Text>
              <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Image
                src={"images/img_0336.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="0336"
              />
              <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Six`}</Text>
              <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 6 requires an organisation to have a system to resolve complaints...`}</Text>
              <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Image
                src={"images/img_0347.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="0347"
              />
              <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Seven`}</Text>
              <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 7 Blood Management mandates that leaders of health service organisations...`}</Text>
              <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Image
                src={"images/img_0358.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="0358"
              />
              <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Eight`}</Text>
              <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 8 Course from NCERT Solutions help students to understand...`}</Text>
              <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Image
                src={"images/img_0369.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="0369"
              />
              <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Nine`}</Text>
              <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 5 Learning Resources. Learning Resources ensure that the school has the...`}</Text>
              <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Image
                src={"images/img_015o.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="015o"
              />
              <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`O- Level`}</Text>
              <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 6 requires an organisation to have a system to resolve complaints...`}</Text>
              <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Image
                src={"images/img_001a.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="001A"
              />
              <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`A- Level`}</Text>
              <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 6 requires an organisation to have a system to resolve complaints...`}</Text>
              <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
            </Column>
          </Grid>
          <Column className="items-start justify-start lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]">
            <Text className="font-normal lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Other Courses For High School`}</Text>
            <Column className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
              <Row className="items-center justify-start lg:px-[62px] xl:px-[71px] px-[80px] 3xl:px-[96px] w-[100%]">
                <Stack className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] w-[58%]">
                  <div className="absolute bg-transparent border-0 inset-[0] m-[0] w-[100%] input-wrap">
                    <div className="input-wrap">
                      <Image
                        src={"images/img_vector.svg"}
                        className="absolute z-[1] right-[98.01001px] bg-transparent border-0 my-[auto] inset-y-[0]"
                        alt="Vector"
                      />
                      <Input
                        className="placeholder:bg-transparent bg-white_A700 border-0 font-medium font-metropolis lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:pr-[183px] xl:pr-[209px] pr-[236.04000999999997px] 2xl:pr-[236px] 3xl:pr-[283px] lg:py-[18px] xl:py-[20px] py-[23.38px] 2xl:py-[23px] 3xl:py-[28px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_700_99 text-gray_700_99 text-left w-[100%]"
                        name="Serach Class, C"
                        placeholder={`Serach Class, Course`}
                      ></Input>
                    </div>
                  </div>
                  <Button className="absolute bg-deep_purple_A200 font-inter font-medium h-[max-content] inset-y-[0] my-[auto] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] right-[1%] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[17%]">{`Search`}</Button>
                </Stack>
                <Text className="bg-white_A700 font-medium leading-[normal] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700_99 text-left w-[28%]">
                  <span className="text-gray_700_99 font-metropolis">
                    <>{`Sort by: `}</>
                  </span>
                  <span className="text-gray_900 font-metropolis">
                    <>{`Latest`}</>
                  </span>
                </Text>
              </Row>
              <Grid className="lg:gap-[31px] xl:gap-[35px] gap-[40px] 3xl:gap-[48px] grid grid-cols-2 lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] w-[89%]">
                <Row className="bg-white_A700 hover:cursor-pointer items-end justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Image
                    src={"images/img_image_11.png"}
                    className="h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] object-contain rounded-radius5 w-[26%]"
                    alt="Image"
                  />
                  <Column className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[42%]">
                    <Text className="font-normal lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[auto]">{`The Three Musketeers`}</Text>
                    <Image
                      src={"images/img_star_5.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[43%]"
                      alt="star"
                    />
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-left w-[auto]">{`$40.00`}</Text>
                  </Column>
                  <Image
                    src={"images/img_icon_9.svg"}
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                    alt="icon"
                  />
                </Row>
                <Row className="bg-white_A700 hover:cursor-pointer items-end justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Image
                    src={"images/img_image_12.png"}
                    className="h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] object-contain rounded-radius5 w-[26%]"
                    alt="Image"
                  />
                  <Column className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[42%]">
                    <Text className="font-normal lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[auto]">{`The Three Musketeers`}</Text>
                    <Image
                      src={"images/img_star_6.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[43%]"
                      alt="star"
                    />
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-left w-[auto]">{`$40.00`}</Text>
                  </Column>
                  <Image
                    src={"images/img_icon_10.svg"}
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                    alt="icon"
                  />
                </Row>
                <Row className="bg-white_A700 hover:cursor-pointer items-end justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Image
                    src={"images/img_image_13.png"}
                    className="h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] object-contain rounded-radius5 w-[26%]"
                    alt="Image"
                  />
                  <Column className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[42%]">
                    <Text className="font-normal lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[auto]">{`The Three Musketeers`}</Text>
                    <Image
                      src={"images/img_star_7.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[43%]"
                      alt="star"
                    />
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-left w-[auto]">{`$40.00`}</Text>
                  </Column>
                  <Image
                    src={"images/img_icon_11.svg"}
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                    alt="icon"
                  />
                </Row>
                <Row className="bg-white_A700 hover:cursor-pointer items-end justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Image
                    src={"images/img_image_14.png"}
                    className="h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] object-contain rounded-radius5 w-[26%]"
                    alt="Image"
                  />
                  <Column className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[42%]">
                    <Text className="font-normal lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[auto]">{`The Three Musketeers`}</Text>
                    <Image
                      src={"images/img_star_8.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[43%]"
                      alt="star"
                    />
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-left w-[auto]">{`$40.00`}</Text>
                  </Column>
                  <Image
                    src={"images/img_icon_12.svg"}
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                    alt="icon"
                  />
                </Row>
                <Row className="bg-white_A700 hover:cursor-pointer items-end justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Image
                    src={"images/img_image_15.png"}
                    className="h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] object-contain rounded-radius5 w-[26%]"
                    alt="Image"
                  />
                  <Column className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[42%]">
                    <Text className="font-normal lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[auto]">{`The Three Musketeers`}</Text>
                    <Image
                      src={"images/img_star_9.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[43%]"
                      alt="star"
                    />
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-left w-[auto]">{`$40.00`}</Text>
                  </Column>
                  <Image
                    src={"images/img_icon_13.svg"}
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                    alt="icon"
                  />
                </Row>
                <Row className="bg-white_A700 hover:cursor-pointer items-end justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Image
                    src={"images/img_image_16.png"}
                    className="h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] object-contain rounded-radius5 w-[26%]"
                    alt="Image"
                  />
                  <Column className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[42%]">
                    <Text className="font-normal lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[auto]">{`The Three Musketeers`}</Text>
                    <Image
                      src={"images/img_star_10.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[43%]"
                      alt="star"
                    />
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-left w-[auto]">{`$40.00`}</Text>
                  </Column>
                  <Image
                    src={"images/img_icon_14.svg"}
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                    alt="icon"
                  />
                </Row>
                <Row className="bg-white_A700 hover:cursor-pointer items-end justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Image
                    src={"images/img_image_17.png"}
                    className="h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] object-contain rounded-radius5 w-[26%]"
                    alt="Image"
                  />
                  <Column className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[42%]">
                    <Text className="font-normal lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[auto]">{`The Three Musketeers`}</Text>
                    <Image
                      src={"images/img_star_11.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[43%]"
                      alt="star"
                    />
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-left w-[auto]">{`$40.00`}</Text>
                  </Column>
                  <Image
                    src={"images/img_icon_15.svg"}
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                    alt="icon"
                  />
                </Row>
                <Row className="bg-white_A700 hover:cursor-pointer items-end justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Image
                    src={"images/img_image_18.png"}
                    className="h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] object-contain rounded-radius5 w-[26%]"
                    alt="Image"
                  />
                  <Column className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[42%]">
                    <Text className="font-normal lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[auto]">{`The Three Musketeers`}</Text>
                    <Image
                      src={"images/img_star_12.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[43%]"
                      alt="star"
                    />
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-left w-[auto]">{`$40.00`}</Text>
                  </Column>
                  <Image
                    src={"images/img_icon_16.svg"}
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                    alt="icon"
                  />
                </Row>
                <Row className="bg-white_A700 hover:cursor-pointer items-end justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Image
                    src={"images/img_image_19.png"}
                    className="h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] object-contain rounded-radius5 w-[26%]"
                    alt="Image"
                  />
                  <Column className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[42%]">
                    <Text className="font-normal lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[auto]">{`The Three Musketeers`}</Text>
                    <Image
                      src={"images/img_star_13.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[43%]"
                      alt="star"
                    />
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-left w-[auto]">{`$40.00`}</Text>
                  </Column>
                  <Image
                    src={"images/img_icon_17.svg"}
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                    alt="icon"
                  />
                </Row>
                <Row className="bg-white_A700 hover:cursor-pointer items-end justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Image
                    src={"images/img_image_20.png"}
                    className="h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] object-contain rounded-radius5 w-[26%]"
                    alt="Image"
                  />
                  <Column className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[42%]">
                    <Text className="font-normal lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[auto]">{`The Three Musketeers`}</Text>
                    <Image
                      src={"images/img_star_14.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[43%]"
                      alt="star"
                    />
                    <Text className="font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_orange_400 text-left w-[auto]">{`$40.00`}</Text>
                  </Column>
                  <Image
                    src={"images/img_icon_18.svg"}
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                    alt="icon"
                  />
                </Row>
              </Grid>
              <Row className="items-center justify-center lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] mx-[auto] w-[19%]">
                <Image
                  src={"images/img_previous.svg"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                  alt="previous"
                />
                <Row className="items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] w-[54%]">
                  <Text className="font-medium lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Page`}</Text>
                  <Button className="bg-white_A700 font-medium lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:py-[11px] xl:py-[12px] py-[14.54px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius8 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 text-center lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]">{`1`}</Button>
                  <Text className="font-medium lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`of 13`}</Text>
                </Row>
                <Image
                  src={"images/img_next.svg"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                  alt="Next"
                />
              </Row>
            </Column>
          </Column>
          <Stack className="bg-gray_900 lg:h-[229px] xl:h-[262px] h-[294px] 2xl:h-[295px] 3xl:h-[354px] lg:mt-[125px] xl:mt-[143px] mt-[161px] 3xl:mt-[193px] mx-[auto] rounded-radius20 w-[82%]">
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
                  src={"images/img_ellipse168_4.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                  alt="Ellipse168"
                />
                <Image
                  src={"images/img_ellipse166_4.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rounded-radius50 w-[60px]"
                  alt="Ellipse166"
                />
              </Row>
              <Row className="lg:gap-[626px] xl:gap-[717px] gap-[806px] 3xl:gap-[967px] grid grid-cols-2 items-start justify-between lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[100%]">
                <Image
                  src={"images/img_ellipse167_4.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                  alt="Ellipse167"
                />
                <Image
                  src={"images/img_ellipse167_5.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] object-contain rounded-radius50 w-[60px]"
                  alt="Ellipse167"
                />
              </Row>
              <Row className="gap-[1030px] 3xl:gap-[1236px] lg:gap-[801px] xl:gap-[916px] grid grid-cols-2 items-center justify-between lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[100%]">
                <Image
                  src={"images/img_ellipse166_5.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                  alt="Ellipse166"
                />
                <Image
                  src={"images/img_ellipse168_5.png"}
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
                    src={"images/img_icon_19.svg"}
                    className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain w-[22%]"
                    alt="icon"
                  />
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Eduvi`}</Text>
                </Row>
                <Image
                  src={"images/img_social_2.svg"}
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

export default EduviCoursesPage;
