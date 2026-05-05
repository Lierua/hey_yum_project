type TextProps = {
  tagheader?: string;
  header: string;
  text: string;
};

const TextBox = ({ tagheader, header, text }: TextProps) => {
  const normalized = text.replace(/\\n/g, "\n");
  return (
    <div className="Textbox_width flex flex-col p-4">
      <h3 className="">{tagheader}</h3>
      <h2 className="mb-2.5">{header}</h2>
      <p className="whitespace-pre-line">{normalized}</p>
    </div>
  );
};

export default TextBox;
