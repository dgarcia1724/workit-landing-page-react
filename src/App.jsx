import PrimaryBtn from "./components/PrimaryBtn";
import SecondaryBtn from "./components/SecondaryBtn";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <section className="pt-[155px] pb-[328px] px-[16px] text-center grid gap-[40px]">
        <OneTwoThree
          number="1"
          title="Actionable insights"
          text="Optimize your products, improve customer satisfaction and stay ahead
          of the competition with our product data analytics."
        />
        <OneTwoThree
          number="2"
          title="Data-driven decisions"
          text="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
        />
        <OneTwoThree
          number="3"
          title="Always affordable"
          text="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
        />
      </section>
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
    <div className="pt-[64px] px-[16px] pb-[156px] bg-purple text-center relative">
      <h1 className="mb-[40px] fraunces font-semibold text-[50px] leading-[50px] tracking-0 text-white">
        Data <span className="secondaryBtnBorder">tailored</span> to your needs.
      </h1>
      <PrimaryBtn>Learn more</PrimaryBtn>
      <img className="heroPhone" src="public\image-hero.webp" />
    </div>
  );
}

function OneTwoThree({ number, title, text }) {
  return (
    <section>
      <div className="circle">
        <div className="fraunces font-semibold text-[20px]">{number}</div>
      </div>
      <div>
        <h1 className="mb-[16px] fraunces font-semibold text-[28px] tracking-0">
          {title}
        </h1>
        <p className="manrope font-normal text-[16px] leading-[28px] tracking-0">
          {text}
        </p>
      </div>
    </section>
  );
}
