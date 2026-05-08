import Nav from "@/app/components/utilityComponents/Header/Nav";
import ProductsComponent from "@/app/components/utilityComponents/Products/ProductsComponent";

export default function ProductsPage() {
  return (
    <div className="grid">
      <Nav page="products" />

      <ProductsComponent text="Our product" />
    </div>
  );
}
