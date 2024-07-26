import { FunctionComponent } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent3 from "../components/FrameComponent3";
import Destination from "../components/Destination";
import AdvancedFilterLabel from "../components/AdvancedFilterLabel";
import Destinations from "../components/Destinations";
import GuestInput from "../components/GuestInput";
import FrameComponent1 from "../components/FrameComponent1";
import DivcnHpMediaWrapper from "../components/DivcnHpMediaWrapper";
import DivsubscribeSectionCon from "../components/DivsubscribeSectionCon";
import FrameComponent from "../components/FrameComponent";

const MainPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke-100 flex flex-row items-start justify-start py-0 px-0 box-border leading-normal tracking-normal overflow-hidden">
      <main className="w-full flex-1 bg-white flex flex-col items-start justify-start pt-0 px-0 box-border gap-[1.8px] shrink-0 mq450:h-auto mq900:pb-[304px] mq900:box-border mq1275:pb-[467px] mq1275:box-border">
        <FrameComponent5 />
        <FrameComponent3 />
        <Destination />
        <AdvancedFilterLabel />
        <Destinations />
        <GuestInput />
        <section className="self-stretch [background:linear-gradient(180deg,_rgba(255,_253,_245,_0),_rgba(255,_253,_245,_0.4))] flex flex-col items-start justify-start pt-[594.6px] px-[100px] pb-[40.2px] box-border gap-[99.4px] max-w-full shrink-0 mq450:gap-[25px] mq450:pl-5 mq450:pr-5 mq450:box-border mq900:gap-[50px] mq900:pl-[50px] mq900:pt-[163px] mq900:pr-[50px] mq900:box-border mq1275:pt-[251px] mq1275:pb-5 mq1275:box-border mq1600:h-auto">
          <FrameComponent1 />
          <DivcnHpMediaWrapper />
          <DivsubscribeSectionCon />
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default MainPage;
