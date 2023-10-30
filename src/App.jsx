import PrimaryBtn from "./components/PrimaryBtn";
import SecondaryBtn from "./components/SecondaryBtn";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <main className="pt-[155px] pb-[328px] px-[16px] text-center grid gap-[40px]">
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
      </main>
      <PurpleBottomSection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="pt-[32px] px-[16px] bg-purple flex items-center justify-between sm:px-[40px]">
      <img src="public/logo-light.svg" alt="logo" />
      <SecondaryBtn>Apply for access</SecondaryBtn>
    </header>
  );
}

function Hero() {
  return (
    <div className="pt-[64px] px-[16px] pb-[156px] bg-purple text-center relative sm:pb-[203px]">
      <h1 className="mb-[40px] fraunces font-semibold text-[50px] leading-[50px] tracking-0 text-white sm:text-[60px] leading-[60px]">
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

function PurpleBottomSection() {
  return (
    <section className="p-[32px] bg-purple text-white text-center">
      <h1 className="mb-[16px] fraunces font-semibold text-[32px] tracking-0">
        Be the first to test
      </h1>
      <p className="mb-[24px] manrope font-normal text-[16px] leading-[28px] tracking-0">
        Hi, I'm Louis Graham, the founder of the company. Book a demo call with
        me to become a beta tester for our app and kickstart your company. Apply
        for access below and I’ll be in touch to schedule a call.
      </p>
      <PrimaryBtn>Apply for access</PrimaryBtn>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pt-[74px] px-[130px] pb-[64px]">
      <img
        className="mb-[58px] mx-auto"
        src="public/logo-dark.svg"
        alt="logo"
      />
      <div className="flex items-center justify-center gap-[28px]">
        <img src="public\icon-facebook.svg" alt="facebook" />
        <img src="public\icon-twitter.svg" alt="twitter" />
        <img src="public\icon-instagram.svg" alt="instagram" />
      </div>
    </footer>
  );
}

// 1. TODO Responsive for tablet next
// 2. TODO Hero done, grid next for tablet
