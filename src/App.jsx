import PrimaryBtn from "./components/PrimaryBtn";
import SecondaryBtn from "./components/SecondaryBtn";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}

function Header() {
  return (
    <header className="pt-[32px] px-[16px] bg-purple flex items-center justify-between">
      <img src="public/logo-light.svg" alt="logo" />
      <SecondaryBtn>Apply for access</SecondaryBtn>
    </header>
  );
}

function Hero() {
  return (
    <div className="pt-[64px] pb-[156px] bg-purple text-center relative">
      <h1 className="mb-[40px] fraunces font-semibold text-[50px] leading-[50px] tracking-0 text-white">
        Data <span className="secondaryBtnBorder">tailored</span> to your needs.
      </h1>
      <PrimaryBtn>Learn more</PrimaryBtn>
      <img className="heroPhone" src="public\image-hero.webp" />
    </div>
  );
}
