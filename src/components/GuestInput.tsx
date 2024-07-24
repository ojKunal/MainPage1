import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";

export type GuestInputType = {
  className?: string;
};

const GuestInput: FunctionComponent<GuestInputType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[686.2px] box-border max-w-full shrink-0 text-left text-13xl text-white font-poppins mq900:pb-[188px] mq900:box-border mq1275:pb-[290px] mq1275:box-border ${className}`}
    >
      <div className="w-[1476.1px] flex flex-col items-end justify-start gap-[149.8px] max-w-full shrink-0 mq450:gap-[19px] mq900:gap-[37px] mq1275:gap-[75px]">
        <div className="self-stretch rounded-2xl overflow-hidden flex flex-col items-start justify-start pt-[105.2px] px-[50px] pb-[108.6px] box-border gap-[31.7px] max-w-full mq450:pt-[68px] mq450:pb-[71px] mq450:box-border mq900:gap-[16px] mq900:pl-[25px] mq900:pr-[25px] mq900:box-border">
          <div className="w-[473.9px] flex flex-col items-start justify-start gap-[16.5px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[38.4px] font-bold font-inherit mq450:text-lgi mq450:leading-[23px] mq900:text-7xl mq900:leading-[31px]">
              Share Your Nest with Millions of Travelers
            </h1>
            <div className="relative text-lg leading-[22px]">
              Listing is easy with CuddlyNest
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-2 px-6 bg-[transparent] rounded-3xs [background:linear-gradient(92.37deg,_#f35597,_#7868c7)] flex flex-row items-start justify-start gap-[10px]">
            <img
              className="h-6 w-[25px] relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/img-4.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0">
              <div className="relative text-sm leading-[21px] font-semibold font-inter text-white text-left inline-block min-w-[121px]">
                List your property
              </div>
            </div>
          </button>
        </div>
        <div className="w-[1459.8px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-base text-gray-300">
          <div className="flex flex-row items-start justify-start gap-[52.7px] max-w-full mq900:gap-[26px] mq1275:flex-wrap">
            <FrameComponent2
              divcnHpValuesValueImg="/divcn--hp--values--value--img.svg"
              globalSearch="Global Search"
              anAdvancedAlgorithmDelive="An advanced algorithm delivers every type of accommodation spanning 80,000 cities and 188+ countries"
            />
            <div className="w-[14.4px] flex flex-col items-start justify-start pt-[100px] pb-0 pr-[13px] pl-0 box-border">
              <div className="w-px bg-gray-100 flex flex-row items-start justify-start pt-0 px-0 pb-[58.4px] box-border opacity-[0.5]">
                <div className="h-0 w-0 relative inline-block" />
              </div>
            </div>
            <FrameComponent2
              divcnHpValuesValueImg="/divcn--hp--values--value--img-1.svg"
              globalSearch="Affordable Stays"
              anAdvancedAlgorithmDelive="Find properties that fit your unique style and budget effortlessly"
              propWidth="290.4px"
              propPadding="unset"
              propHeight="174.1px"
            />
            <div className="w-[18.9px] flex flex-col items-start justify-start pt-[100px] pb-0 pr-[17px] pl-0 box-border">
              <div className="w-px bg-gray-100 flex flex-row items-start justify-start pt-0 px-0 pb-[58.4px] box-border opacity-[0.5]">
                <div className="h-0 w-0 relative inline-block" />
              </div>
            </div>
            <FrameComponent2
              divcnHpValuesValueImg="/divcn--hp--values--value--img.svg"
              globalSearch="Peace of Mind"
              anAdvancedAlgorithmDelive="Rest easy knowing all of our properties pass lengthy verification checks and rigorous safety protocols"
              propWidth="282.7px"
              propPadding="unset"
              propHeight="unset"
            />
          </div>
        </div>
        <div className="self-stretch rounded-2xl bg-mediumpurple overflow-hidden flex flex-row flex-wrap items-start justify-between pt-[124.2px] pb-[127.6px] pr-[27px] pl-[45px] box-border relative max-w-full gap-[20px] text-4xl mq450:pt-[81px] mq450:pb-[83px] mq450:box-border mq900:justify-center mq1275:pl-[22px] mq1275:box-border">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/imgcn--imagedefault-31@2x.png"
          />
          <div className="w-[428.3px] flex flex-col items-start justify-start pt-[15.8px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start">
              <h3 className="m-0 self-stretch relative text-inherit leading-[27.6px] font-bold font-inherit z-[1] mq450:text-lg mq450:leading-[22px]">{`We’re waiving our 12% service fee for all qualifying property owners until 31 December 2024 with our `}</h3>
              <div className="flex flex-row items-start justify-start mt-[-1.3px] text-9xl text-palevioletred">
                <h2 className="m-0 relative text-inherit leading-[34px] font-bold font-inherit shrink-0 z-[1] mq450:text-3xl mq450:leading-[27px]">
                  CuddlyCare Program
                </h2>
                <div className="flex flex-col items-start justify-start pt-[5.6px] px-0 pb-0 ml-[-0.3px] text-4xl text-white">
                  <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit inline-block min-w-[7px] shrink-0 z-[1] mq450:text-lg mq450:leading-[22px]">
                    .
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[255.4px] flex flex-col items-start justify-start gap-[11.2px] text-9xl">
            <h2 className="m-0 self-stretch relative text-inherit leading-[33.6px] font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-3xl mq450:leading-[27px]">
              Take advantage of this asset by applying now!
            </h2>
            <div className="w-[236.6px] flex flex-row items-start justify-start py-0 px-[46px] box-border">
              <button className="cursor-pointer [border:none] pt-[7.7px] px-6 pb-[8.3px] bg-[transparent] flex-1 rounded-3xs [background:linear-gradient(92.37deg,_#f35597,_#7868c7)] flex flex-row items-start justify-start whitespace-nowrap z-[1]">
                <div className="relative text-sm leading-[21px] font-semibold font-inter text-white text-left inline-block min-w-[91px]">
                  Claim benefit
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestInput;
