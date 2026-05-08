type ProductResponse = {
  id: string;
  details_imgs: string[];
  name: string;
};

type Props = {
  productDetails: ProductResponse;
};

const DetailsImg = ({ productDetails }: Props) => {
  return (
    <div className="max-w-[530] flex-col flex gap-[30]">
      <div className="relative w-full max-h-[750] overflow-hidden">
        <img
          loading="eager"
          src={productDetails.details_imgs[0]}
          alt={productDetails.name}
          className="object-cover h-auto w-auto"
        />
      </div>
      <div className="relative w-full max-h-[500] overflow-hidden">
        <img
          loading="eager"
          src={productDetails.details_imgs[1]}
          alt={productDetails.name}
          className="object-cover h-auto w-auto"
        />
      </div>
      <div className="grid grid-cols-2 gap-[30]">
        <div className="relative w-full max-h-[340] overflow-hidden">
          <img
            loading="eager"
            src={productDetails.details_imgs[1]}
            alt={productDetails.name}
            className="object-cover h-auto w-auto"
          />
        </div>
        <div className="relative w-full max-h-[340] overflow-hidden">
          <img
            loading="eager"
            src={productDetails.details_imgs[1]}
            alt={productDetails.name}
            className="object-cover h-auto w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsImg;
