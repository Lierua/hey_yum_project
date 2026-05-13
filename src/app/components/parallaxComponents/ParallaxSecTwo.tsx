import Image from "next/image";

export default function ParallaxSecTwo() {
  return (
    <section className="grid h-[65vh] max-h-[500] overflow-clip bg-(--black)">
      {/*Top layer*/}
      <div className=" w-full p_div z-20 col-1 row-1 self-center">
        <h1 className="text-[14rem]! leading-[1.1] text-center text-(--white) font-light!">PLAYFULLY TASTY</h1>
      </div>

      {/*Bottomlayer*/}

      {/* <img src="/assets/images/home/para_three.svg" alt="product" className="img col-1 row-1" /> */}

      <div className="p_div z-10 flex w-full h-[70vh] col-1 row-1">
        <div
          className=" relative w-full h-full [&>img]:absolute [&>img:nth-child(1)]:top-[5%] [&>img:nth-child(1)]:left-[10%] [&>img:nth-child(2)]:top-[20%] [&>img:nth-child(2)]:right-[8%]
          [&>img:nth-child(3)]:bottom-[12%] [&>img:nth-child(3)]:left-[15%] [&>img:nth-child(4)]:top-[40%] [&>img:nth-child(4)]:left-[45%] [&>img:nth-child(5)]:bottom-[5%] [&>img:nth-child(5)]:right-[20%]
          [&>img:nth-child(6)]:top-[12%] [&>img:nth-child(6)]:left-[70%] [&>img:nth-child(7)]:bottom-[25%] [&>img:nth-child(7)]:left-[60%] [&>img:nth-child(8)]:top-[65%] [&>img:nth-child(8)]:right-[5%]"
        >
          <img src="/assets/images/home/star.svg" alt="product" className="w-[5px] aspect-square" />
          <img src="/assets/images/home/rectangle.svg" alt="product" className="w-[30px]" />
          <img src="/assets/images/home/star.svg" alt="product" className="w-[150px] aspect-square" />
          <img src="/assets/images/home/rectangle.svg" alt="product" className="w-[30px]" />
          <img src="/assets/images/home/star.svg" alt="product" className="w-[80px] aspect-square" />
          <img src="/assets/images/home/rectangle.svg" alt="product" className="w-[10px]" />
          <img src="/assets/images/home/star.svg" alt="product" className="w-[100px] aspect-square" />
          <img src="/assets/images/home/rectangle.svg" alt="product" className="w-[170px]" />
        </div>
      </div>
    </section>
  );
}
