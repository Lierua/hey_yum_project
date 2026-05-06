type Prop = {
  text: string;
};

const HeaderOneComp = ({ text }: Prop) => {
  return (
    <div className="w-fit h-fit">
      <h1>{text}</h1>
    </div>
  );
};

export default HeaderOneComp;
