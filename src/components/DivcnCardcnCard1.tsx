import { FunctionComponent } from "react";

export type DivcnCardcnCard1Type = {
  className?: string;
  delhi?: string;
  prop?: string;
};

const DivcnCardcnCard1: FunctionComponent<DivcnCardcnCard1Type> = ({
  className = "",
  delhi,
  prop,
}) => {
  return (
    <div
      className={`self-stretch w-[280px] shadow-[0px_2px_2px_rgba(87,_75,_144,_0.15)] rounded-2xl bg-darkgray-200 overflow-hidden shrink-0 flex flex-row items-start justify-start text-left text-4xl text-white font-poppins ${className}`}
    >
      <div className="self-stretch flex-1 rounded-2xl overflow-hidden flex flex-col items-start justify-end pt-[316.2px] px-5 pb-[11.7px] gap-[0.1px] mq450:pt-[206px] mq450:pb-5 mq450:box-border">
        <h3 className="m-0 w-[60px] relative text-inherit leading-[27.6px] font-bold font-inherit inline-block mq450:text-lg mq450:leading-[22px]">
          {delhi}
        </h3>
        <div className="w-[154.3px] flex-1 flex flex-row items-start justify-start gap-[4.2px] text-base">
          <div className="self-stretch w-[42px] relative tracking-[0.16px] leading-[19px] font-medium inline-block">{`From `}</div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start">
            <div className="w-[30px] relative tracking-[0.16px] leading-[19px] font-medium inline-block whitespace-nowrap">
              {prop}
            </div>
            <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[19px] font-medium z-[1] ml-[-0.9px]">
              {" "}
              per night
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivcnCardcnCard1;
