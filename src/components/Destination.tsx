import { FunctionComponent } from "react";
import DestinationIntro from "./DestinationIntro";
import DivcnCardcnCard3 from "./DivcnCardcnCard3";
import DivcnCardcnCard2 from "./DivcnCardcnCard2";
import DivcnCardcnCard1 from "./DivcnCardcnCard1";

export type DestinationType = {
  className?: string;
};

const Destination: FunctionComponent<DestinationType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[94.9px] box-border max-w-full shrink-0 text-left text-13xl text-gray-300 font-inter mq900:pb-[62px] mq900:box-border ${className}`}
    >
      <div className="w-[1476.1px] flex flex-col items-start justify-start gap-[23px] max-w-full">
        <DestinationIntro
          trendingDestinations="Trending Destinations"
          placesThatTravelersAreAdd="Places that travelers are adding to their bucket lists"
          divcnSliderArrowsArrowcnS="/divcn--slider--arrows--arrowcn--slider--arrows--disabledcn--slider--arrows--prevarrow-1.svg"
          divcnSliderArrowsArrowcnS1="/divcn--slider--arrows--arrowcn--slider--arrows--nextarrow-1.svg"
        />
        <div className="w-[1476.1px] h-[400px] overflow-x-auto shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-5 box-border gap-[20px] max-w-full text-base font-poppins">
          <div className="mb-[-44px] h-[424px] w-[1780px] shrink-0 flex flex-col items-start justify-start gap-[20px] max-w-[121%]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <div className="w-px h-0 relative inline-block">{` `}</div>
              <div className="w-[1576px] flex-1 overflow-x-auto flex flex-row items-start justify-start gap-[20px] max-w-full text-4xl text-white">
                <DivcnCardcnCard3
                  imgcnImageDefault="/imgcn--imagedefault-8@2x.png"
                  london="London"
                  prop="€71"
                />
                <DivcnCardcnCard3
                  imgcnImageDefault="/imgcn--imagedefault-9@2x.png"
                  london="Barcelona"
                  prop="€132"
                  propWidth="280px"
                  propAlignSelf="unset"
                />
                <DivcnCardcnCard3
                  imgcnImageDefault="/imgcn--imagedefault-10@2x.png"
                  london="Miami"
                  prop="€138"
                  propWidth="580px"
                  propAlignSelf="unset"
                />
                <DivcnCardcnCard3
                  imgcnImageDefault="/imgcn--imagedefault-11@2x.png"
                  london="Paris"
                  prop="€85"
                  propWidth="280px"
                  propAlignSelf="unset"
                />
                <DivcnCardcnCard2
                  imgcnImageDefault="/imgcn--imagedefault-12@2x.png"
                  dubai="Dubai"
                  prop="€38"
                />
              </div>
            </div>
            <div className="w-px h-6 relative inline-block">{` `}</div>
          </div>
          <DivcnCardcnCard3
            imgcnImageDefault="/imgcn--imagedefault-13@2x.png"
            london="Prague"
            prop="€39"
            propWidth="280px"
            propAlignSelf="stretch"
          />
          <DivcnCardcnCard2
            imgcnImageDefault="/imgcn--imagedefault-14@2x.png"
            dubai="Bali"
            prop="€8"
          />
          <DivcnCardcnCard1 delhi="Delhi" prop="€18" />
          <DivcnCardcnCard1 delhi="Bangkok" prop="€9" />
          <DivcnCardcnCard1 delhi="Amsterdam" prop="€213" />
          <DivcnCardcnCard1 delhi="Tokyo" prop="€62" />
          <DivcnCardcnCard1 delhi="Berlin" prop="€71" />
          <DivcnCardcnCard1 delhi="Lisbon" prop="€40" />
          <DivcnCardcnCard1 delhi="Madrid" prop="€64" />
          <DivcnCardcnCard1 delhi="Munich" prop="€65" />
          <DivcnCardcnCard1 delhi="Sydney" prop="€62" />
          <DivcnCardcnCard1 delhi="Hong Kong" prop="€29" />
          <DivcnCardcnCard1 delhi="Nice" prop="€72" />
          <DivcnCardcnCard1 delhi="Seoul" prop="€45" />
          <DivcnCardcnCard1 delhi="Abu Dhabi" prop="€40" />
        </div>
      </div>
    </section>
  );
};

export default Destination;
