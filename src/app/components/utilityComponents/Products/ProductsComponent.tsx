import HeaderOneComp from "../HeaderOneComp";
import Link from "next/link";

type Props = {
  text: string;
};

type ProductResponse = {
  id: string;
  name: string;
  card_imgs: string[];
  product_tags: {
    tags: {
      name: string;
    };
  }[];
};

const ProductsComponent = async ({ text }: Props) => {
  const response = await fetch(
    "https://towbvljdqlfyzhysgbtd.supabase.co/rest/v1/products?select=*,product_tags(tags(name))",
    {
      headers: {
        apikey: `sb_publishable_hQLCA1gMNkb9AcWu9-IHcA_WylH6nPP`,
        Authorization: `Bearer sb_publishable_hQLCA1gMNkb9AcWu9-IHcA_WylH6nPP`,
        "Content-Type": "application/json",
      },
    },
  );

  console.log(response.status);

  const products = (await response.json()) as ProductResponse[];

  console.log(products);

  return (
    <div className="ContentWitdh ">
      <HeaderOneComp text={text} />
      <div className="gap-4 grid grid-cols-4">
        {products.map((product) => (
          <Link key={product.id} href={`/detail/${product.id}`}>
            <div className="max-w-[400] flex flex-col gap-1">
              <div className="relative w-full h-[500] overflow-hidden">
                <img
                  loading="eager"
                  src={product.card_imgs[0]}
                  alt={product.name}
                  className="object-cover h-auto w-auto"
                />
              </div>
              <h2 className="text-center font-lilita">{product.name}</h2>

              <div className="flex gap-2 mx-auto">
                {product.product_tags.map((tag, index) => (
                  <span className="text-[12px]" key={tag.tags.name}>
                    {tag.tags.name}{" "}
                    {index !== product.product_tags.length - 1 && (
                      <span>/</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="text-center font-[400]! text-[30px]! uppercase mt-1">
                250 kr
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
