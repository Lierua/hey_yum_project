import DropDown from "./DropDown";

type ProductResponse = {
  product_ingredients: {
    ingredients: {
      name: string;
    };
  }[];

  product_nutrition: {
    fat: number;
    salt: number;
    sugars: number;
    protein: number;
    energy_kj: number;
    saturates: number;
    per_amount: string;
    energy_kcal: number;
    carbohydrates: number;
  }[];
};

type Props = {
  id: string;
};

export default async function IngredientsSec({ id }: Props) {
  const response = await fetch(`https://towbvljdqlfyzhysgbtd.supabase.co/rest/v1/products?select=*,product_ingredients(ingredients(name)),product_nutrition(*)&id=eq.${id}`, {
    headers: {
      apikey: `sb_publishable_hQLCA1gMNkb9AcWu9-IHcA_WylH6nPP`,
      Authorization: `Bearer sb_publishable_hQLCA1gMNkb9AcWu9-IHcA_WylH6nPP`,
      "Content-Type": "application/json",
    },
  });

  const [productDetails] = (await response.json()) as ProductResponse[];

  return (
    <section className="grid border-b-2">
      <DropDown header="Ingredients">
        <p>{productDetails.product_ingredients.map((item) => item.ingredients.name).join(", ")}</p>
      </DropDown>

      <DropDown header="Nutrition">
        <div className="grid gap-2">
          {productDetails.product_nutrition.map((item, index) => (
            <div key={index}>
              <p>Energy (kj): {item.energy_kj}</p>
              <p>Fat: {item.fat}</p>
              <p>Carbohydrates: {item.carbohydrates}</p>
              <p>Protein: {item.protein}</p>
              <p>Saturates: {item.saturates}</p>
              <p>Sugars: {item.sugars}</p>
              <p>Salt: {item.salt}</p>
              <p>Per amount: {item.per_amount}</p>
            </div>
          ))}
        </div>
      </DropDown>
    </section>
  );
}
