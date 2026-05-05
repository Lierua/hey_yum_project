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
  color: Colors;
};

const SubmitButton = ({ text, color = "--black" }: Props) => {
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
    <button
      type="submit"
      style={
        {
          "--btn-color": `var(${color})`,
          "--btn-anti": `var(${antiColor})`,
        } as React.CSSProperties
      }
      className="
      w-[170] font-bold text-center rounded-[5] px-4 py-2 
      border-2 h-[40] border-[var(--btn-color)] text-[16px]
      text-[var(--btn-anti)] bg-[var(--btn-color)] transition-all duration-200 
      hover:bg-[var(--btn-anti)] hover:text-[var(--btn-color)] cursor-pointer"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
