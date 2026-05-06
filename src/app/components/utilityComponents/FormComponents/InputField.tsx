type Colors = "--white" | "--black";

type InputProps = {
  placeholder?: string;
  color?: Colors;
};

const InputField = ({ placeholder, color = "--black" }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{
        borderColor: `var(${color})`,
        color: `var(${color})`,
      }}
      className="w-full h-[40] px-4 py-2 border-2 rounded-[5] outline-none bg-transparent placeholder-gray-400 focus:ring-0"
    />
  );
};

export default InputField;
