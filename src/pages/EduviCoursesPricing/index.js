import React from "react";

import { Column, Row, Image, Text, Input, Button, Stack } from "components";
import { useNavigate } from "react-router-dom";

const EduviCoursesPricingPage = () => {
  const navigate = useNavigate();

  function handleNavigate45() {
    navigate("/eduvi");
  }

  return (
    <>
      <Column className="bg-gray_100 font-metropolis items-center justify-start mx-[auto] lg:pb-[49px] xl:pb-[56px] pb-[63px] 3xl:pb-[75px] lg:pt-[23px] xl:pt-[26px] pt-[30px] 3xl:pt-[36px] w-[100%]">
        <header className="mx-[auto] w-[89%]">
          <Row className="items-start justify-start w-[100%]">
            <Image
              src={"images/img_icon.svg"}
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
                src={"images/img_shoppingbag.svg"}
                className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                alt="shoppingbag"
              />
            </Row>
            <Row className="items-center justify-between lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] w-[10%]">
              <Text className="cursor-pointer font-medium hover:font-normal lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-right w-[auto]">{`My Account`}</Text>
              <Image
                src={"images/img_profile24.svg"}
                className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                alt="profile24"
              />
            </Row>
          </Row>
        </header>
        <Row className="bg-deep_purple_50 items-start justify-start lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] lg:pb-[28px] xl:pb-[32px] pb-[36px] 3xl:pb-[43px] lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:pr-[138px] xl:pr-[158px] pr-[178px] 3xl:pr-[213px] lg:pt-[21px] xl:pt-[24px] pt-[27px] 3xl:pt-[32px] rounded-radius20 w-[89%]">
          <Text className="font-medium lg:mb-[148px] xl:mb-[169px] mb-[191px] 3xl:mb-[229px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_66 text-left tracking-ls1 w-[auto]">
            <span className="text-gray_900_66 font-metropolis">
              <>{`Home | `}</>
            </span>
            <span className="text-deep_purple_A200 font-metropolis">
              <>{`Pricing`}</>
            </span>
          </Text>
          <Text className="font-normal lg:leading-[38px] xl:leading-[44px] leading-[50.00px] 2xl:leading-[50px] 3xl:leading-[60px] lg:mb-[38px] xl:mb-[43px] mb-[49px] 3xl:mb-[58px] lg:mt-[45px] xl:mt-[51px] mt-[58px] 3xl:mt-[69px] lg:text-[35px] xl:text-[40px] text-[45px] 3xl:text-[54px] text-gray_900 text-left w-[29%]">
            {
              <>
                {`Our Pre-ready`}
                <br />
                {`Pricing Packages`}
              </>
            }
          </Text>
          <Image
            src={"images/img_43891.svg"}
            className="lg:h-[154px] xl:h-[177px] h-[198px] 2xl:h-[199px] 3xl:h-[238px] xl:ml-[107px] ml-[121px] 3xl:ml-[145px] lg:ml-[94px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] object-contain w-[36%]"
            alt="43891"
          />
        </Row>
        <Text className="font-bold lg:leading-[42px] xl:leading-[48px] leading-[55.00px] 2xl:leading-[55px] 3xl:leading-[66px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] mx-[auto] lg:text-[35px] xl:text-[40px] text-[45px] 3xl:text-[54px] text-center text-gray_900 w-[57%]">
          {
            <>
              {`We create a monthly pricing package`}
              <br />
              {`for all standard students`}
            </>
          }
        </Text>
        <Text className="font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[58%]">{`Basically we create this package for those who are really interested and get benifited from our courses or books. We want to make a low cost package for them. So that they can purchase any courses with the package they buy from us. Also will get free books from every packages.`}</Text>
        <Row className="lg:gap-[31px] xl:gap-[35px] gap-[40px] 3xl:gap-[48px] grid grid-cols-3 items-center justify-start lg:mt-[54px] xl:mt-[62px] mt-[70px] 3xl:mt-[84px] mx-[auto] w-[89%]">
          <Column className="bg-white_A700 items-start lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius20 w-[100%]">
            <Image
              src={"images/img_pricetag1.svg"}
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="pricetag1"
            />
            <Input
              className="placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-gray_900_26 font-normal lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:pb-[18px] xl:pb-[20px] pb-[23.58px] 2xl:pb-[23px] 3xl:pb-[28px] pl-[0] pt-[2.58px] 2xl:pt-[2px] xl:pt-[2px] lg:pt-[2px] 3xl:pt-[3px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] placeholder:text-gray_900 text-gray_900 text-left w-[85%]"
              name="Group3"
              placeholder={`Basic Pack`}
            ></Input>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[66%]">
              <Image
                src={"images/img_approve24.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`3 HD video lessons & tutorials`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[37%]">
              <Image
                src={"images/img_approve24_1.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`1 Official exam`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[53%]">
              <Image
                src={"images/img_approve24_2.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`100 Practice questions`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[50%]">
              <Image
                src={"images/img_approve24_3.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`1 Month subscriptions`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[31%]">
              <Image
                src={"images/img_approve24_4.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`1 Free book`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] opacity-op7 w-[67%]">
              <Image
                src={"images/img_close24ou.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Close24Ou"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Practice quizes & assignments`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] opacity-op7 w-[50%]">
              <Image
                src={"images/img_close24ou_1.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Close24Ou"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`In depth explanations`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] opacity-op7 w-[65%]">
              <Image
                src={"images/img_close24ou_2.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Close24Ou"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Personal instructor Assitance`}</Text>
            </Row>
            <Text className="font-normal lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">
              <span className="text-gray_900 text-[20px] font-metropolis lg:text-[15px] xl:text-[17px] 3xl:text-[24px]">
                <>{`$`}</>
              </span>
              <span className="text-gray_900 font-metropolis">
                <>{`200`}</>
              </span>
            </Text>
            <Column className="font-inter items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:px-[23px] xl:px-[26px] px-[30px] 3xl:px-[36px] w-[100%]">
              <Button className="border border-deep_purple_A200 border-solid font-medium mx-[auto] lg:py-[16px] xl:py-[18px] py-[21px] 3xl:py-[25px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-deep_purple_A200 w-[85%]">{`Purchase Course`}</Button>
            </Column>
          </Column>
          <Column className="bg-white_A700 items-start lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius20 shadow-bs w-[100%]">
            <Image
              src={"images/img_pricetag1_1.svg"}
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="pricetag1"
            />
            <Input
              className="placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-gray_900_26 font-normal lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:pb-[18px] xl:pb-[20px] pb-[23.58px] 2xl:pb-[23px] 3xl:pb-[28px] pl-[0] pt-[2.58px] 2xl:pt-[2px] xl:pt-[2px] lg:pt-[2px] 3xl:pt-[3px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] placeholder:text-gray_900 text-gray_900 text-left w-[85%]"
              name="Group4"
              placeholder={`Standard Pack`}
            ></Input>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[66%]">
              <Image
                src={"images/img_approve24_5.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`8 HD video lessons & tutorials`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[37%]">
              <Image
                src={"images/img_approve24_6.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`2 Official exam`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[53%]">
              <Image
                src={"images/img_approve24_7.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`200 Practice questions`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[50%]">
              <Image
                src={"images/img_approve24_8.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`1 Month subscriptions`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[34%]">
              <Image
                src={"images/img_approve24_9.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`3 Free books`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[67%]">
              <Image
                src={"images/img_approve24_10.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Practice quizes & assignments`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] opacity-op7 w-[50%]">
              <Image
                src={"images/img_close24ou_3.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Close24Ou"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`In depth explanations`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] opacity-op7 w-[65%]">
              <Image
                src={"images/img_close24ou_4.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Close24Ou"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Personal instructor Assitance`}</Text>
            </Row>
            <Text className="font-normal lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">
              <span className="text-gray_900 text-[20px] font-metropolis lg:text-[15px] xl:text-[17px] 3xl:text-[24px]">
                <>{`$`}</>
              </span>
              <span className="text-gray_900 font-metropolis">
                <>{`600`}</>
              </span>
            </Text>
            <Column className="font-inter items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:px-[23px] xl:px-[26px] px-[30px] 3xl:px-[36px] w-[100%]">
              <Button className="bg-deep_purple_A200 font-medium mx-[auto] lg:py-[16px] xl:py-[18px] py-[21px] 3xl:py-[25px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[85%]">{`Purchase Course`}</Button>
            </Column>
          </Column>
          <Column className="bg-white_A700 items-start lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius20 w-[100%]">
            <Image
              src={"images/img_pricetag1_2.svg"}
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="pricetag1"
            />
            <Input
              className="placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-gray_900_26 font-normal lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:pb-[18px] xl:pb-[20px] pb-[23.58px] 2xl:pb-[23px] 3xl:pb-[28px] pl-[0] pt-[2.58px] 2xl:pt-[2px] xl:pt-[2px] lg:pt-[2px] 3xl:pt-[3px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] placeholder:text-gray_900 text-gray_900 text-left w-[85%]"
              name="Group2"
              placeholder={`Premium Pack`}
            ></Input>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[68%]">
              <Image
                src={"images/img_approve24_11.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`15 HD video lessons & tutorials`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[37%]">
              <Image
                src={"images/img_approve24_12.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`3 Official exam`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[53%]">
              <Image
                src={"images/img_approve24_13.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`300 Practice questions`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[50%]">
              <Image
                src={"images/img_approve24_14.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`1 Month subscriptions`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[34%]">
              <Image
                src={"images/img_approve24_15.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`5 Free books`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[67%]">
              <Image
                src={"images/img_approve24_16.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Practice quizes & assignments`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[50%]">
              <Image
                src={"images/img_approve24_17.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`In depth explanations`}</Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[65%]">
              <Image
                src={"images/img_approve24_18.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Approve24"
              />
              <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Personal instructor Assitance`}</Text>
            </Row>
            <Text className="font-normal lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">
              <span className="text-gray_900 text-[20px] font-metropolis lg:text-[15px] xl:text-[17px] 3xl:text-[24px]">
                <>{`$`}</>
              </span>
              <span className="text-gray_900 font-metropolis">
                <>{`1200`}</>
              </span>
            </Text>
            <Column className="font-inter items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:px-[23px] xl:px-[26px] px-[30px] 3xl:px-[36px] w-[100%]">
              <Button className="border border-deep_purple_A200 border-solid font-medium mx-[auto] lg:py-[16px] xl:py-[18px] py-[21px] 3xl:py-[25px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-deep_purple_A200 w-[85%]">{`Purchase Course`}</Button>
            </Column>
          </Column>
        </Row>
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
                src={"images/img_ellipse168.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                alt="Ellipse168"
              />
              <Image
                src={"images/img_ellipse166.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rounded-radius50 w-[60px]"
                alt="Ellipse166"
              />
            </Row>
            <Row className="lg:gap-[626px] xl:gap-[717px] gap-[806px] 3xl:gap-[967px] grid grid-cols-2 items-start justify-between lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[100%]">
              <Image
                src={"images/img_ellipse167.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                alt="Ellipse167"
              />
              <Image
                src={"images/img_ellipse167_1.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] object-contain rounded-radius50 w-[60px]"
                alt="Ellipse167"
              />
            </Row>
            <Row className="gap-[1030px] 3xl:gap-[1236px] lg:gap-[801px] xl:gap-[916px] grid grid-cols-2 items-center justify-between lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[100%]">
              <Image
                src={"images/img_ellipse166_1.png"}
                className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rotate-[-180deg] rounded-radius50 w-[60px]"
                alt="Ellipse166"
              />
              <Image
                src={"images/img_ellipse168_1.png"}
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
                  src={"images/img_icon_1.svg"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain w-[22%]"
                  alt="icon"
                />
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-gray_900 text-left w-[auto]">{`Eduvi`}</Text>
              </Row>
              <Image
                src={"images/img_social.svg"}
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

export default EduviCoursesPricingPage;
