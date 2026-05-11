import Image from "next/image";
import SubmitButton from "../utilityComponents/SubmitButton";
import BasketCounter from "./BasketCounter";

type ProductResponse = {
  id: string;
  details_imgs: string[];
  name: string;
  description: string;
  product_tags: {
    tags: {
      name: string;
      tag_icons: string;
    };
  }[];
};

type Props = {
  productDetails: ProductResponse;
};

const DetailsInfo = ({ productDetails }: Props) => {
  return (
    <div className="max-w-[650] h-fit flex flex-col px-4 sticky top-0">
      <h3 className="">10 poser, 100g (1kg)</h3>
      <div className="flex">
        <h2 className="mb-2.5">{productDetails.name}</h2>
        <Image
          loading="eager"
          src={`/assets/images/details/eu-organic-logo-600x400_0-300x200 2.png`}
          width={300}
          height={150}
          alt={"eu-organic-logo"}
          className=" h-[45] w-[63] rounded-(--std_rounded) ml-auto"
        />
      </div>
      <p>{productDetails.description}</p>
      <div className="mt-8 flex gap-[20]">
        {productDetails.product_tags.map((tag, index) => (
          <div key={tag.tags.name} className="flex flex-col">
            <img
              loading="eager"
              src={tag.tags.tag_icons}
              alt={tag.tags.name}
              className="object-cover h-[70] w-[70] mx-auto"
            />
            <span className="text-center font-[600]!" key={tag.tags.name}>
              {tag.tags.name}
            </span>
          </div>
        ))}
      </div>
      <p className="font-[400]! text-[40px]! uppercase my-8">250 kr</p>
      <BasketCounter />
      <div className="[&>*]:w-full mt-4">
        <SubmitButton color="--orange" text="Tilføj til kurv" />
      </div>
    </div>
  );
};

export default DetailsInfo;
