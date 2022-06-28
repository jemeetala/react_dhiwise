import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Stack,
  Image,
  Row,
  Button,
  Text,
  Line,
  Input,
  List,
  Grid,
} from "components";

const EduvifirstPage = () => {
  const navigate = useNavigate();

  function handleNavigate7() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate8() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate9() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate10() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate12() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate13() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate14() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate15() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate17() {
    navigate("/eduvicourses");
  }
  function handleNavigate18() {
    navigate("/eduvi");
  }
  function handleNavigate19() {
    navigate("/eduvicourses");
  }
  function handleNavigate20() {
    navigate("/eduvicourses");
  }

  return (
    <>
      <Column className="bg-gray_100 items-center justify-start mx-[auto] lg:pb-[49px] xl:pb-[56px] pb-[63px] 3xl:pb-[75px] w-[100%]">
        <Stack className="font-metropolis 3xl:h-[1001px] lg:h-[648px] xl:h-[742px] h-[833px] 2xl:h-[834px] w-[100%]">
          <Image
            src={"images/img_bg_4.svg"}
            className="absolute 3xl:h-[1001px] lg:h-[648px] xl:h-[742px] h-[833px] 2xl:h-[834px] inset-[0] object-cover w-[100%]"
            alt="BG"
          />
          <Stack className="absolute bottom-[0] lg:h-[544px] xl:h-[622px] h-[699px] 2xl:h-[700px] 3xl:h-[840px] right-[3%] w-[46%]">
            <Image
              src={"images/img_vector1_2.svg"}
              className="absolute lg:h-[439px] xl:h-[502px] h-[563.5px] 2xl:h-[564px] 3xl:h-[677px] inset-x-[0] mx-[auto] object-contain top-[6%] w-[89%]"
              alt="Vector1"
            />
            <Row className="absolute items-start justify-between left-[0] w-[94%]">
              <Image
                src={"images/img_4_6.svg"}
                className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] lg:mb-[481px] xl:mb-[550px] mb-[619px] 3xl:mb-[743px] object-contain lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
                alt="4"
              />
              <Stack className="lg:h-[521px] xl:h-[596px] h-[669px] 2xl:h-[670px] 3xl:h-[804px] lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[82%]">
                <Image
                  src={"images/img_bg_5.png"}
                  className="absolute lg:h-[521px] xl:h-[596px] h-[669px] 2xl:h-[670px] 3xl:h-[804px] inset-[0] object-cover rounded-radius30 w-[100%]"
                  alt="BG"
                />
                <Image
                  src={"images/img_schoolboyhold_2.png"}
                  className="absolute lg:h-[521px] xl:h-[596px] h-[669px] 2xl:h-[670px] 3xl:h-[804px] inset-x-[10%] inset-y-[0] object-contain w-[81%]"
                  alt="schoolboyhold"
                />
              </Stack>
            </Row>
            <Image
              src={"images/img_4_7.svg"}
              className="absolute lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] inset-y-[0] left-[11%] my-[auto] object-contain lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
              alt="4"
            />
            <Image
              src={"images/img_3_2.svg"}
              className="absolute lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] object-contain right-[13%] top-[8%] lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
              alt="3"
            />
            <Image
              src={"images/img_1_2.svg"}
              className="absolute bottom-[9%] lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] object-contain right-[0] lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
              alt="1"
            />
          </Stack>
          <Column className="absolute bottom-[16%] items-start justify-start left-[6%] w-[42%]">
            <Button className="bg-white_A700 font-medium lg:py-[13px] xl:py-[14px] py-[16.72px] 2xl:py-[16px] 3xl:py-[20px] rounded-radius10 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-center text-deep_orange_400 w-[39%]">{`Never Stop Learning`}</Button>
            <Text className="font-bold lg:leading-[58px] xl:leading-[66px] leading-[75.00px] 2xl:leading-[75px] 3xl:leading-[90px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[50px] xl:text-[57px] text-[65px] 3xl:text-[78px] text-gray_900 text-left w-[100%]">
              {
                <>
                  {`Grow up your skills`}
                  <br />
                  {`by online courses`}
                  <br />
                  {`with Eduvi`}
                </>
              }
            </Text>
            <Text className="font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[100%]">{`Eduvi is a Global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree.`}</Text>
            <Column className="lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
              <Row className="bg-white_A700 items-center justify-end lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] py-[5px] 3xl:py-[6px] rounded-radius10 w-[100%]">
                <Text className="font-medium lg:my-[13px] xl:my-[15px] my-[17px] 3xl:my-[20px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700_99 text-right w-[auto]">{`Kindergarten`}</Text>
                <Line className="bg-bluegray_100 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[35px] xl:ml-[40px] ml-[46px] 3xl:ml-[55px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[1px]" />
                <Text className="font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:my-[13px] xl:my-[15px] my-[17px] 3xl:my-[20px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700_99 text-left w-[auto]">{`Class/Course`}</Text>
                <Row
                  className="common-pointer bg-deep_purple_A200 font-inter items-center justify-center lg:ml-[130px] xl:ml-[149px] ml-[168px] 3xl:ml-[201px] lg:px-[23px] xl:px-[26px] px-[30px] 3xl:px-[36px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] rounded-radius10 w-[24%]"
                  onClick={handleNavigate19}
                >
                  <Image
                    src={"images/img_magnifier24_2.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Magnifier24"
                  />
                  <Text className="font-medium lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] xl:my-[1px] lg:my-[1px] my-[2px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[auto]">{`Search`}</Text>
                </Row>
              </Row>
            </Column>
          </Column>
          <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[4%] w-[89%]">
            <Column className="w-[100%]">
              <Row className="items-center justify-start w-[100%]">
                <Image
                  src={"images/img_icon_32.svg"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] object-contain w-[2%]"
                  alt="icon"
                />
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Eduvi`}</Text>
                <header className="ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] w-[83%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Row className="items-center justify-between lg:my-[13px] xl:my-[15px] my-[17px] 3xl:my-[20px] w-[64%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Shop`}</Text>
                      <Row className="items-center justify-between lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] w-[88%]">
                        <Text className="cursor-pointer hover:font-medium font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`For Kindergarten`}</Text>
                        <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`For High School`}</Text>
                        <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`For College`}</Text>
                        <Text
                          className="common-pointer cursor-pointer hover:font-medium font-medium lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]"
                          onClick={handleNavigate17}
                        >{`Courses`}</Text>
                      </Row>
                    </Row>
                    <Row
                      className="common-pointer items-center justify-between lg:ml-[154px] xl:ml-[176px] ml-[198px] 3xl:ml-[237px] w-[17%]"
                      onClick={handleNavigate18}
                    >
                      <Text className="font-medium my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[auto]">{`Log in`}</Text>
                      <Button className="bg-deep_purple_A200 font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[60%]">{`Sign Up`}</Button>
                    </Row>
                  </Row>
                </header>
              </Row>
            </Column>
            <Input
              className="bg-blue_50 placeholder:bg-transparent border-0 font-medium lg:mt-[39px] xl:mt-[45px] mt-[51px] 3xl:mt-[61px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] xl:py-[10px] py-[11.38px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_900_66 text-gray_900_66 text-left tracking-ls1 w-[16%]"
              name="Breadcrumbs"
              placeholder={`Home | Our Mentors`}
            ></Input>
          </Column>
        </Stack>
        <Stack className="font-airbnbcerealapp 3xl:h-[1177px] lg:h-[763px] xl:h-[872px] h-[980px] 2xl:h-[981px] lg:mt-[116px] xl:mt-[133px] mt-[150px] 3xl:mt-[180px] mx-[auto] w-[79%]">
          <Stack className="absolute bottom-[0] lg:h-[545px] xl:h-[623px] h-[700px] 2xl:h-[701px] 3xl:h-[841px] w-[100%]">
            <List
              className="absolute gap-[0] min-h-[auto] right-[0] top-[0] w-[16%]"
              orientation="vertical"
            >
              <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
              </Row>
              <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
              </Row>
              <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
              </Row>
              <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
              </Row>
              <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
              </Row>
              <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
              </Row>
              <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
              </Row>
              <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
              </Row>
              <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
              </Row>
              <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_orange_400 w-[100%]">{`+`}</Text>
              </Row>
            </List>
            <Stack className="absolute bg-white_A700 bottom-[0] lg:h-[467px] xl:h-[534px] h-[600px] 2xl:h-[601px] 3xl:h-[721px] left-[0] lg:p-[23px] xl:p-[26px] p-[30px] 3xl:p-[36px] rounded-radius20 shadow-bs3 w-[93%]">
              <Image
                src={"images/img_pexelsvanessa_3.png"}
                className="absolute lg:h-[420px] xl:h-[481px] h-[540px] 2xl:h-[541px] 3xl:h-[649px] inset-[0] justify-center m-[auto] object-contain rounded-radius20 w-[94%]"
                alt="pexelsvanessa"
              />
              <Row className="absolute bottom-[4%] inset-x-[0] items-start justify-start mx-[auto] w-[89%]">
                <Stack className="bg-white_A700 lg:h-[168px] xl:h-[193px] h-[216px] 2xl:h-[217px] 3xl:h-[260px] p-[10.8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[8px] xl:p-[9px] rounded-radius10 shadow-bs4 w-[19%]">
                  <Image
                    src={"images/img_portraitlittle_2.png"}
                    className="absolute lg:h-[152px] xl:h-[173px] h-[194.4px] 2xl:h-[195px] 3xl:h-[234px] inset-[0] justify-center m-[auto] object-contain rounded-radius10 w-[88%]"
                    alt="portraitlittle"
                  />
                </Stack>
                <Image
                  src={"images/img_callbutton_3.svg"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mb-[11px] xl:mb-[13px] mb-[15px] 3xl:mb-[18px] lg:ml-[206px] xl:ml-[235px] ml-[265px] 3xl:ml-[318px] lg:mt-[109px] xl:mt-[125px] mt-[141px] 3xl:mt-[169px] object-contain lg:w-[46px] xl:w-[53px] w-[60px] 3xl:w-[72px]"
                  alt="CallButton"
                />
                <Image
                  src={"images/img_arrow_2.svg"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mb-[11px] xl:mb-[13px] mb-[15px] 3xl:mb-[18px] lg:ml-[295px] xl:ml-[338px] ml-[380px] 3xl:ml-[456px] lg:mt-[109px] xl:mt-[125px] mt-[141px] 3xl:mt-[169px] object-contain lg:w-[46px] xl:w-[53px] w-[60px] 3xl:w-[72px]"
                  alt="arrow"
                />
              </Row>
            </Stack>
          </Stack>
          <Column className="absolute items-center justify-start left-[10%] top-[0] w-[74%]">
            <Text className="font-bold font-metropolis lg:leading-[42px] xl:leading-[48px] leading-[55.00px] 2xl:leading-[55px] 3xl:leading-[66px] mx-[auto] lg:text-[35px] xl:text-[40px] text-[45px] 3xl:text-[54px] text-center text-gray_900 w-[82%]">
              {
                <>
                  {`High quality video, audio`}
                  <br />
                  {`& live classes`}
                </>
              }
            </Text>
            <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[100%]">
              {
                <>
                  {`High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video image with considerably more than`}
                  <br />
                  {`480 vertical scan lines or 576 vertical lines is considered high-definition.`}
                </>
              }
            </Text>
            <Button
              className="common-pointer bg-deep_purple_A200 font-inter font-medium lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[19%]"
              onClick={handleNavigate20}
            >{`Visit Courses`}</Button>
          </Column>
        </Stack>
        <Row className="font-metropolis lg:gap-[23px] xl:gap-[26px] gap-[30.00003px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-3 items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
          <Row className="bg-white_A700 items-center justify-center lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[44px] xl:pr-[50px] pr-[57.33px] 2xl:pr-[57px] 3xl:pr-[68px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 w-[100%]">
            <Image
              src={"images/img_icon_33.svg"}
              className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] object-contain lg:w-[54px] xl:w-[62px] w-[70px] 3xl:w-[84px]"
              alt="icon"
            />
            <Text className="font-normal xl:mb-[20px] mb-[23px] 3xl:mb-[27px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] lg:my-[17px] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-gray_900 text-left w-[auto]">{`Audio Classes`}</Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-center lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[62px] xl:pr-[71px] pr-[80.33px] 2xl:pr-[80px] 3xl:pr-[96px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 w-[100%]">
            <Image
              src={"images/img_icon_34.svg"}
              className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] object-contain lg:w-[54px] xl:w-[62px] w-[70px] 3xl:w-[84px]"
              alt="icon"
            />
            <Text className="font-normal xl:mb-[20px] mb-[23px] 3xl:mb-[27px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] lg:my-[17px] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-gray_900 text-left w-[auto]">{`Live Classes`}</Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-center lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[30px] xl:pr-[34px] pr-[39.33px] 2xl:pr-[39px] 3xl:pr-[47px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 w-[100%]">
            <Image
              src={"images/img_icon_35.svg"}
              className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] object-contain lg:w-[54px] xl:w-[62px] w-[70px] 3xl:w-[84px]"
              alt="icon"
            />
            <Text className="font-normal xl:mb-[20px] mb-[23px] 3xl:mb-[27px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] lg:my-[17px] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-gray_900 text-left w-[auto]">{`Recorded Class`}</Text>
          </Row>
        </Row>
        <Text className="font-bold font-metropolis lg:mt-[116px] xl:mt-[133px] mt-[150px] 3xl:mt-[180px] mx-[auto] lg:text-[35px] xl:text-[40px] text-[45px] 3xl:text-[54px] text-center text-gray_900 w-[auto]">{`Qualified lessons for students`}</Text>
        <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[49%]">{`A lesson or class is a structured period of time where learning is intended to occur. It involves one or more students being taught by a teacher or instructor.`}</Text>
        <Row className="font-inter lg:gap-[15px] xl:gap-[17px] gap-[20px] 3xl:gap-[24px] grid grid-cols-3 items-center justify-center lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] mx-[auto] w-[34%]">
          <Button className="bg-white_A700 font-medium lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[100%]">{`Kindergarten`}</Button>
          <Button className="bg-deep_orange_400 font-medium lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 shadow-bs2 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[100%]">{`High School`}</Button>
          <Button className="bg-white_A700 font-medium lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[100%]">{`College`}</Button>
        </Row>
        <Grid className="lg:gap-[31px] xl:gap-[35px] gap-[40px] 3xl:gap-[48px] grid grid-cols-4 lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] mx-[auto] w-[89%]">
          <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
            <Image
              src={"images/img_0281_3.svg"}
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="0281"
            />
            <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard One`}</Text>
            <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 1 is a foundation Standard that reflects 7 important concepts...`}</Text>
            <Button
              className="common-pointer border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]"
              onClick={handleNavigate15}
            >{`Class Details`}</Button>
          </Column>
          <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
            <Image
              src={"images/img_0292_3.svg"}
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="0292"
            />
            <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Two`}</Text>
            <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 2 builds on the foundations of Standard 1 and includes requirements...`}</Text>
            <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
          </Column>
          <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
            <Image
              src={"images/img_0303_3.svg"}
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="0303"
            />
            <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Three`}</Text>
            <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 3 of the Aged Care Quality Standards applies to all services delivering personal...`}</Text>
            <Button className="bg-deep_purple_A200 font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[56%]">{`Class Details`}</Button>
          </Column>
          <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
            <Image
              src={"images/img_0314_3.svg"}
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="0314"
            />
            <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Four`}</Text>
            <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 4 of the Aged Care Quality Standards focuses on services and supports...`}</Text>
            <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
          </Column>
          <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
            <Image
              src={"images/img_0325_3.svg"}
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="0325"
            />
            <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Five`}</Text>
            <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 5 Learning Resources. Learning Resources ensure that the school has the...`}</Text>
            <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
          </Column>
          <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
            <Image
              src={"images/img_0336_3.svg"}
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="0336"
            />
            <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Six`}</Text>
            <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 6 requires an organisation to have a system to resolve complaints...`}</Text>
            <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
          </Column>
          <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
            <Image
              src={"images/img_0347_3.svg"}
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="0347"
            />
            <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Seven`}</Text>
            <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 7 Blood Management mandates that leaders of health service organisations...`}</Text>
            <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
          </Column>
          <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
            <Image
              src={"images/img_0358_3.svg"}
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="0358"
            />
            <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Eight`}</Text>
            <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 8 Course from NCERT Solutions help students to understand...`}</Text>
            <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
          </Column>
        </Grid>
        <Button className="bg-deep_purple_A200 font-inter font-medium lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] mx-[auto] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[14%]">{`Visit More Classes`}</Button>
        <Row className="bg-deep_purple_51 font-airbnbcerealapp items-center justify-end xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] mx-[auto] lg:pl-[54px] xl:pl-[62px] pl-[70px] 3xl:pl-[84px] lg:pt-[39px] xl:pt-[45px] pt-[51px] 3xl:pt-[61px] rounded-radius20 w-[89%]">
          <Column className="items-start xl:mb-[101px] mb-[114px] 3xl:mb-[136px] lg:mb-[88px] lg:mt-[48px] xl:mt-[55px] mt-[62px] 3xl:mt-[74px] w-[39%]">
            <Button className="bg-indigo_50 font-medium font-metropolis lg:py-[13px] xl:py-[14px] py-[16.72px] 2xl:py-[16px] 3xl:py-[20px] rounded-radius10 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-center text-deep_purple_A200 w-[34%]">{`College Level`}</Button>
            <Column className="font-metropolis lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[100%]">
              <Column className="items-start justify-start w-[100%]">
                <Text className="font-bold lg:leading-[42px] xl:leading-[48px] leading-[55.00px] 2xl:leading-[55px] 3xl:leading-[66px] lg:text-[35px] xl:text-[40px] text-[45px] 3xl:text-[54px] text-gray_900 text-left w-[91%]">
                  {
                    <>
                      {`Don’t waste time in`}
                      <br />
                      {`COVID-19 pandemic.`}
                      <br />
                      {`Develop your skills.`}
                    </>
                  }
                </Text>
                <Text className="font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[100%]">
                  {
                    <>
                      {`High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized`}
                      <br />
                      {`meaning for high-definition, generally any video.`}
                    </>
                  }
                </Text>
              </Column>
            </Column>
            <Button className="bg-deep_purple_A200 font-inter font-medium lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[37%]">{`Registation Now`}</Button>
          </Column>
          <Stack className="lg:h-[480px] xl:h-[548px] h-[616px] 2xl:h-[617px] 3xl:h-[740px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] w-[59%]">
            <Stack className="absolute lg:h-[480px] xl:h-[548px] h-[616px] 2xl:h-[617px] 3xl:h-[740px] inset-[0] w-[100%]">
              <Stack className="absolute lg:h-[480px] xl:h-[548px] h-[616px] 2xl:h-[617px] 3xl:h-[740px] inset-[0] w-[100%]">
                <div className="absolute backdrop-opacity-[0.5] bg-black_900 blur-[100.00px] bottom-[3%] lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-x-[0] mx-[auto] rounded-radius10 w-[98%]"></div>
                <Image
                  src={"images/img_image_23.png"}
                  className="absolute bottom-[0] lg:h-[457px] xl:h-[523px] h-[587px] 2xl:h-[588px] 3xl:h-[705px] left-[0] object-contain rounded-radius20 w-[91%]"
                  alt="Image"
                />
                <Image
                  src={"images/img_6_2.svg"}
                  className="absolute lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain right-[21%] top-[0] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  alt="6"
                />
              </Stack>
              <Row className="absolute lg:gap-[287px] xl:gap-[328px] gap-[369px] 3xl:gap-[443px] grid grid-cols-2 items-start justify-between left-[8%] top-[19%] w-[62%]">
                <Image
                  src={"images/img_4_8.svg"}
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:mb-[22px] xl:mb-[25px] mb-[29px] 3xl:mb-[34px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  alt="4"
                />
                <Image
                  src={"images/img_5_2.svg"}
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  alt="5"
                />
              </Row>
            </Stack>
            <Column className="absolute left-[21%] rounded-radius20 top-[1%] w-[24%]">
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
            </Column>
          </Stack>
        </Row>
        <Row className="items-center justify-start lg:mt-[116px] xl:mt-[133px] mt-[150px] 3xl:mt-[180px] mx-[auto] w-[76%]">
          <Stack className="lg:h-[406px] xl:h-[464px] h-[521px] 2xl:h-[522px] 3xl:h-[626px] w-[47%]">
            <Stack className="absolute bg-gradient  bottom-[0] lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] inset-x-[0] 3xl:pl-[105px] lg:pl-[68px] xl:pl-[78px] pl-[88px] lg:pr-[14px] xl:pr-[16px] pr-[19px] 3xl:pr-[22px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[50%] rounded-tr-[0] top-[2%] lg:w-[396px] xl:w-[453px] w-[510px] 3xl:w-[612px]">
              <Image
                src={"images/img_frontviewmale_2.png"}
                className="absolute lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] object-contain right-[0] rounded-bl-[255px] rounded-br-[255px] rounded-tl-[255px] rounded-tr-[0] w-[79%]"
                alt="frontviewmale"
              />
            </Stack>
            <Image
              src={"images/img_frontviewmale_3.png"}
              className="absolute lg:h-[337px] xl:h-[386px] h-[433px] 2xl:h-[434px] 3xl:h-[520px] object-contain right-[4%] top-[0] w-[79%]"
              alt="frontviewmale"
            />
          </Stack>
          <Column className="items-start lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] lg:my-[56px] xl:my-[64px] my-[73px] 3xl:my-[87px] w-[46%]">
            <Column className="font-metropolis w-[100%]">
              <Column className="items-start justify-start w-[100%]">
                <Text className="font-bold lg:leading-[42px] xl:leading-[48px] leading-[55.00px] 2xl:leading-[55px] 3xl:leading-[66px] lg:text-[35px] xl:text-[40px] text-[45px] 3xl:text-[54px] text-gray_900 text-left w-[87%]">
                  {
                    <>
                      {`Want to share your`}
                      <br />
                      {`knowledge? Join us`}
                      <br />
                      {`a Mentor`}
                    </>
                  }
                </Text>
                <Text className="font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[100%]">{`High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.`}</Text>
              </Column>
            </Column>
            <Button className="bg-deep_purple_A200 font-inter font-medium lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[41%]">{`Career Information`}</Button>
          </Column>
        </Row>
        <Stack className="bg-gray_900 font-metropolis lg:h-[229px] xl:h-[262px] h-[294px] 2xl:h-[295px] 3xl:h-[354px] lg:mt-[148px] xl:mt-[169px] mt-[191px] 3xl:mt-[229px] mx-[auto] rounded-radius20 w-[82%]">
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
                src={"images/img_ellipse168_8.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                alt="Ellipse168"
              />
              <Image
                src={"images/img_ellipse166_8.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rounded-radius50 w-[60px]"
                alt="Ellipse166"
              />
            </Row>
            <Row className="lg:gap-[626px] xl:gap-[717px] gap-[806px] 3xl:gap-[967px] grid grid-cols-2 items-start justify-between lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[100%]">
              <Image
                src={"images/img_ellipse167_8.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                alt="Ellipse167"
              />
              <Image
                src={"images/img_ellipse167_9.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] object-contain rounded-radius50 w-[60px]"
                alt="Ellipse167"
              />
            </Row>
            <Row className="gap-[1030px] 3xl:gap-[1236px] lg:gap-[801px] xl:gap-[916px] grid grid-cols-2 items-center justify-between lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[100%]">
              <Image
                src={"images/img_ellipse166_9.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                alt="Ellipse166"
              />
              <Image
                src={"images/img_ellipse168_9.png"}
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
                  src={"images/img_icon_36.svg"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain w-[22%]"
                  alt="icon"
                />
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Eduvi`}</Text>
              </Row>
              <Image
                src={"images/img_social_5.svg"}
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

export default EduvifirstPage;
