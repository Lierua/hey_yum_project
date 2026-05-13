import HeaderOneComp from "../../utilityComponents/HeaderOneComp";
import Carousel from "./Carousel";

const Where = () => {
  return (
    <div className="fullbleed grid w-screen">
      <div className="mx-8 mb-[50]">
        <HeaderOneComp text="Where you might have seen us" />
      </div>
      <Carousel direction="right" />
      <div className="mt-[-2]">
        <Carousel direction="" />
      </div>
    </div>
  );
};

export default Where;
