import { FunctionComponent } from "react";

export type DestinationsType = {
  className?: string;
};

const Destinations: FunctionComponent<DestinationsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[105.2px] box-border min-h-[291px] max-w-full shrink-0 text-left text-4xl text-white font-poppins ${className}`}
    >
      <div className="self-stretch shadow-[0px_8px_16px_rgba(0,_0,_0,_0.16)] bg-white box-border flex flex-row items-start justify-center pt-[13.1px] px-[100px] pb-[13px] relative gap-[78px] max-w-full border-b-[0.6px] border-solid border-whitesmoke-300 mq450:gap-[19px] mq450:pl-5 mq450:pr-5 mq450:box-border mq900:gap-[39px] mq900:pl-[50px] mq900:pr-[50px] mq900:box-border mq1600:flex-wrap">
        <div className="w-[202px] flex flex-col items-start justify-start pt-[4.8px] px-0 pb-0 box-border">
          <img
            className="self-stretch h-[45px] relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/frame-10.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-[19px] pl-0 box-border max-w-full text-base text-gray-300 font-inter">
          <div className="shadow-[0px_6px_14px_-6px_rgba(24,_39,_75,_0.12)] rounded-18xl bg-white overflow-x-auto flex flex-row items-start justify-start pt-2.5 pb-[9px] pr-2.5 pl-[25px] gap-[10px] border-[0.6px] border-solid border-gainsboro">
            <div className="w-[241.1px] box-border shrink-0 flex flex-row items-start justify-start py-px pr-2.5 pl-0 text-gray-200 border-r-[0.6px] border-solid border-whitesmoke-300">
              <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                <img
                  className="w-[15px] h-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame.svg"
                />
              </div>
              <div className="flex-1 rounded-md overflow-hidden flex flex-row items-start justify-start pt-0 px-[15px] pb-[22px]">
                <div className="flex-1 relative leading-[16px] font-semibold">
                  Where to?
                </div>
              </div>
            </div>
            <div className="w-[241.1px] box-border shrink-0 flex flex-row items-start justify-start pt-[8.6px] px-0 pb-[11.5px] gap-[17px] border-r-[0.6px] border-solid border-whitesmoke-300">
              <div className="flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0">
                <img
                  className="w-4 h-[17px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-1.svg"
                />
              </div>
              <div className="relative font-semibold inline-block min-w-[46px]">
                Dates
              </div>
            </div>
            <div className="w-[241.1px] shrink-0 flex flex-col items-start justify-start pt-[8.6px] px-0 pb-0 box-border">
              <div className="flex flex-row items-start justify-start gap-[17px]">
                <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                  <img
                    className="w-5 h-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-13.svg"
                  />
                </div>
                <div className="relative font-semibold">2 guests · 1 room</div>
              </div>
            </div>
            <img
              className="h-10 w-10 relative rounded-xl shrink-0 min-h-[40px]"
              alt=""
              src="/divomnisearch-content-searchactionarea-1.svg"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[13.6px] px-0 pb-0 text-sm text-gray-300 font-inter">
          <div className="flex flex-row items-start justify-start gap-[25.8px]">
            <div className="flex flex-col items-start justify-start pt-[7.2px] px-0 pb-0">
              <div className="relative tracking-[0.14px] leading-[14px] font-semibold inline-block min-w-[124px]">
                List your property
              </div>
            </div>
            <div className="w-[50px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border font-poppins">
              <div className="self-stretch rounded-16xl flex flex-row items-start justify-start pt-px px-[11px] pb-[7px] border-[0.6px] border-solid border-black">
                <div className="relative tracking-[0.14px] leading-[14px] font-medium inline-block min-w-[27px]">
                  EUR
                </div>
              </div>
            </div>
            <img
              className="h-[34px] w-11 relative overflow-hidden shrink-0"
              alt=""
              src="/frame-14.svg"
            />
          </div>
        </div>
        <div className="!m-[0] absolute bottom-[-105.2px] left-[100px] rounded-2xl overflow-hidden flex flex-row items-start justify-start pt-[71.4px] pb-[75.6px] pr-[62px] pl-[63px] z-[1]">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/imgcn--imagedefault-27@2x.png"
          />
          <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit z-[1] mq450:text-lg mq450:leading-[22px]">
            ADVENTURE TRAVEL
          </h3>
        </div>
        <div className="w-[354px] !m-[0] absolute bottom-[-105.2px] left-[474px] rounded-2xl overflow-hidden shrink-0 flex flex-row items-start justify-center pt-[71.4px] pb-[75.6px] pr-5 pl-[21px] box-border z-[1]">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/imgcn--imagedefault-28@2x.png"
          />
          <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit z-[1] mq450:text-lg mq450:leading-[22px]">
            GROUP TRIPS
          </h3>
        </div>
        <div className="w-[354px] !m-[0] absolute right-[474px] bottom-[-105.2px] rounded-2xl overflow-hidden shrink-0 flex flex-row items-start justify-center pt-[71.4px] pb-[75.6px] pr-5 pl-[21px] box-border z-[1]">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/imgcn--imagedefault-29@2x.png"
          />
          <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit z-[1] mq450:text-lg mq450:leading-[22px]">
            LUXURY STAYS
          </h3>
        </div>
        <div className="!m-[0] absolute right-[100px] bottom-[-105.2px] rounded-2xl overflow-hidden flex flex-row items-start justify-start pt-[71.4px] px-[39px] pb-[75.6px] z-[1]">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/imgcn--imagedefault-30@2x.png"
          />
          <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit z-[1] mq450:text-lg mq450:leading-[22px]">
            DIGITAL NOMAD TRAVEL
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
