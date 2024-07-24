import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`mt-[-598px] self-stretch flex flex-col items-start justify-start gap-[30.2px] max-w-full shrink-0 text-left text-13xl text-gray-300 font-inter mq900:gap-[15px] ${className}`}
    >
      <div className="w-[1459.7px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[15.5px] max-w-full">
          <h1 className="m-0 relative text-inherit leading-[39px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px] mq900:text-7xl mq900:leading-[31px]">
            Worthwhile Travel Reads
          </h1>
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[15px] text-lg text-gray-100 font-poppins">
            <div className="relative leading-[22px]">
              Curated articles by travelers, for travelers
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-[4px] max-w-full text-lg mq1600:flex-wrap">
        <div className="flex-1 flex flex-col items-end justify-start gap-[40.7px] min-w-[581px] max-w-full mq450:gap-[20px] mq900:min-w-full">
          <div className="flex flex-row items-start justify-start gap-[51.8px] max-w-full mq900:flex-wrap mq900:gap-[26px]">
            <div className="relative leading-[22px] font-semibold">
              Destination deep-dive
            </div>
            <div className="flex flex-row items-start justify-start gap-[39px] max-w-full font-poppins mq450:flex-wrap mq450:gap-[19px]">
              <div className="relative leading-[22px]">{`Activities & adventure`}</div>
              <div className="relative leading-[22px]">Stays you’ll love</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-4 pl-0 box-border max-w-full text-sm font-poppins">
            <div className="flex-1 flex flex-row items-start justify-start gap-[13.4px] max-w-full mq900:flex-wrap">
              <div className="flex-[0.979] flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border gap-[10.5px] min-w-[214px] mq450:flex-1">
                <div className="self-stretch h-[186.7px] relative rounded-2xl bg-ghostwhite overflow-hidden shrink-0" />
                <div className="self-stretch relative leading-[21px] shrink-0">
                  Explore Richmond Park: Everything You Need to Know
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10.5px] min-w-[214px]">
                <div className="w-[279.2px] h-[186.7px] relative rounded-2xl bg-ghostwhite overflow-hidden shrink-0" />
                <div className="self-stretch relative leading-[21px] shrink-0">
                  Ultimate Guide To Dubai On A Budget – All You Need To Know
                </div>
              </div>
              <div className="flex-1 flex flex-col items-end justify-start gap-[49.4px] min-w-[209px] mq450:gap-[25px]">
                <div className="self-stretch h-[239.2px] flex flex-col items-start justify-start gap-[10.5px]">
                  <div className="self-stretch flex-1 relative rounded-2xl bg-ghostwhite overflow-hidden shrink-0" />
                  <div className="w-[251px] relative leading-[21px] inline-block shrink-0">
                    Discover the Magic of Luxembourg Gardens, Paris
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[23px]">
                  <button className="cursor-pointer [border:none] py-2 px-[42px] bg-whitesmoke-300 flex-1 rounded-3xs flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="h-6 w-[25px] relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/img-5.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0">
                      <div className="relative text-sm leading-[21px] font-semibold font-inter text-gray-300 text-left inline-block min-w-[108px]">
                        Browse them all
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[578.4px] flex flex-col items-start justify-start gap-[40.7px] min-w-[578.4px] max-w-full font-poppins mq900:gap-[20px] mq900:min-w-full mq1600:flex-1">
          <div className="flex flex-row items-start justify-start py-0 px-[35px] box-border max-w-full">
            <div className="flex flex-row items-start justify-start gap-[39.2px] mq450:flex-wrap mq450:gap-[20px] mq1600:flex-1">
              <div className="relative leading-[22px] inline-block min-w-[121px]">
                Cuisine crawl
              </div>
              <div className="relative leading-[22px] inline-block min-w-[113px]">{`Hacks & Tips`}</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10.5px] max-w-full text-sm">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq900:flex-wrap">
              <div className="h-[186.7px] flex-1 relative rounded-2xl bg-ghostwhite overflow-hidden min-w-[181px] shrink-0" />
              <div className="h-[186.7px] flex-1 relative rounded-2xl bg-ghostwhite overflow-hidden min-w-[181px] shrink-0" />
            </div>
            <div className="w-[565.4px] flex flex-row items-start justify-start gap-[14.2px] max-w-full mq900:flex-wrap">
              <div className="flex-1 relative leading-[21px] inline-block min-w-[185px] shrink-0">{`The Best Time To Visit Dubai – Weather, Events & More`}</div>
              <div className="w-[266.2px] relative leading-[21px] inline-block shrink-0">
                Discover the Magic of Parc Monceau, Paris
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
