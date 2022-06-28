import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Image, Text, List, Stack, Button } from "components";

const EduviJoinAsTeacherPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/eduvi");
  }

  return (
    <>
      <Column className="bg-gray_100 font-metropolis mx-[auto] lg:pb-[49px] xl:pb-[56px] pb-[63px] 3xl:pb-[75px] lg:pt-[23px] xl:pt-[26px] pt-[30px] 3xl:pt-[36px] w-[100%]">
        <Column className="items-center lg:px-[62px] xl:px-[71px] px-[80px] 3xl:px-[96px] w-[100%]">
          <header className="mx-[auto] w-[89%]">
            <Row className="items-start justify-start w-[100%]">
              <Image
                src={"images/img_icon_45.svg"}
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
                  src={"images/img_shoppingbag_7.svg"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                  alt="shoppingbag"
                />
              </Row>
              <Row className="items-center justify-between lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] w-[10%]">
                <Text className="cursor-pointer font-medium hover:font-normal lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`My Account`}</Text>
                <Image
                  src={"images/img_profile24_7.svg"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                  alt="profile24"
                />
              </Row>
            </Row>
          </header>
          <Row className="bg-deep_purple_52 items-start justify-between lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:pr-[149px] xl:pr-[170px] pr-[192px] 3xl:pr-[230px] lg:pt-[15px] xl:pt-[17px] pt-[20px] 3xl:pt-[24px] rounded-radius20 w-[89%]">
            <Column className="items-start justify-end w-[41%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_66 text-left tracking-ls1 w-[auto]">
                <span className="text-gray_900_66 font-metropolis">
                  <>{`Home | `}</>
                </span>
                <span className="text-deep_purple_A200 font-metropolis">
                  <>{`Become An Instructor`}</>
                </span>
              </Text>
              <Column className="items-end lg:mt-[38px] xl:mt-[43px] mt-[49px] 3xl:mt-[58px] lg:pl-[187px] xl:pl-[214px] pl-[241px] 3xl:pl-[289px] w-[100%]">
                <Text className="font-normal lg:leading-[38px] xl:leading-[44px] leading-[50.00px] 2xl:leading-[50px] 3xl:leading-[60px] lg:text-[35px] xl:text-[40px] text-[45px] 3xl:text-[54px] text-gray_900 text-left w-[55%]">
                  {
                    <>
                      {`Join Eduvi as`}
                      <br />
                      {`a Mentor`}
                    </>
                  }
                </Text>
                <List
                  className="font-airbnbcerealapp gap-[0] min-h-[auto] lg:mr-[10px] xl:mr-[11px] mr-[13px] 3xl:mr-[15px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] rounded-radius20 w-[26%]"
                  orientation="vertical"
                >
                  <Row className="gap-[10.000006px] 2xl:gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
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
                  <Row className="gap-[10.000006px] 2xl:gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
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
                  <Row className="gap-[10.000006px] 2xl:gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
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
                  <Row className="gap-[10.000006px] 2xl:gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
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
                  <Row className="gap-[10.000006px] 2xl:gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
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
                  <Row className="gap-[10.000006px] 2xl:gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
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
                  <Row className="gap-[10.000006px] 2xl:gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-10 items-center justify-between lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[100%]">
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
            </Column>
            <Image
              src={"images/img_46300601.svg"}
              className="lg:h-[170px] xl:h-[194px] h-[218px] 2xl:h-[219px] 3xl:h-[262px] lg:ml-[162px] xl:ml-[185px] ml-[209px] 3xl:ml-[250px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] object-contain w-[25%]"
              alt="46300601"
            />
          </Row>
          <Row className="items-center justify-start lg:mt-[54px] xl:mt-[62px] mt-[70px] 3xl:mt-[84px] mx-[auto] w-[82%]">
            <Stack className="bg-deep_orange_50 lg:h-[483px] xl:h-[552px] h-[620px] 2xl:h-[621px] 3xl:h-[745px] lg:pl-[32px] xl:pl-[37px] pl-[42px] 3xl:pl-[50px] lg:pr-[19px] xl:pr-[22px] pr-[25px] 3xl:pr-[30px] lg:pt-[27px] xl:pt-[31px] pt-[35px] 3xl:pt-[42px] rounded-radius15 w-[43%]">
              <Image
                src={"images/img_frontviewmale_4.png"}
                className="absolute bottom-[0] lg:h-[455px] xl:h-[521px] h-[585px] 2xl:h-[586px] 3xl:h-[703px] inset-x-[0] mx-[auto] object-contain w-[87%]"
                alt="frontviewmale"
              />
            </Stack>
            <Column className="items-start xl:mb-[59px] mb-[67px] 3xl:mb-[80px] lg:ml-[46px] xl:ml-[53px] ml-[60px] 3xl:ml-[72px] xl:mt-[60px] mt-[68px] 3xl:mt-[81px] lg:my-[52px] w-[52%]">
              <Text className="font-metropolis font-normal lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Apply As Instructor`}</Text>
              <Text className="font-metropolis font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[100%]">{`Teaching is a vital and admirable career. As such, it comes with quite a bit of responsibility, both in practice and in preparation with many skills required to be a teacher. The following steps provide a general breakdown of the requirements for teachers:`}</Text>
              <Column className="font-inter lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[100%]">
                <Row className="items-center justify-start lg:pr-[206px] xl:pr-[235px] pr-[265px] 3xl:pr-[318px] w-[100%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-deep_orange_400 text-left w-[auto]">{`Intstructor Requirements`}</Text>
                  <Text className="font-medium lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Instructor Rules`}</Text>
                </Row>
              </Column>
              <div
                className="h-[1px] 3xl:h-[2px] 2xl:h-[2px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] overflow-hidden relative rounded-radius50 shadow-bs2 w-[56%]"
                name="Group52"
              >
                <div className="w-full h-full absolute bg-gray_700"></div>
                <div
                  className="h-full absolute bg-deep_orange_400"
                  style={{ width: "56%" }}
                ></div>
              </div>
              <Column className="font-metropolis items-start justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[46%]">
                <Row className="items-center justify-start w-[79%]">
                  <div className="bg-deep_orange_400 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] rounded-radius50 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`An undergraduate degree`}</Text>
                </Row>
                <Column className="mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Row className="items-center justify-start w-[100%]">
                    <div className="bg-deep_orange_400 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] rounded-radius50 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                    <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Participate in supervised teaching`}</Text>
                  </Row>
                </Column>
                <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[67%]">
                  <div className="bg-deep_orange_400 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] rounded-radius50 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`State teaching license`}</Text>
                </Row>
                <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[71%]">
                  <div className="bg-deep_orange_400 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] rounded-radius50 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Purse graduate studies`}</Text>
                </Row>
              </Column>
              <Button className="bg-deep_purple_A200 font-inter font-medium lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:py-[14px] xl:py-[16px] py-[19px] 3xl:py-[22px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[24%]">{`Apply Now`}</Button>
            </Column>
          </Row>
        </Column>
        <Column className="items-end mt-[108px] 3xl:mt-[129px] lg:mt-[84px] xl:mt-[96px] lg:pl-[147px] xl:pl-[169px] pl-[190px] 3xl:pl-[228px] 3xl:pr-[110px] lg:pr-[71px] xl:pr-[81px] pr-[92px] w-[100%]">
          <Stack className="lg:h-[566px] xl:h-[647px] h-[727px] 2xl:h-[728px] 3xl:h-[873px] w-[80%]">
            <Stack className="absolute font-airbnbcerealapp lg:h-[566px] xl:h-[647px] h-[727px] 2xl:h-[728px] 3xl:h-[873px] inset-[0] w-[100%]">
              <List
                className="absolute gap-[0] min-h-[auto] right-[0] top-[0] w-[16%]"
                orientation="vertical"
              >
                <Row className="lg:gap-[11px] xl:gap-[13px] gap-[14.999975px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-10 items-center justify-between lg:my-[5px] xl:my-[6px] my-[7.5px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
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
                <Row className="lg:gap-[11px] xl:gap-[13px] gap-[14.999975px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-10 items-center justify-between lg:my-[5px] xl:my-[6px] my-[7.5px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
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
                <Row className="lg:gap-[11px] xl:gap-[13px] gap-[14.999975px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-10 items-center justify-between lg:my-[5px] xl:my-[6px] my-[7.5px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
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
                <Row className="lg:gap-[11px] xl:gap-[13px] gap-[14.999975px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-10 items-center justify-between lg:my-[5px] xl:my-[6px] my-[7.5px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
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
                <Row className="lg:gap-[11px] xl:gap-[13px] gap-[14.999975px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-10 items-center justify-between lg:my-[5px] xl:my-[6px] my-[7.5px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
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
                <Row className="lg:gap-[11px] xl:gap-[13px] gap-[14.999975px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-10 items-center justify-between lg:my-[5px] xl:my-[6px] my-[7.5px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
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
                <Row className="lg:gap-[11px] xl:gap-[13px] gap-[14.999975px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-10 items-center justify-between lg:my-[5px] xl:my-[6px] my-[7.5px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
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
                <Row className="lg:gap-[11px] xl:gap-[13px] gap-[14.999975px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-10 items-center justify-between lg:my-[5px] xl:my-[6px] my-[7.5px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
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
                <Row className="lg:gap-[11px] xl:gap-[13px] gap-[14.999975px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-10 items-center justify-between lg:my-[5px] xl:my-[6px] my-[7.5px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
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
                <Row className="lg:gap-[11px] xl:gap-[13px] gap-[14.999975px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-10 items-center justify-between lg:my-[5px] xl:my-[6px] my-[7.5px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
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
              <Column className="absolute bg-white_A700 bottom-[0] items-center justify-start left-[0] lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px] rounded-radius20 shadow-bs3 w-[92%]">
                <Stack className="bg-indigo_51 lg:h-[444px] xl:h-[508px] h-[570px] 2xl:h-[571px] 3xl:h-[685px] mx-[auto] lg:pt-[25px] xl:pt-[29px] pt-[33px] 3xl:pt-[39px] rounded-radius20 w-[97%]">
                  <Image
                    src={"images/img_vector_6.svg"}
                    className="absolute h-[101px] 2xl:h-[102px] 3xl:h-[122px] lg:h-[79px] xl:h-[90px] left-[16%] object-contain top-[20%] w-[16%]"
                    alt="Vector"
                  />
                  <Text className="absolute font-medium lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] left-[19%] rotate-[-180deg] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-left text-white_A700 top-[23%] w-[10%]">
                    {
                      <>
                        {`3 Simple`}
                        <br />
                        {`Steps to go`}
                      </>
                    }
                  </Text>
                  <Image
                    src={"images/img_youngblackhair.png"}
                    className="absolute bottom-[0] lg:h-[418px] xl:h-[478px] h-[537px] 2xl:h-[538px] 3xl:h-[645px] inset-x-[0] mx-[auto] object-contain w-[56%]"
                    alt="youngblackhair"
                  />
                  <Image
                    src={"images/img_46300601_1.svg"}
                    className="absolute bottom-[26%] xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] left-[31%] object-contain w-[17%]"
                    alt="46300601"
                  />
                  <Stack className="absolute bg-black_900_33 bottom-[0] lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:px-[346px] xl:px-[395px] px-[445px] 3xl:px-[534px] lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Image
                      src={"images/img_controls.svg"}
                      className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-[0] justify-center m-[auto] object-contain w-[14%]"
                      alt="controls"
                    />
                  </Stack>
                  <Image
                    src={"images/img_progressbar.svg"}
                    className="absolute bottom-[10%] h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] left-[0] object-contain w-[34%]"
                    alt="Progressbar"
                  />
                </Stack>
              </Column>
            </Stack>
            <Text className="absolute font-bold font-metropolis left-[14%] lg:text-[35px] xl:text-[40px] text-[45px] 3xl:text-[54px] text-center text-gray_900 top-[2%] w-[auto]">{`How to apply to join as instructor`}</Text>
          </Stack>
        </Column>
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
                  src={"images/img_ellipse168_14.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                  alt="Ellipse168"
                />
                <Image
                  src={"images/img_ellipse166_14.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rounded-radius50 w-[60px]"
                  alt="Ellipse166"
                />
              </Row>
              <Row className="lg:gap-[626px] xl:gap-[717px] gap-[806px] 3xl:gap-[967px] grid grid-cols-2 items-start justify-between lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[100%]">
                <Image
                  src={"images/img_ellipse167_14.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                  alt="Ellipse167"
                />
                <Image
                  src={"images/img_ellipse167_15.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] object-contain rounded-radius50 w-[60px]"
                  alt="Ellipse167"
                />
              </Row>
              <Row className="gap-[1030px] 3xl:gap-[1236px] lg:gap-[801px] xl:gap-[916px] grid grid-cols-2 items-center justify-between lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[100%]">
                <Image
                  src={"images/img_ellipse166_15.png"}
                  className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                  alt="Ellipse166"
                />
                <Image
                  src={"images/img_ellipse168_15.png"}
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
                    src={"images/img_icon_46.svg"}
                    className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain w-[22%]"
                    alt="icon"
                  />
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Eduvi`}</Text>
                </Row>
                <Image
                  src={"images/img_social_9.svg"}
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

export default EduviJoinAsTeacherPage;
