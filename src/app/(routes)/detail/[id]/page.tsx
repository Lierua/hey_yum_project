import DetailsInfo from "@/app/components/detailComponents/DeailsInfo";
import DetailsImg from "@/app/components/detailComponents/DetailsImg";
import Nav from "@/app/components/utilityComponents/Header/Nav";
import ProductsComponent from "@/app/components/utilityComponents/Products/ProductsComponent";

type Props = {
  params: { id: string };
};

type ProductResponse = {
  id: string;
  name: string;
  card_imgs: string[];
  details_imgs: string[];
  description: string;
  product_tags: {
    tags: {
      name: string;
      tag_icons: string;
    };
  }[];
};

export default async function ProductsPage({ params }: Props) {
  const { id } = await params;

  console.log("id =", id);

  const response = await fetch(
    `https://towbvljdqlfyzhysgbtd.supabase.co/rest/v1/products?select=*,product_tags(tags(*))&id=eq.${id}`,
    {
      headers: {
        apikey: `sb_publishable_hQLCA1gMNkb9AcWu9-IHcA_WylH6nPP`,
        Authorization: `Bearer sb_publishable_hQLCA1gMNkb9AcWu9-IHcA_WylH6nPP`,
        "Content-Type": "application/json",
      },
    },
  );

  console.log(response.status);

  const [productDetails] = (await response.json()) as ProductResponse[];

  console.log("her -> ", productDetails);

  return (
    <div className="grid ">
      <Nav page="products" />

      <div className="ContentWitdh mt-(--mt_std)">
        <div className="grid gap-[20] grid-cols-[2fr_3fr] relative">
          <DetailsImg productDetails={productDetails} />
          <DetailsInfo productDetails={productDetails} />
        </div>
      </div>

      <ProductsComponent text="Related Products" />
    </div>
  );
}
