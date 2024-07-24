import { FunctionComponent } from "react";
import DestinationIntro from "./DestinationIntro";
import DivcnCardcnCard from "./DivcnCardcnCard";

export type AdvancedFilterLabelType = {
  className?: string;
};

const AdvancedFilterLabel: FunctionComponent<AdvancedFilterLabelType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-left text-4xl text-white font-poppins ${className}`}
    >
      <div className="w-[1476.1px] flex flex-col items-start justify-start gap-[98.3px] max-w-full mq450:gap-[25px] mq900:gap-[49px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16.8px] max-w-full">
          <DestinationIntro
            trendingDestinations="Staycations"
            placesThatTravelersAreAdd="Keep it local and visit these destinations closer to home"
            divcnSliderArrowsArrowcnS="/divcn--slider--arrows--arrowcn--slider--arrows--disabledcn--slider--arrows--prevarrow-2.svg"
            divcnSliderArrowsArrowcnS1="/divcn--slider--arrows--arrowcn--slider--arrows--nextarrow-2.svg"
            propGap="3.3px"
          />
          <div className="w-[1476.1px] h-[400px] overflow-x-auto shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-5 box-border gap-[20px] max-w-full">
            <div className="mb-[-44px] h-[424px] w-[1780px] shrink-0 flex flex-col items-start justify-start gap-[20px] max-w-[121%] text-base text-gray-300">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
                <div className="w-px h-0 relative inline-block">{` `}</div>
                <div className="w-[1576px] flex-1 overflow-x-auto flex flex-row items-start justify-start gap-[20px] max-w-full text-4xl text-white">
                  <DivcnCardcnCard
                    imgcnImageDefault="/imgcn--imagedefault-15@2x.png"
                    newDelhi="New Delhi"
                    properties="2,090 properties"
                  />
                  <DivcnCardcnCard
                    imgcnImageDefault="/imgcn--imagedefault-16@2x.png"
                    newDelhi="Mapusa"
                    properties="1,614 properties"
                  />
                  <DivcnCardcnCard
                    imgcnImageDefault="/imgcn--imagedefault-17@2x.png"
                    newDelhi="Jaipur"
                    properties="1,066 properties"
                  />
                  <DivcnCardcnCard
                    imgcnImageDefault="/imgcn--imagedefault-18@2x.png"
                    newDelhi="Mumbai"
                    properties="1,053 properties"
                  />
                  <DivcnCardcnCard
                    imgcnImageDefault="/imgcn--imagedefault-19@2x.png"
                    newDelhi="Gurgaon"
                    properties="880 properties"
                  />
                  <DivcnCardcnCard
                    imgcnImageDefault="/imgcn--imagedefault-20@2x.png"
                    newDelhi="Chennai"
                    properties="799 properties"
                  />
                </div>
              </div>
              <div className="w-px h-6 relative inline-block">{` `}</div>
            </div>
            <DivcnCardcnCard
              imgcnImageDefault="/imgcn--imagedefault-21@2x.png"
              newDelhi="Hyderabad"
              properties="730 properties"
            />
            <DivcnCardcnCard
              imgcnImageDefault="/imgcn--imagedefault-22@2x.png"
              newDelhi="Udaipur"
              properties="594 properties"
            />
            <div className="self-stretch w-[280px] shadow-[0px_2px_2px_rgba(87,_75,_144,_0.15)] rounded-2xl bg-darkgray-200 overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[18px] px-[18px] pb-[18.5px] box-border gap-[1.8px]">
              <h3 className="m-0 w-[91px] h-7 relative text-inherit leading-[27.6px] uppercase font-bold font-inherit inline-block mq450:text-lg mq450:leading-[22px]">
                Manali
              </h3>
              <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[1.7px] box-border text-base">
                <div className="mt-[-1.7px] w-[119px] relative tracking-[0.16px] leading-[19px] font-medium inline-block shrink-0">
                  592 properties
                </div>
              </div>
            </div>
            <div className="self-stretch w-[280px] shadow-[0px_2px_2px_rgba(87,_75,_144,_0.15)] rounded-2xl bg-darkgray-200 overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[18px] px-[18px] pb-[18.5px] box-border gap-[1.8px]">
              <h3 className="m-0 w-[61px] h-7 relative text-inherit leading-[27.6px] uppercase font-bold font-inherit inline-block mq450:text-lg mq450:leading-[22px]">
                Pune
              </h3>
              <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[1.7px] box-border text-base">
                <div className="mt-[-1.7px] w-[120px] relative tracking-[0.16px] leading-[19px] font-medium inline-block shrink-0">
                  499 properties
                </div>
              </div>
            </div>
            <div className="self-stretch w-[280px] shadow-[0px_2px_2px_rgba(87,_75,_144,_0.15)] rounded-2xl bg-darkgray-200 overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[18px] px-[18px] pb-[18.5px] box-border gap-[1.8px]">
              <h3 className="m-0 w-[150px] h-7 relative text-inherit leading-[27.6px] uppercase font-bold font-inherit inline-block mq450:text-lg mq450:leading-[22px]">
                Ahmedabad
              </h3>
              <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[1.7px] box-border text-base">
                <div className="mt-[-1.7px] w-[120px] relative tracking-[0.16px] leading-[19px] font-medium inline-block shrink-0">
                  463 properties
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl [background:linear-gradient(95.99deg,_#e8eded,_#f4f4f4)] overflow-hidden flex flex-row items-start justify-start py-0 px-[60px] box-border gap-[159.4px] max-w-full text-25xl text-slategray-100 mq450:gap-[20px] mq900:gap-[40px] mq1275:gap-[80px] mq1275:pl-[30px] mq1275:pr-[30px] mq1275:box-border mq1600:flex-wrap">
          <div className="w-[443.2px] flex flex-col items-start justify-start pt-[39.5px] px-0 pb-0 box-border min-w-[443.2px] max-w-full shrink-0 mq900:min-w-full mq1600:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[41.7px] max-w-full mq450:gap-[21px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[27.8px]">
                <h1 className="m-0 self-stretch relative text-inherit leading-[53px] font-bold font-inherit mq450:text-7xl mq450:leading-[32px] mq900:text-16xl mq900:leading-[42px]">
                  Millions of places to stay, one app.
                </h1>
                <div className="w-[292px] h-11 relative text-lg tracking-[0.18px] leading-[22px] inline-block">
                  Don’t miss out on mobile-only deals and one-of-a-kind offers.
                </div>
              </div>
              <div className="flex flex-row items-end justify-start gap-[10px] max-w-full text-sm font-inter mq450:flex-wrap">
                <img
                  className="h-[93px] w-[93px] relative overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/imgcn--hp--download--info--buttons--qr-1@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[13.1px]">
                  <div className="relative tracking-[0.14px] leading-[21px] font-semibold inline-block min-w-[117px]">
                    Get the app now.
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="self-stretch w-[119px] relative max-h-full overflow-hidden shrink-0 min-h-[40px]"
                      alt=""
                      src="/img-2.svg"
                    />
                    <img
                      className="self-stretch w-[135px] relative max-h-full overflow-hidden shrink-0 min-h-[40px]"
                      loading="lazy"
                      alt=""
                      src="/img-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[813.6px] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1600:flex-1"
            loading="lazy"
            alt=""
            src="/imgcn--hp--download--mobile@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[31.9px] max-w-full text-13xl text-gray-300 font-inter mq900:gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[26px] pl-5">
            <div className="flex flex-col items-start justify-start gap-[15.5px]">
              <h1 className="m-0 relative text-inherit leading-[39px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px] mq900:text-7xl mq900:leading-[31px]">
                Explore by Trip Type
              </h1>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[7px] text-lg text-gray-100 font-poppins">
                <div className="relative leading-[22px]">
                  Your ideal stay is just a click away!
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch grid flex-row items-start justify-start gap-[20px] max-w-full grid-cols-[repeat(4,_minmax(265px,_1fr))] text-4xl text-white font-poppins mq900:grid-cols-[minmax(265px,_1fr)] mq1275:justify-center mq1275:grid-cols-[repeat(2,_minmax(265px,_460px))]">
            <div className="rounded-2xl overflow-hidden flex flex-row items-start justify-center pt-[71.4px] px-5 pb-[75.6px] box-border relative max-w-full">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/imgcn--imagedefault-23@2x.png"
              />
              <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit inline-block min-w-[111px] z-[1] mq450:text-lg mq450:leading-[22px]">
                BUSINESS
              </h3>
            </div>
            <div className="rounded-2xl overflow-hidden flex flex-row items-start justify-center pt-[71.4px] pb-[75.6px] pr-5 pl-[21px] box-border relative max-w-full">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/imgcn--imagedefault-24@2x.png"
              />
              <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit inline-block min-w-[84px] z-[1] mq450:text-lg mq450:leading-[22px]">
                FAMILY
              </h3>
            </div>
            <div className="rounded-2xl overflow-hidden flex flex-row items-start justify-start pt-[71.4px] px-[45px] pb-[75.6px] box-border relative max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/imgcn--imagedefault-25@2x.png"
              />
              <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit z-[1] mq450:text-lg mq450:leading-[22px]">
                ROMANTIC GETAWAYS
              </h3>
            </div>
            <div className="rounded-2xl overflow-hidden flex flex-row items-start justify-center pt-[71.4px] pb-[75.6px] pr-5 pl-[21px] box-border relative max-w-full">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/imgcn--imagedefault-26@2x.png"
              />
              <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit inline-block min-w-[62px] z-[1] mq450:text-lg mq450:leading-[22px]">
                SOLO
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFilterLabel;
