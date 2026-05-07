import Image from "next/image";
import HeaderOneComp from "../utilityComponents/HeaderOneComp";

type ItemProps = {
  image: string;
  year: string;
  header: string;
  text: string;
  styling?: string;
  imgstyling?: string;
};

const AwardsSec = () => {
  return (
    <section
      className="grid grid-rows-[0.2fr_1fr_1fr_1fr] gap-8 S_Content_width mx-auto p-4
    md:grid-cols-[minmax(0,800px)_minmax(10px,200px)_minmax(0,800px)] md:[&>*:nth-child(2)]:col-span-2 md:[&>*:nth-child(3)]:col-span-2  md:[&>*:nth-child(3)]:col-start-2 
    md:[&>*:nth-child(4)]:col-span-2"
    >
      <div className="grid col-span-full items-center justify-center w-full">
        <HeaderOneComp text="Awards" />
      </div>
      <AwardItem image="great_taste_award.png" year="2019 & 2021" header="Great taste award" text="We create divine, mouthwatering, ecolicious sweets. Ours is candy  without the makeup – natural in look and taste. And HEY! Turns out  ingredients that are less harmful to the planet and our bodies also  taste totally excellent." />
      <AwardItem image="junior_design_awards.png" year="2019" styling="items-end" imgstyling=" justify-end" header="Junior design awards" text="Nothing that looks or tastes like an additive, preservative, artificial  colour or flavour finds its crew in our packs. Instead, our candy is  certified ORGANIC" />
      <AwardItem image="natural_organic_awards.png" year="2016" header="Naural & organic awards scandinavia" text="We think that in life it’s not about perfection - its about balance. We’re not a superfood, we’re sweets - but we’re something naughty that’s made only of things that are nice." />
    </section>
  );
};

const AwardItem = ({ image, year, header, text, styling, imgstyling }: ItemProps) => {
  return (
    <div className="flex flex-col md:grid grid-cols-[1fr_3fr] gap-4 Textbox_width">
      <div className={`h-fit w-full grid  ${imgstyling}`}>
        <Image src={`/assets/images/home/${image}`} alt="image of an award" width={200} height={200} className="object-fill object-center" />
      </div>
      <div className={`flex flex-col gap-1 md:items-start ${styling}`}>
        <h3>{year}</h3>
        <h2 className="leading-[125%]!">{header}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AwardsSec;
