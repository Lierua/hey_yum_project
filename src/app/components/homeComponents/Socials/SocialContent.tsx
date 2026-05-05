import Image from "next/image";
import SocialText from "./SocialsText";

const SocialContent = () => {
  return (
    <div className="grid grid-rows-2 gap-[60] max-h-[1020]">
      <div className="grid grid-cols-[1fr_1fr_2fr] gap-[40]">
        <div className="relative w-full h-[484]">
          <Image
            loading="eager"
            src="/assets/images/home/Social-img-1.png"
            alt="Social Media image"
            fill
            className="object-cover h-auto w-auto"
          />
        </div>
        <div className="relative w-full h-[484]">
          <Image
            loading="eager"
            src="/assets/images/home/Social-img-2.png"
            alt="Social Media image"
            fill
            className="object-cover h-auto w-auto"
          />
        </div>
        <div className="mx-auto self-center">
          <SocialText />
        </div>
      </div>
      <div className="grid grid-cols-[1fr_3fr_1fr] gap-[40]">
        <div></div>
        <div className="relative w-full h-[484] ml-auto">
          <Image
            loading="eager"
            src="/assets/images/home/Social-img-3.png"
            alt="Social Media image"
            fill
            className="object-cover w-auto h-auto"
          />
        </div>

        <div className="relative w-full h-[484]">
          <Image
            loading="eager"
            src="/assets/images/home/Social-img-4.png"
            alt="Social Media image"
            fill
            className="object-cover h-auto w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialContent;
