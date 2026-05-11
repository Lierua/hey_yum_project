import Image from "next/image";
import DropDown from "./ingredientsDropDownComps/DropDown";
import IngredientsSec from "./ingredientsDropDownComps/IngridientsSec";

type ProductResponse = {
  id: string;
  details_imgs: string[];
  name: string;
  description: string;
};

type Props = {
  productDetails: ProductResponse;
};

const DetailsInfo = ({ productDetails }: Props) => {
  return (
    <div className="max-w-[650] h-fit flex flex-col p-4 sticky top-0">
      <h3 className=""></h3>
      <div className="flex">
        <h2 className="mb-2.5">{productDetails.name}</h2>
        <Image loading="eager" src={`/assets/images/details/eu-organic-logo-600x400_0-300x200 2.png`} width={300} height={150} alt={"eu-organic-logo"} className=" h-[55] w-[78] rounded-(--std_rounded) ml-auto" />
      </div>
      <p>{productDetails.description}</p>
      <IngredientsSec id={productDetails.id} />
      
    </div>
  );
};

export default DetailsInfo;
