import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent4Type = {
  className?: string;
  divcnCardcnCard7?: string;
  tokyo?: string;
  perNight?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  divcnCardcnCard7,
  tokyo,
  perNight,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propAlignSelf, propWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[16.8px] min-w-[348px] max-w-full text-left text-4xl text-black font-poppins mq450:min-w-full ${className}`}
      style={frameDivStyle}
    >
      <img
        className="self-stretch h-[492.7px] relative rounded-2xl max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={divcnCardcnCard7}
      />
      <div className="flex flex-col items-start justify-start gap-[6.5px]">
        <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit inline-block min-w-[72px] mq450:text-lg mq450:leading-[22px]">
          {tokyo}
        </h3>
        <div className="flex flex-row items-start justify-start gap-[3.5px] text-base">
          <div className="relative tracking-[0.16px] leading-[24px]">{`Deals starting at `}</div>
          <div className="relative tracking-[0.16px] leading-[24px] font-semibold font-inter inline-block min-w-[108px]">
            {perNight}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
