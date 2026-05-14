import Image from "next/image";
type ProductResponse = {
  id: string;
  details_imgs: string[];
  name: string;
  card_imgs: string[];
};

type Props = {
  productDetails: ProductResponse;
};

const DetailsImg = ({ productDetails }: Props) => {
  return (
    <div className="max-w-[530] flex-col flex gap-[20] pt-[6rem]">
      <div className="relative w-full max-h-[750px] overflow-hidden grid rounded-(--card_rounded) group">
        {/* Base image */}
        <img
          src={productDetails.card_imgs[0]}
          alt={productDetails.name}
          className="col-1 row-1 object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110 "
        />

        {/* Reveal image */}
        <img
          src={productDetails.card_imgs[1]}
          alt={productDetails.name}
          className="col-1 row-1 object-cover w-full h-full
                  transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]
                  [clip-path:circle(0%_at_50%_50%)] group-hover:scale-110
                  group-hover:[clip-path:circle(150%_at_50%_50%)]"
        />
      </div>
      <div className="relative w-full grid max-h-[700] overflow-hidden rounded-(--card_rounded) group">
        <img
          loading="eager"
          src={productDetails.details_imgs[1]}
          alt={productDetails.name}
          className="object-cover col-1 row-1
          transition-all duration-200 ease-in
          group-hover:scale-105"
        />

        <Image
          loading="eager"
          src="/assets/svg/Mask_4.svg"
          alt="Mask"
          fill
          sizes="w-[431] h-[484]"
          className="object-cover col-1 row-1 scale-[3]
          transition-all duration-300 ease-in pointer-events-none
          group-hover:scale-105 w-auto h-auto"
        />
      </div>
      <div className="grid grid-cols-2 gap-[20]">
        <div className="relative w-full h-[340] overflow-hidden rounded-(--card_rounded) group grid">
          <img
            loading="eager"
            src={productDetails.details_imgs[2]}
            alt={productDetails.name}
            className="object-cover col-1 row-1 w-full h-full
          transition-all duration-200 ease-in
          group-hover:scale-105"
          />

          <Image
            loading="eager"
            src="/assets/svg/Mask_1.svg"
            alt="Mask"
            fill
            sizes="w-[431] h-[484]"
            className="object-cover col-1 row-1 scale-[3]
          transition-all duration-300 ease-in pointer-events-none
          group-hover:scale-105 w-auto h-auto"
          />
        </div>
        <div className="relative w-full max-h-[340] overflow-hidden rounded-(--card_rounded) group grid">
          <img
            loading="eager"
            src={productDetails.details_imgs[1]}
            alt={productDetails.name}
            className="object-cover w-full h-full
          transition-all duration-200 ease-in
          group-hover:scale-105"
          />

          <Image
            loading="eager"
            src="/assets/svg/Mask_2.svg"
            alt="Mask"
            fill
            sizes="w-[431] h-[484]"
            className="object-cover col-1 row-1 scale-[3]
          transition-all duration-300 ease-in pointer-events-none
          group-hover:scale-105 w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsImg;
