import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Stack,
  Image,
  Input,
  Button,
  Text,
  Row,
  Line,
  List,
} from "components";

const EduviShopPage = () => {
  const navigate = useNavigate();

  function handleNavigate30() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate31() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate32() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate33() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate35() {
    navigate("/eduvicourses");
  }
  function handleNavigate36() {
    navigate("/eduvicourses");
  }
  function handleNavigate37() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate38() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate39() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate40() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate44() {
    navigate("/eduvicourses");
  }

  return (
    <>
      <Column className="bg-gray_100 font-metropolis mx-[auto] w-[100%]">
        <Column className="w-[100%]">
          <Stack className="3xl:h-[1001px] lg:h-[648px] xl:h-[742px] h-[833px] 2xl:h-[834px] w-[100%]">
            <Image
              src={"images/img_bg.svg"}
              className="absolute 3xl:h-[1001px] lg:h-[648px] xl:h-[742px] h-[833px] 2xl:h-[834px] inset-[0] object-cover w-[100%]"
              alt="BG"
            />
            <Stack className="absolute bottom-[0] lg:h-[585px] xl:h-[669px] h-[751.52px] 2xl:h-[753px] 3xl:h-[903px] right-[3%] w-[46%]">
              <Image
                src={"images/img_vector1.svg"}
                className="absolute lg:h-[206px] xl:h-[235px] h-[263.88px] 2xl:h-[265px] 3xl:h-[317px] inset-x-[0] mx-[auto] object-contain top-[0] w-[89%]"
                alt="Vector1"
              />
              <Image
                src={"images/img_bg_1.png"}
                className="absolute bottom-[0] lg:h-[521px] xl:h-[596px] h-[669px] 2xl:h-[670px] 3xl:h-[804px] object-contain right-[6%] rounded-radius30 w-[78%]"
                alt="BG"
              />
              <Image
                src={"images/img_schoolboyhold.png"}
                className="absolute bottom-[0] lg:h-[521px] xl:h-[596px] h-[669px] 2xl:h-[670px] 3xl:h-[804px] object-contain right-[13%] w-[63%]"
                alt="schoolboyhold"
              />
              <Image
                src={"images/img_3.svg"}
                className="absolute lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] object-contain right-[13%] top-[15%] lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
                alt="3"
              />
              <Image
                src={"images/img_4.svg"}
                className="absolute lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] left-[0] object-contain top-[7%] lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
                alt="4"
              />
              <Image
                src={"images/img_1.svg"}
                className="absolute bottom-[9%] lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] object-contain right-[0] lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
                alt="1"
              />
            </Stack>
            <Image
              src={"images/img_4_1.svg"}
              className="absolute bottom-[36%] lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] object-contain right-[39%] lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
              alt="4"
            />
            <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[6%] my-[auto] w-[42%]">
              <Input
                className="bg-blue_50 placeholder:bg-transparent border-0 font-medium lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] xl:py-[10px] py-[11.38px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_900_66 text-gray_900_66 text-left tracking-ls1 w-[35%]"
                name="Home | Our Ment"
                placeholder={`Home | Our Mentors`}
              ></Input>
              <Button className="bg-white_A700 font-medium lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:py-[13px] xl:py-[14px] py-[16.72px] 2xl:py-[16px] 3xl:py-[20px] rounded-radius10 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-center text-deep_orange_400 w-[39%]">{`Never Stop Learning`}</Button>
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
                    onClick={handleNavigate35}
                  >
                    <Image
                      src={"images/img_magnifier24.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="Magnifier24"
                    />
                    <Text className="font-medium lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] xl:my-[1px] lg:my-[1px] my-[2px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[auto]">{`Search`}</Text>
                  </Row>
                </Row>
              </Column>
            </Column>
            <header className="absolute inset-x-[0] mx-[auto] top-[2%] w-[89%]">
              <Row className="items-center justify-start w-[100%]">
                <Stack className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[12px] xl:mt-[14px] mt-[15.95px] 2xl:mt-[15px] 3xl:mt-[19px] w-[9%]">
                  <Text className="absolute font-normal right-[0] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Eduvi`}</Text>
                  <Image
                    src={"images/img_icon_20.svg"}
                    className="absolute lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] left-[0] object-contain w-[22%]"
                    alt="icon"
                  />
                  <Row className="absolute inset-[0] items-center justify-start w-[100%]">
                    <Image
                      src={"images/img_icon_21.svg"}
                      className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain w-[22%]"
                      alt="icon"
                    />
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Eduvi`}</Text>
                  </Row>
                </Stack>
                <Text className="font-medium lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:mt-[17px] xl:mt-[19px] mt-[21.95px] 2xl:mt-[21px] 3xl:mt-[26px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Shop`}</Text>
                <Row className="items-center justify-center lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:mt-[17px] xl:mt-[19px] mt-[21.95px] 2xl:mt-[21px] 3xl:mt-[26px] w-[47%]">
                  <Text className="cursor-pointer hover:font-medium font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`For Kindergarten`}</Text>
                  <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`For High School`}</Text>
                  <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`For College`}</Text>
                  <Text
                    className="common-pointer cursor-pointer hover:font-medium font-medium lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]"
                    onClick={handleNavigate44}
                  >{`Courses`}</Text>
                </Row>
                <Column className="items-start lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] xl:ml-[103px] ml-[116px] 3xl:ml-[139px] lg:ml-[90px] w-[8%]">
                  <Column className="items-end lg:pl-[54px] xl:pl-[62px] pl-[70px] 3xl:pl-[84px] w-[100%]">
                    <Image
                      src={"images/img_shoppingbag_3.svg"}
                      className="lg:h-[11px] xl:h-[13px] h-[14.05px] 2xl:h-[15px] 3xl:h-[17px] object-contain w-[30%]"
                      alt="shoppingbag"
                    />
                  </Column>
                  <Text className="font-medium 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.9px] 2xl:mt-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`Cart (0)`}</Text>
                </Column>
                <Text className="font-medium lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[17px] xl:mt-[20px] mt-[22.95px] 2xl:mt-[22px] 3xl:mt-[27px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`My Account`}</Text>
                <Image
                  src={"images/img_profile24_3.svg"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[12px] xl:mt-[14px] mt-[15.95px] 2xl:mt-[15px] 3xl:mt-[19px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                  alt="profile24"
                />
              </Row>
            </header>
          </Stack>
        </Column>
        <Column className="items-end xl:mt-[107px] mt-[121.37px] 2xl:mt-[121px] 3xl:mt-[145px] lg:mt-[94px] lg:pl-[62px] xl:pl-[71px] pl-[80px] 3xl:pl-[96px] lg:pr-[10px] xl:pr-[12px] pr-[14px] 3xl:pr-[16px] w-[100%]">
          <Stack className="lg:h-[3685px] xl:h-[4215px] h-[4737.63px] 2xl:h-[4741px] 3xl:h-[5689px] w-[93%]">
            <footer className="absolute bottom-[0] left-[0] w-[95%]">
              <Row className="items-start justify-between w-[100%]">
                <Column className="items-start justify-start lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] w-[13%]">
                  <Stack className="lg:h-[2302px] xl:h-[2633px] h-[2959.26px] 2xl:h-[2962px] 3xl:h-[3554px] w-[86%]">
                    <Image
                      src={"images/img_social_3.svg"}
                      className="absolute lg:h-[2302px] xl:h-[2633px] h-[2959.26px] 2xl:h-[2962px] 3xl:h-[3554px] inset-[0] object-cover w-[100%]"
                      alt="social"
                    />
                    <Row className="absolute bottom-[2%] items-center justify-start left-[0] w-[78%]">
                      <Image
                        src={"images/img_icon_22.svg"}
                        className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain w-[22%]"
                        alt="icon"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Eduvi`}</Text>
                    </Row>
                  </Stack>
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
                <Column className="items-start justify-start lg:mb-[28px] xl:mb-[32px] mb-[36px] 3xl:mb-[43px] lg:ml-[105px] xl:ml-[120px] ml-[135px] 3xl:ml-[162px] lg:mt-[2230px] xl:mt-[2551px] mt-[2868.26px] 2xl:mt-[2870px] 3xl:mt-[3443px] w-[15%]">
                  <Text className="font-inter font-normal lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-gray_900 text-left w-[auto]">{`Courses`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Classroom courses`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Virtual classroom courses`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`E-learning courses`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Video Courses`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Offline Courses`}</Text>
                </Column>
                <Column className="items-start justify-start lg:ml-[105px] xl:ml-[120px] ml-[135px] 3xl:ml-[162px] lg:mt-[2230px] xl:mt-[2551px] mt-[2868.26px] 2xl:mt-[2870px] 3xl:mt-[3443px] w-[10%]">
                  <Text className="font-inter font-normal lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-gray_900 text-left w-[auto]">{`Community`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Learners`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Parteners`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Developers`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Transactions`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Blog`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Teaching Center`}</Text>
                </Column>
                <Column className="items-start justify-start lg:ml-[105px] xl:ml-[120px] ml-[135px] 3xl:ml-[162px] lg:mt-[2230px] xl:mt-[2551px] mt-[2868.26px] 2xl:mt-[2870px] 3xl:mt-[3443px] w-[14%]">
                  <Text className="font-inter font-normal lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-gray_900 text-left w-[auto]">{`Quick links`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Home`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Professional Education`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Courses`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Admissions`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Testimonial`}</Text>
                  <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Programs`}</Text>
                </Column>
                <Column className="items-start justify-start lg:ml-[105px] xl:ml-[120px] ml-[135px] 3xl:ml-[162px] lg:mt-[2230px] xl:mt-[2551px] mt-[2868.26px] 2xl:mt-[2870px] 3xl:mt-[3443px] w-[5%]">
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
            <Stack className="absolute font-airbnbcerealapp lg:h-[1937px] xl:h-[2215px] h-[2489.32px] 2xl:h-[2492px] 3xl:h-[2989px] top-[15%] w-[100%]">
              <div className="absolute bg-deep_purple_51 bottom-[0] lg:h-[519px] xl:h-[594px] h-[667px] 2xl:h-[668px] 3xl:h-[801px] left-[0] rounded-radius20 w-[95%]"></div>
              <Stack className="absolute bottom-[0] lg:h-[476px] xl:h-[544px] h-[611px] 2xl:h-[612px] 3xl:h-[734px] right-[0] w-[56%]">
                <div className="absolute backdrop-opacity-[0.5] bg-black_900 blur-[100.00px] bottom-[3%] lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-x-[0] mx-[auto] rounded-radius10 w-[98%]"></div>
                <List
                  className="absolute gap-[0] left-[21%] min-h-[auto] rounded-radius20 top-[0] w-[24%]"
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
                <Image
                  src={"images/img_image_21.png"}
                  className="absolute lg:h-[457px] xl:h-[523px] h-[587px] 2xl:h-[588px] 3xl:h-[705px] inset-y-[0] left-[0] my-[auto] object-contain rounded-radius20 w-[91%]"
                  alt="Image"
                />
              </Stack>
              <Image
                src={"images/img_6.svg"}
                className="absolute lg:h-[1496px] xl:h-[1711px] h-[1923.32px] 2xl:h-[1925px] 3xl:h-[2310px] object-contain right-[12%] top-[0] w-[4%]"
                alt="6"
              />
            </Stack>
            <Row className="absolute items-start justify-start left-[5%] top-[16%] w-[78%]">
              <Column className="items-start justify-start lg:mt-[1462px] xl:mt-[1672px] mt-[1880.06px] 2xl:mt-[1881px] 3xl:mt-[2257px] w-[47%]">
                <Button className="bg-indigo_50 font-medium font-metropolis lg:py-[13px] xl:py-[14px] py-[16.72px] 2xl:py-[16px] 3xl:py-[20px] rounded-radius10 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-center text-deep_purple_A200 w-[34%]">{`College Level`}</Button>
                <Text className="font-bold font-metropolis lg:leading-[42px] xl:leading-[48px] leading-[55.00px] 2xl:leading-[55px] 3xl:leading-[66px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[35px] xl:text-[40px] text-[45px] 3xl:text-[54px] text-gray_900 text-left w-[91%]">
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
                <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[100%]">
                  {
                    <>
                      {`High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized`}
                      <br />
                      {`meaning for high-definition, generally any video.`}
                    </>
                  }
                </Text>
                <Button className="bg-deep_purple_A200 font-inter font-medium lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[37%]">{`Registation Now`}</Button>
              </Column>
              <Image
                src={"images/img_4_2.svg"}
                className="lg:h-[1545px] xl:h-[1767px] h-[1986.06px] 2xl:h-[1988px] 3xl:h-[2385px] lg:mb-[259px] xl:mb-[297px] mb-[334px] 3xl:mb-[401px] 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] ml-[85px] object-contain w-[5%]"
                alt="4"
              />
              <Image
                src={"images/img_5.svg"}
                className="lg:h-[1557px] xl:h-[1781px] h-[2001.48px] 2xl:h-[2003px] 3xl:h-[2404px] lg:mb-[237px] xl:mb-[271px] mb-[305px] 3xl:mb-[366px] lg:ml-[287px] xl:ml-[328px] ml-[369px] 3xl:ml-[443px] lg:mt-[10px] xl:mt-[12px] mt-[13.58px] 2xl:mt-[13px] 3xl:mt-[16px] object-contain w-[5%]"
                alt="5"
              />
            </Row>
            <Column className="absolute font-inter items-center justify-start left-[0] top-[5%] w-[95%]">
              <Stack className="lg:h-[1584px] xl:h-[1812px] h-[2036.1px] 2xl:h-[2038px] 3xl:h-[2445px] w-[100%]">
                <Row className="absolute inset-[0] items-end justify-between w-[100%]">
                  <Column className="items-center justify-start lg:mt-[134px] xl:mt-[153px] mt-[172.8px] 2xl:mt-[172px] 3xl:mt-[207px] pb-[1px] w-[23%]">
                    <Image
                      src={"images/img_0325_1.svg"}
                      className="lg:h-[19px] xl:h-[21px] h-[23.41px] 2xl:h-[24px] 3xl:h-[29px] mx-[auto] object-contain w-[17%]"
                      alt="0325"
                    />
                    <List
                      className="gap-[0] min-h-[auto] xl:mt-[1015px] mt-[1141.88px] 2xl:mt-[1142px] 3xl:mt-[1371px] lg:mt-[888px] w-[100%]"
                      orientation="vertical"
                    >
                      <Column className="bg-white_A700 items-center justify-center lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius15 w-[100%]">
                        <Image
                          src={"images/img_0281_1.svg"}
                          className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                          alt="0281"
                        />
                        <Text className="font-metropolis font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard One`}</Text>
                        <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 1 is a foundation Standard that reflects 7 important concepts...`}</Text>
                        <Button
                          className="common-pointer border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]"
                          onClick={handleNavigate33}
                        >{`Class Details`}</Button>
                      </Column>
                      <Column className="bg-white_A700 items-center justify-center lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] lg:pb-[23px] xl:pb-[26px] pb-[30px] 3xl:pb-[36px] pt-[100px] 3xl:pt-[120px] lg:pt-[77px] xl:pt-[88px] lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] rounded-radius15 w-[100%]">
                        <Text className="font-metropolis font-normal mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Five`}</Text>
                        <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 5 Learning Resources. Learning Resources ensure that the school has the...`}</Text>
                        <Button className="border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]">{`Class Details`}</Button>
                      </Column>
                    </List>
                  </Column>
                  <Stack className="lg:h-[1584px] xl:h-[1812px] h-[2036.1px] 2xl:h-[2038px] 3xl:h-[2445px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] w-[48%]">
                    <Column className="absolute bottom-[0] items-center justify-start pb-[1px] right-[0] w-[47%]">
                      <Image
                        src={"images/img_0347_1.svg"}
                        className="lg:h-[19px] xl:h-[21px] h-[23.41px] 2xl:h-[24px] 3xl:h-[29px] mx-[auto] object-contain w-[17%]"
                        alt="0347"
                      />
                      <Column className="bg-white_A700 items-center justify-center lg:mt-[1175px] xl:mt-[1344px] mt-[1510.88px] 2xl:mt-[1511px] 3xl:mt-[1814px] lg:pb-[23px] xl:pb-[26px] pb-[30px] 3xl:pb-[36px] pt-[100px] 3xl:pt-[120px] lg:pt-[77px] xl:pt-[88px] lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] rounded-radius15 w-[100%]">
                        <Text className="font-metropolis font-normal mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Seven`}</Text>
                        <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 7 Blood Management mandates that leaders of health service organisations...`}</Text>
                        <Button
                          className="common-pointer border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]"
                          onClick={handleNavigate30}
                        >{`Class Details`}</Button>
                      </Column>
                    </Column>
                    <Column className="absolute bottom-[0] items-center justify-start left-[0] pb-[1px] w-[47%]">
                      <Image
                        src={"images/img_0336_1.svg"}
                        className="lg:h-[19px] xl:h-[21px] h-[23.41px] 2xl:h-[24px] 3xl:h-[29px] mx-[auto] object-contain w-[17%]"
                        alt="0336"
                      />
                      <Column className="bg-white_A700 items-center justify-center lg:mt-[1175px] xl:mt-[1344px] mt-[1510.88px] 2xl:mt-[1511px] 3xl:mt-[1814px] lg:pb-[23px] xl:pb-[26px] pb-[30px] 3xl:pb-[36px] pt-[100px] 3xl:pt-[120px] lg:pt-[77px] xl:pt-[88px] lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] rounded-radius15 w-[100%]">
                        <Text className="font-metropolis font-normal mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Six`}</Text>
                        <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 6 requires an organisation to have a system to resolve complaints...`}</Text>
                        <Button
                          className="common-pointer border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]"
                          onClick={handleNavigate31}
                        >{`Class Details`}</Button>
                      </Column>
                    </Column>
                    <List
                      className="absolute lg:gap-[31px] xl:gap-[35px] gap-[40px] 3xl:gap-[48px] grid grid-cols-2 min-h-[auto] top-[0] w-[100%]"
                      orientation="horizontal"
                    >
                      <Column className="items-center justify-start w-[100%]">
                        <Image
                          src={"images/img_0292_1.svg"}
                          className="lg:h-[19px] xl:h-[21px] h-[23.41px] 2xl:h-[24px] 3xl:h-[29px] mx-[auto] object-contain w-[17%]"
                          alt="0292"
                        />
                        <Column className="bg-white_A700 items-center justify-center lg:mt-[1022px] xl:mt-[1169px] mt-[1314.68px] 2xl:mt-[1315px] 3xl:mt-[1578px] lg:pb-[23px] xl:pb-[26px] pb-[30px] 3xl:pb-[36px] pt-[100px] 3xl:pt-[120px] lg:pt-[77px] xl:pt-[88px] lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] rounded-radius15 w-[100%]">
                          <Text className="font-metropolis font-normal mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Two`}</Text>
                          <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 2 builds on the foundations of Standard 1 and includes requirements...`}</Text>
                          <Button
                            className="common-pointer border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]"
                            onClick={handleNavigate39}
                          >{`Class Details`}</Button>
                        </Column>
                      </Column>
                      <Column className="items-center justify-start w-[100%]">
                        <Image
                          src={"images/img_0303_1.svg"}
                          className="lg:h-[19px] xl:h-[21px] h-[23.41px] 2xl:h-[24px] 3xl:h-[29px] mx-[auto] object-contain w-[17%]"
                          alt="0303"
                        />
                        <Column className="bg-white_A700 items-center justify-center lg:mt-[1022px] xl:mt-[1169px] mt-[1314.68px] 2xl:mt-[1315px] 3xl:mt-[1578px] lg:pb-[23px] xl:pb-[26px] pb-[30px] 3xl:pb-[36px] pt-[100px] 3xl:pt-[120px] lg:pt-[77px] xl:pt-[88px] lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] rounded-radius15 shadow-bs w-[100%]">
                          <Text className="font-metropolis font-normal mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Three`}</Text>
                          <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 3 of the Aged Care Quality Standards applies to all services delivering personal...`}</Text>
                          <Button className="bg-deep_purple_A200 font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[56%]">{`Class Details`}</Button>
                        </Column>
                      </Column>
                    </List>
                    <Row className="absolute bottom-[36%] lg:gap-[15px] xl:gap-[17px] gap-[20px] 3xl:gap-[24px] grid grid-cols-3 inset-x-[0] items-center justify-start mx-[auto] w-[80%]">
                      <Button className="bg-white_A700 font-medium lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[100%]">{`Kindergarten`}</Button>
                      <Button className="bg-deep_orange_400 font-medium lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 shadow-bs2 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[100%]">{`High School`}</Button>
                      <Button className="bg-white_A700 font-medium lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[100%]">{`College`}</Button>
                    </Row>
                  </Stack>
                  <Stack className="lg:h-[1584px] xl:h-[1812px] h-[2036.1px] 2xl:h-[2038px] 3xl:h-[2445px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] w-[23%]">
                    <Column className="absolute bottom-[0] items-center justify-start pb-[1px] w-[100%]">
                      <Image
                        src={"images/img_0358_1.svg"}
                        className="lg:h-[19px] xl:h-[21px] h-[23.41px] 2xl:h-[24px] 3xl:h-[29px] mx-[auto] object-contain w-[17%]"
                        alt="0358"
                      />
                      <Column className="bg-white_A700 items-center justify-center lg:mt-[1175px] xl:mt-[1344px] mt-[1510.88px] 2xl:mt-[1511px] 3xl:mt-[1814px] lg:pb-[23px] xl:pb-[26px] pb-[30px] 3xl:pb-[36px] pt-[100px] 3xl:pt-[120px] lg:pt-[77px] xl:pt-[88px] lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] rounded-radius15 w-[100%]">
                        <Text className="font-metropolis font-normal mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Eight`}</Text>
                        <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 8 Course from NCERT Solutions help students to understand...`}</Text>
                        <Button
                          className="common-pointer border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]"
                          onClick={handleNavigate40}
                        >{`Class Details`}</Button>
                      </Column>
                    </Column>
                    <Column className="absolute items-center justify-start top-[0] w-[100%]">
                      <Image
                        src={"images/img_0314_1.svg"}
                        className="lg:h-[19px] xl:h-[21px] h-[23.41px] 2xl:h-[24px] 3xl:h-[29px] mx-[auto] object-contain w-[17%]"
                        alt="0314"
                      />
                      <Column className="bg-white_A700 items-center justify-center lg:mt-[1022px] xl:mt-[1169px] mt-[1314.68px] 2xl:mt-[1315px] 3xl:mt-[1578px] lg:pb-[23px] xl:pb-[26px] pb-[30px] 3xl:pb-[36px] pt-[100px] 3xl:pt-[120px] lg:pt-[77px] xl:pt-[88px] lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] rounded-radius15 w-[100%]">
                        <Text className="font-metropolis font-normal mx-[auto] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-center text-gray_900 w-[auto]">{`Standard Four`}</Text>
                        <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[90%]">{`Standard 4 of the Aged Care Quality Standards focuses on services and supports...`}</Text>
                        <Button
                          className="common-pointer border border-deep_purple_A200 border-solid font-inter font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_A200 w-[56%]"
                          onClick={handleNavigate37}
                        >{`Class Details`}</Button>
                      </Column>
                    </Column>
                  </Stack>
                </Row>
                <Column className="absolute bottom-[42%] font-metropolis inset-x-[0] items-center justify-start mx-[auto] w-[55%]">
                  <Text className="font-bold mx-[auto] lg:text-[35px] xl:text-[40px] text-[45px] 3xl:text-[54px] text-center text-gray_900 w-[auto]">{`Qualified lessons for students`}</Text>
                  <Text className="font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[100%]">{`A lesson or class is a structured period of time where learning is intended to occur. It involves one or more students being taught by a teacher or instructor.`}</Text>
                </Column>
              </Stack>
              <Button className="bg-deep_purple_A200 font-medium lg:mt-[46px] xl:mt-[53px] mt-[59.99px] 2xl:mt-[60px] 3xl:mt-[72px] mx-[auto] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[16%]">{`Visit More Classes`}</Button>
            </Column>
            <Stack className="absolute font-airbnbcerealapp lg:h-[545px] xl:h-[623px] h-[700px] 2xl:h-[701px] 3xl:h-[841px] left-[5%] top-[7%] w-[84%]">
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
                  src={"images/img_pexelsvanessa_1.png"}
                  className="absolute lg:h-[420px] xl:h-[481px] h-[540px] 2xl:h-[541px] 3xl:h-[649px] inset-[0] justify-center m-[auto] object-contain rounded-radius20 w-[94%]"
                  alt="pexelsvanessa"
                />
                <Row className="absolute bottom-[4%] inset-x-[0] items-start justify-start mx-[auto] w-[89%]">
                  <Stack className="bg-white_A700 lg:h-[168px] xl:h-[193px] h-[216px] 2xl:h-[217px] 3xl:h-[260px] p-[10.8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[8px] xl:p-[9px] rounded-radius10 shadow-bs4 w-[19%]">
                    <Image
                      src={"images/img_portraitlittle.png"}
                      className="absolute lg:h-[152px] xl:h-[173px] h-[194.4px] 2xl:h-[195px] 3xl:h-[234px] inset-[0] justify-center m-[auto] object-contain rounded-radius10 w-[88%]"
                      alt="portraitlittle"
                    />
                  </Stack>
                  <Image
                    src={"images/img_callbutton_1.svg"}
                    className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mb-[11px] xl:mb-[13px] mb-[15px] 3xl:mb-[18px] lg:ml-[206px] xl:ml-[235px] ml-[265px] 3xl:ml-[318px] lg:mt-[109px] xl:mt-[125px] mt-[141px] 3xl:mt-[169px] object-contain lg:w-[46px] xl:w-[53px] w-[60px] 3xl:w-[72px]"
                    alt="CallButton"
                  />
                  <Image
                    src={"images/img_arrow.svg"}
                    className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mb-[11px] xl:mb-[13px] mb-[15px] 3xl:mb-[18px] lg:ml-[295px] xl:ml-[338px] ml-[380px] 3xl:ml-[456px] lg:mt-[109px] xl:mt-[125px] mt-[141px] 3xl:mt-[169px] object-contain lg:w-[46px] xl:w-[53px] w-[60px] 3xl:w-[72px]"
                    alt="arrow"
                  />
                </Row>
              </Stack>
            </Stack>
            <Stack className="absolute font-metropolis xl:h-[1022px] h-[1148.63px] 2xl:h-[1150px] 3xl:h-[1380px] lg:h-[894px] inset-x-[0] mx-[auto] top-[0] w-[71%]">
              <Stack className="absolute xl:h-[1022px] h-[1148.63px] 2xl:h-[1150px] 3xl:h-[1380px] lg:h-[894px] inset-[0] w-[100%]">
                <Text className="absolute bg-white_A700 bottom-[0] font-normal leading-[normal] lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] right-[0] rounded-radius10 lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-gray_900 text-left w-[35%]">{`Recorded Class`}</Text>
                <Image
                  src={"images/img_icon_23.svg"}
                  className="absolute xl:h-[1009px] h-[1133.63px] 2xl:h-[1135px] 3xl:h-[1362px] lg:h-[882px] inset-y-[0] my-[auto] object-contain right-[26%] w-[7%]"
                  alt="icon"
                />
                <Column className="absolute items-center justify-start left-[0] top-[2%] w-[88%]">
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
                    onClick={handleNavigate36}
                  >{`Visit Courses`}</Button>
                </Column>
              </Stack>
              <Stack className="absolute xl:h-[1022px] h-[1148.63px] 2xl:h-[1150px] 3xl:h-[1380px] lg:h-[894px] left-[27%] w-[35%]">
                <Text className="absolute bg-white_A700 bottom-[0] font-normal leading-[normal] lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] rounded-radius10 lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-gray_900 text-left w-[100%]">{`Live Classes`}</Text>
                <Image
                  src={"images/img_icon_24.svg"}
                  className="absolute xl:h-[1009px] h-[1133.63px] 2xl:h-[1135px] 3xl:h-[1362px] lg:h-[882px] inset-y-[0] left-[5%] my-[auto] object-contain w-[21%]"
                  alt="icon"
                />
              </Stack>
            </Stack>
            <Row className="absolute bg-white_A700 font-metropolis items-center justify-center left-[5%] lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[44px] xl:pr-[50px] pr-[57.33px] 2xl:pr-[57px] 3xl:pr-[68px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius10 top-[22%] w-[25%]">
              <Image
                src={"images/img_icon_25.svg"}
                className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] object-contain lg:w-[54px] xl:w-[62px] w-[70px] 3xl:w-[84px]"
                alt="icon"
              />
              <Text className="font-normal xl:mb-[20px] mb-[23px] 3xl:mb-[27px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] lg:my-[17px] lg:text-[19px] xl:text-[22px] text-[25px] 3xl:text-[30px] text-gray_900 text-left w-[auto]">{`Audio Classes`}</Text>
            </Row>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default EduviShopPage;
