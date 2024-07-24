import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <footer
      className={`flex flex-col items-start justify-start gap-[90.6px] max-w-full text-left text-sm text-gray-100 font-inter mq450:gap-[23px] mq900:gap-[45px] ${className}`}
    >
      <div className="w-[1302.4px] flex flex-row items-end justify-start gap-[138.7px] max-w-full mq450:gap-[17px] mq900:gap-[35px] mq1275:flex-wrap mq1275:gap-[69px]">
        <div className="w-[356.7px] flex flex-row items-start justify-start gap-[25.8px] min-w-[356.7px] max-w-full mq450:flex-wrap mq900:min-w-full mq1275:flex-1">
          <div className="flex flex-col items-start justify-start gap-[35px] min-w-[113px] mq450:flex-1">
            <a className="[text-decoration:none] relative leading-[17px] font-semibold text-[inherit] inline-block min-w-[113px]">
              Top destinations
            </a>
            <div className="flex flex-col items-start justify-start gap-[10px] font-poppins">
              <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[71px]">
                Las Vegas
              </a>
              <div className="relative leading-[17px] inline-block min-w-[83px]">
                Los Angeles
              </div>
              <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[49px]">
                Seattle
              </a>
              <div className="relative leading-[17px] inline-block min-w-[91px]">
                Miami Beach
              </div>
              <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[54px]">
                Toronto
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[35px] min-w-[142px] font-poppins">
            <div className="relative leading-[17px]">{`Top countries & regions`}</div>
            <div className="self-stretch flex flex-row items-start justify-end">
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[60px]">
                  Chicago
                </a>
                <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[52px]">
                  London
                </a>
                <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[60px]">
                  Bangkok
                </a>
                <div className="relative leading-[17px] inline-block min-w-[109px]">
                  Fort Lauderdale
                </div>
                <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[51px]">
                  Munich
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-between min-w-[358px] max-w-full gap-[20px] font-poppins mq450:flex-wrap mq900:min-w-full">
          <div className="w-[98px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[10px]">
            <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[48px]">
              Boston
            </a>
            <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[71px]">
              San Diego
            </a>
            <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[25px]">
              Bali
            </a>
            <div className="relative leading-[17px] inline-block min-w-[72px]">
              Barcelona
            </div>
            <div className="relative leading-[17px] inline-block min-w-[59px]">
              Portland
            </div>
          </div>
          <div className="w-[97.9px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[10px]">
            <div className="relative leading-[17px] inline-block min-w-[57px]">
              Orlando
            </div>
            <div className="relative leading-[17px] inline-block min-w-[43px]">
              Miami
            </div>
            <div className="relative leading-[17px] inline-block min-w-[45px]">
              Lisbon
            </div>
            <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[55px]">
              Pattaya
            </a>
            <div className="relative leading-[17px] inline-block min-w-[52px]">
              Sydney
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <div className="relative leading-[17px] inline-block min-w-[91px]">
              Myrtle Beach
            </div>
            <div className="relative leading-[17px] inline-block min-w-[98px]">
              San Francisco
            </div>
            <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[84px]">
              Amsterdam
            </a>
            <div className="relative leading-[17px] inline-block min-w-[57px]">
              Warsaw
            </div>
            <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[39px]">
              Berlin
            </a>
          </div>
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <div className="relative leading-[17px] inline-block min-w-[45px]">
              Dublin
            </div>
            <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[64px]">
              New York
            </a>
            <div className="relative leading-[17px] inline-block min-w-[50px]">
              Madrid
            </div>
            <div className="relative leading-[17px] inline-block min-w-[55px]">
              Geneva
            </div>
            <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[48px]">
              Venice
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-start justify-start gap-[58.4px] max-w-full mq900:gap-[29px]">
        <div className="w-[437.5px] flex flex-col items-start justify-start py-0 pr-[135px] pl-0 box-border gap-[178.3px] max-w-full text-36xl text-darkgray-100 mq450:gap-[89px] mq450:pr-5 mq450:box-border">
          <div className="self-stretch h-[121.1px] relative">
            <h1 className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[-2.2px] leading-[55px] font-extrabold font-inherit inline-block w-[302.4px] mq450:text-14xl mq450:leading-[33px] mq900:text-25xl mq900:leading-[44px]">
              Travel is for everyone
            </h1>
            <div className="absolute top-[66.1px] left-[253.1px] bg-hotpink w-4 h-[55px] flex flex-row items-start justify-start z-[1]">
              <h1 className="!m-[0] w-full absolute top-[-11.1px] right-[-1px] text-inherit tracking-[-2.2px] leading-[55px] font-extrabold font-inherit inline-block h-full mq450:text-14xl mq450:leading-[33px] mq900:text-25xl mq900:leading-[44px]">
                .
              </h1>
            </div>
          </div>
          <div className="w-[291px] flex flex-col items-start justify-start gap-[36.5px] text-xs text-gray-100 font-poppins mq450:gap-[18px]">
            <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
              <div className="w-[25px] flex flex-col items-start justify-end pt-0 px-0 pb-[1.4px] box-border">
                <img
                  className="w-[25px] h-[17px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-15.svg"
                />
              </div>
              <img
                className="h-5 w-[25px] relative overflow-hidden shrink-0 min-h-[20px]"
                loading="lazy"
                alt=""
                src="/frame-16.svg"
              />
              <img
                className="self-stretch w-3 relative max-h-full overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/frame-17.svg"
              />
              <img
                className="h-5 w-[21px] relative overflow-hidden shrink-0 object-cover min-h-[20px]"
                alt=""
                src="/frame-18@2x.png"
              />
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/frame-19.svg"
              />
              <div className="w-[17px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.1px] box-border">
                <img
                  className="w-[17px] h-[15.9px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-20.svg"
                />
              </div>
              <img
                className="h-5 w-[21px] relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/frame-21.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[29.2px]">
              <div className="relative tracking-[0.24px] leading-[15px] inline-block min-w-[120px]">{`Terms & conditions`}</div>
              <div className="relative tracking-[0.24px] leading-[15px] inline-block min-w-[86px]">
                Privacy policy
              </div>
            </div>
          </div>
        </div>
        <div className="w-[189.2px] flex flex-col items-start justify-start pt-[11.6px] px-0 pb-0 box-border text-lg text-gray-300">
          <div className="self-stretch flex flex-col items-start justify-start gap-[11.6px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4.5px]">
              <div className="self-stretch relative leading-[27px] font-semibold">
                Millions of places to stay, one app.
              </div>
              <img
                className="w-[163px] h-12 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/img-12.svg"
              />
            </div>
            <img
              className="w-[163px] h-12 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/img-13.svg"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[10.6px] pb-0 pr-4 pl-0 font-poppins">
          <div className="flex flex-col items-start justify-start gap-[15px]">
            <div className="relative text-lg leading-[27px] uppercase font-semibold font-inter text-gray-300 inline-block min-w-[123px]">
              Cuddlynest
            </div>
            <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[64px]">
              About us
            </a>
            <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[79px]">
              Contact us
            </a>
            <div className="relative tracking-[0.14px] leading-[21px] inline-block min-w-[123px]">
              List your property
            </div>
            <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit]">
              CuddlyCare Program
            </a>
            <div className="relative tracking-[0.14px] leading-[21px]">
              The CuddlyNest Promise
            </div>
            <div className="relative tracking-[0.14px] leading-[21px]">{`FAQ & Help Center`}</div>
            <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[76px]">
              Newsroom
            </a>
            <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[32px]">
              Blog
            </a>
          </div>
        </div>
        <div className="w-[365.6px] flex flex-col items-start justify-start pt-[10.6px] px-0 pb-0 box-border max-w-full font-poppins">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[15px] min-w-[146px] mq450:flex-1">
              <div className="relative text-lg leading-[27px] uppercase font-semibold font-inter text-gray-300">
                Unique stays
              </div>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[121px]">
                Family vacations
              </a>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[119px]">
                Adventure travel
              </a>
              <div className="relative tracking-[0.14px] leading-[21px]">
                Romantic getaways
              </div>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[89px]">
                Group travel
              </a>
              <div className="relative tracking-[0.14px] leading-[21px] inline-block min-w-[107px]">
                Business travel
              </div>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit]">
                Digital nomad travel
              </a>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[75px]">
                Solo travel
              </a>
              <div className="relative tracking-[0.14px] leading-[21px] inline-block min-w-[87px]">
                Luxury stays
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[15px] min-w-[118px] mq450:flex-1">
              <div className="relative text-lg leading-[27px] uppercase font-semibold font-inter text-gray-300 inline-block min-w-[82px]">
                Explore
              </div>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[45px]">
                Hotels
              </a>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[118px]">
                Vacation rentals
              </a>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[52px]">
                Hostels
              </a>
              <div className="relative tracking-[0.14px] leading-[21px] inline-block min-w-[38px]">
                Villas
              </div>
              <div className="relative tracking-[0.14px] leading-[21px] inline-block min-w-[36px]">{`B&Bs`}</div>
              <a className="[text-decoration:none] relative tracking-[0.14px] leading-[21px] text-[inherit] inline-block min-w-[85px]">
                Apartments
              </a>
              <div className="relative tracking-[0.14px] leading-[21px] inline-block min-w-[51px]">
                Cabins
              </div>
              <div className="relative tracking-[0.14px] leading-[21px] inline-block min-w-[78px]">
                Bungalows
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
