import { div, img } from "framer-motion/client";
import FlipCard from "./FlipCard";
import Image from "next/image";

const FlipCardSec = () => {
  return (
    <div className="flex flex-row gap-0 w-full h-[500] [&_h1]:text-[17rem]! *:flex *:text-center">
      <FlipCard
        front={<h1>H</h1>}
        back={
          <div className="w-full h-full">
            <Image src="/assets/images/home/trassic-garden.png" alt="image" width={500} height={500} className="object center object-cover" />
          </div>
        }
      />
      <FlipCard
        front={
          <div className="w-full h-full">
            <Image src="/assets/images/home/trassic-garden.png" alt="image" width={500} height={500} className="object center object-cover" />
          </div>
        }
        back={<h1>Y</h1>}
      />
      <FlipCard
        front={<h1>E</h1>}
        back={
          <div className="w-full h-full">
            <Image src="/assets/images/home/trassic-garden.png" alt="image" width={500} height={500} className="object center object-cover" />
          </div>
        }
      />

      <FlipCard
        front={
          <div className="w-full h-full">
            <Image src="/assets/images/home/trassic-garden.png" alt="image" width={500} height={500} className="object center object-cover" />
          </div>
        }
        back={<h1>U</h1>}
      />
      <FlipCard
        front={<h1>Y</h1>}
        back={
          <div className="w-full h-full">
            <Image src="/assets/images/home/trassic-garden.png" alt="image" width={500} height={500} className="object center object-cover" />
          </div>
        }
      />

      <FlipCard
        front={
          <div className="w-full h-full">
            <Image src="/assets/images/home/trassic-garden.png" alt="image" width={500} height={500} className="object center object-cover" />
          </div>
        }
        back={<h1>M</h1>}
      />
    </div>
  );
};

export default FlipCardSec;
