import Link from "next/link";

type Page = "home" | "products" | "aboutUs" | "contact";

type Props = {
  page: Page;
};

const Nav = ({ page }: Props) => {
  return (
    <div className="grid  border-b-2 border-(--black50) w-full">
      <nav className="flex gap-[20] mx-auto sticky h-[60] [&>*]:my-auto">
        <Link href={"/"}>
          <p
            className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "home" && "font-semibold"} `}
          >
            Home
          </p>
        </Link>
        <Link href={"/productList"}>
          <p
            className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "products" && "font-semibold"} `}
          >
            Products
          </p>
        </Link>
        <Link href={"/aboutUs"}>
          <p
            className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "aboutUs" && "font-semibold"} `}
          >
            About us
          </p>
        </Link>
        <Link href={"/contact"}>
          <p
            className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "contact" && "font-semibold"} `}
          >
            Contact
          </p>
        </Link>
      </nav>
      <p className="font-normal">Normal (400)</p>
      <p className="font-medium">Medium (500)</p>
      <p className="font-semibold">Semibold (600)</p>
      <p className="font-bold">Bold (700)</p>
    </div>
  );
};

export default Nav;
