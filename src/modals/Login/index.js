import React from "react";
import ModalProvider from "react-modal";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Image,
  Text,
  PagerIndicator,
  Line,
  Input,
  Stack,
  Button,
} from "components";

const LoginModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/");
  }

  return (
    <>
      <ModalProvider
        className="m-[auto] w-[74%]"
        overlayClassName="bg-gray_900_7f fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Row className="bg-white_A700 items-center justify-center lg:pb-[61px] xl:pb-[70px] pb-[79px] 3xl:pb-[94px] 3xl:pl-[105px] lg:pl-[68px] xl:pl-[78px] pl-[88px] lg:pr-[61px] xl:pr-[70px] pr-[79px] 3xl:pr-[94px] lg:pt-[62px] xl:pt-[71px] pt-[80px] 3xl:pt-[96px] rounded-radius15 w-[100%]">
            <Column className="items-start lg:my-[19px] xl:my-[22px] my-[25px] 3xl:my-[30px] w-[33%]">
              <Row className="items-center justify-start w-[23%]">
                <Image
                  src={"images/img_icon_39.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="icon"
                />
                <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-center text-gray_900 w-[auto]">{`Eduvi`}</Text>
              </Row>
              <Text className="font-bold lg:leading-[38px] xl:leading-[44px] leading-[50.00px] 2xl:leading-[50px] 3xl:leading-[60px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-gray_900 text-left w-[100%]">
                {
                  <>
                    {`Welcome to`}
                    <br />
                    {`Eduvi Online`}
                    <br />
                    {`Learning Platform`}
                  </>
                }
              </Text>
              <Image
                src={"images/img_57907191_1.svg"}
                className="lg:h-[262px] xl:h-[299px] h-[336px] 2xl:h-[337px] 3xl:h-[404px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] object-contain w-[94%]"
                alt="57907191"
              />
              <Column className="items-center lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:pl-[124px] xl:pl-[142px] pl-[160px] 3xl:pl-[192px] lg:pr-[123px] xl:pr-[141px] pr-[159px] 3xl:pr-[190px] w-[100%]">
                <PagerIndicator
                  className="h-[10px] mx-[auto] w-[auto]"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-radius50 w-[10px] h-[10px] border-deep_orange_400 border border-solid bg-white_A700"
                  activeIndex={undefined}
                  inactiveCss="inline-block cursor-pointer rounded-radius50 w-[8px] h-[8px] bg-deep_orange_400_7f"
                  sliderRef={undefined}
                  selectedWrapperCss="2xl:mx-[2px] 3xl:mx-[3px] inline-block lg:mx-[1px] mx-[2.50px] xl:mx-[2px]"
                  unselectedWrapperCss="2xl:mx-[2px] 3xl:mx-[3px] inline-block lg:mx-[1px] mx-[2.50px] xl:mx-[2px]"
                />
              </Column>
            </Column>
            <Line className="bg-gradient1  lg:h-[499px] xl:h-[571px] h-[641px] 2xl:h-[642px] 3xl:h-[770px] 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] w-[1px]" />
            <Column className="items-start mb-[106px] 3xl:mb-[127px] lg:mb-[82px] xl:mb-[94px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] mt-[105px] 3xl:mt-[126px] lg:mt-[81px] xl:mt-[93px] w-[35%]">
              <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] xl:pr-[113px] pr-[128px] 3xl:pr-[153px] lg:pr-[99px] lg:py-[3px] xl:py-[4px] py-[5px] 3xl:py-[6px] rounded-radius10 w-[92%]">
                <Image
                  src={"images/img_icon_40.svg"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="icon"
                />
                <Text className="font-normal lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`Sign in with google`}</Text>
              </Row>
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[53px] ml-[60px] 3xl:ml-[72px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[68%]">
                <div className="bg-gray_700 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mb-[10px] xl:mb-[12px] mb-[14px] 3xl:mb-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[8%]"></div>
                <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[auto]">{`Or signin with your email`}</Text>
                <div className="bg-gray_700 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mb-[10px] xl:mb-[12px] mb-[14px] 3xl:mb-[16px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[8%]"></div>
              </Row>
              <Column className="items-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Email`}</Text>
                <div className="3xl:mt-[6px] bg-transparent border-0 lg:mt-[3px] mt-[5px] w-[100%] xl:mt-[4px] input-wrap">
                  <Image
                    src={"images/img_vector_4.svg"}
                    className="absolute z-[1] left-[19.50px] bg-transparent border-0 lg:left-[15px] xl:left-[17px] 2xl:left-[19px] 3xl:left-[23px] my-[auto] inset-y-[0]"
                    alt="Vector"
                  />
                  <Input
                    className="placeholder:bg-transparent bg-white_A700 border border-gray_300 border-solid font-normal not-italic lg:pl-[42px] xl:pl-[48px] pl-[54.00px] 2xl:pl-[54px] 3xl:pl-[64px] lg:py-[20px] xl:py-[23px] py-[26px] 3xl:py-[31px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_700 text-gray_700 text-left w-[100%]"
                    name="bill.sanders@ex"
                    placeholder={`bill.sanders@example.com`}
                  ></Input>
                </div>
                <Text className="font-medium lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 text-left w-[auto]">{`Passord`}</Text>
              </Column>
              <Stack className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                <Image
                  src={"images/img_bg_6.svg"}
                  className="absolute lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] inset-[0] object-cover rounded-radius10 w-[100%]"
                  alt="BG"
                />
                <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[90%]">
                  <Image
                    src={"images/img_lockpadlocks_1.svg"}
                    className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                    alt="lockpadlocks"
                  />
                  <Text className="font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`*************`}</Text>
                  <Image
                    src={"images/img_eye11_1.svg"}
                    className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[153px] xl:ml-[175px] ml-[197px] 3xl:ml-[236px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                    alt="eye11"
                  />
                </Row>
              </Stack>
              <Button
                className="common-pointer bg-deep_purple_A200 font-medium lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[100%]"
                onClick={handleNavigate2}
              >{`Sign In`}</Button>
              <Row className="items-center justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Image
                  src={"images/img_checked24_1.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="Checked24"
                />
                <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-left w-[auto]">{`keep me signed in`}</Text>
                <Text className="font-medium lg:ml-[42px] xl:ml-[48px] ml-[54px] 3xl:ml-[64px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_700 text-right w-[auto]">{`Forgot password?`}</Text>
              </Row>
            </Column>
          </Row>
        </div>
      </ModalProvider>
    </>
  );
};

export default LoginModal;
