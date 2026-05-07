import TextBox from "../utilityComponents/TextBox";
import HeaderOneComp from "../utilityComponents/HeaderOneComp";

const QualitySec = () => {
  return (
    <section
      className="grid grid-rows-[0.2fr_1fr_1fr_1fr] gap-8 S_Content_width mx-auto p-4
    md:grid-cols-[minmax(0,800px)_minmax(10px,200px)_minmax(0,800px)] md:[&>*:nth-child(2)]:col-span-2 md:[&>*:nth-child(3)]:col-span-2  md:[&>*:nth-child(3)]:col-start-2 
    md:[&>*:nth-child(4)]:col-span-2"
    >
      <div className="grid col-span-full items-center justify-center w-full">
        <HeaderOneComp text="Quality" />
      </div>
    </section>
  );
};
