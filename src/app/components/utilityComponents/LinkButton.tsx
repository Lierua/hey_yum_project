import Link from "next/link";

type Colors =
  | "--white"
  | "--black"
  | "--orange"
  | "--yellow"
  | "--green"
  | "--light_green"
  | "--blue"
  | "--magenta";

type Props = {
  text: string;
  link: string;
  color: Colors;
};

const LinkButton = ({ text, link, color }: Props) => {
  const colorMap: Record<Colors, Colors> = {
    "--black": "--white",
    "--white": "--black",
    "--orange": "--light_green",
    "--yellow": "--blue",
    "--green": "--magenta",
    "--blue": "--orange",
    "--light_green": "--orange",
    "--magenta": "--green",
  };

  const antiColor = colorMap[color];

  return (
    <Link href={`/${link}`}>
      <div
        style={
          {
            "--btn-color": `var(${color})`,
            "--btn-anti": `var(${antiColor})`,
          } as React.CSSProperties
        }
        className="w-[170] font-bold text-center border-3 border-(--btn-color) rounded-full px-4 py-2 
      text-(--btn-color) transition-all duration-200 
      hover:bg-(--btn-color) hover:text-(--btn-anti)"
      >
        {text}
      </div>
    </Link>
  );
};

export default LinkButton;
