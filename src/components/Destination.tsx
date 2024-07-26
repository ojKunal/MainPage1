import { FunctionComponent } from "react";
import DestinationIntro from "./DestinationIntro";
import DivcnCardcnCard3 from "./DivcnCardcnCard3";
import DivcnCardcnCard2 from "./DivcnCardcnCard2";

export type DestinationType = {
  className?: string;
};

      const Destination: FunctionComponent<DestinationType> = ({
        className = "",
      }) => {
  return (
    <section
      className={` self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[94.9px] box-border max-w-full shrink-0 text-left text-13xl text-gray-300 font-inter mq900:pb-[62px] mq900:box-border ${className} overflow-hidden`}
    >
      <div className="w-full flex flex-col items-start justify-start gap-[23px] max-w-full">
        <DestinationIntro
          trendingDestinations="Trending Destinations"
          placesThatTravelersAreAdd="Places that travelers are adding to their bucket lists"
          divcnSliderArrowsArrowcnS="/divcn--slider--arrows--arrowcn--slider--arrows--disabledcn--slider--arrows--prevarrow-1.svg"
          divcnSliderArrowsArrowcnS1="/divcn--slider--arrows--arrowcn--slider--arrows--nextarrow-1.svg"
        />
        <div className="w-full h-[400px] shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-5 box-border gap-[20px] max-w-full text-base font-poppins">
          <div className="w-full overflow-x-auto flex flex-col items-start justify-start gap-[20px]">
            <div className="flex flex-row items-start justify-start gap-[20px]">
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
                propWidth="280px"
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
              {/* Add more cards if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
