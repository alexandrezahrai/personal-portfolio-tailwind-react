/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { Arrow } from "../assets/media/svg/index.js";

const Hero = () => {
  return (
    <>
      <div
        className="container mx-auto relative inset-0 h-[calc(100vh-85px)] flex flex-col justify-center items-center"
        data-aos="fade"
        data-aos-duration="1200"
      >
        <h1 className="heading-1 text-center">
          <em>Bilingual</em>
          <br />
          web deveveloper.
        </h1>
        <p className="text-center body-md mt-8 lg:mt-10 max-w-[600px] mx-auto balance-text">
          I'm a web developer based in Kalamazoo, Michigan. I specialize in
          building and designing websites, web applications, and everything in
          between.
        </p>
        <button type="button" className="flex justify-center items-center h-14 w-14 mx-auto mt-20 transition duration-200 z-50 border-[0.75px] rounded-full p-3 border-primary-black hover:text-primary-gray hover:bg-primary-black">
          <a href="#projects">
            <Arrow />
          </a>
        </button>
      </div>
      <div className="absolute bottom-0 block h-[13rem] w-full overflow-visible bg-gradient-to-b from-transparent from-0% to-100% p-5 pb-6 to-primary-pink"></div>
    </>
  );
};

export default Hero;
