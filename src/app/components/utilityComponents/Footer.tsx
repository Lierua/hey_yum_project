import InputField from "./FormComponents/InputField";
import SocialLinks from "./SocialLinks";
import SubmitButton from "./SubmitButton";

const Footer = () => {
  return (
    <div className="fullbleed bg-(--black) h-[550] flex flex-col gap-[50] px-[1rem] py-[2rem] mt-8 md:grid md:grid-cols-[1fr_2fr]">
      <div className="flex flex-col gap-[20] md:order-2">
        <p
          className="text-[24px]! text-(--white) font-bold text-center 
        md:text-left"
        >
          Get our latest news
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-[345] mx-auto md:mx-0 grid">
            <InputField color="--white" placeholder="Email" />
          </div>
          <div className="mx-auto md:mx-0 md:mr-auto">
            <SubmitButton text="Subscribe" color="--white" />
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col gap-[55]">
        <div className="flex flex-col gap-[25]">
          <p className="text-[24px]! text-(--white) font-bold text-center mx-auto  md:mx-2 md:text-left">
            Get our latest news
          </p>
          <div className="mx-auto md:mx-2">
            <SocialLinks color="--white" gap={30} size={50} />
          </div>
        </div>
        <div className="flex flex-col gap-[15]">
          <p className="text-[24px]! text-(--white) font-bold text-center mx-auto  md:mx-2 md:text-left">
            Contact
          </p>
          <p className="text-(--white) text-center mx-auto md:mx-2 md:text-left">
            Heyyum @email.com
          </p>
        </div>
        <p className="text-(--white) mt-auto">
          © 2026 -Sweet Intentions ApS, All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
