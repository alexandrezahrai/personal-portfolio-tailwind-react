/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { Chevron } from "../assets/media/svg/index.js";

const Hero = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <>
      <div
        className="hero container mx-auto relative inset-0 h-[calc(100vh-81px)] flex flex-col justify-center items-center"
        data-aos="fade"
        data-aos-duration="1200"
      >
        <h1 className="huge-text text-center">
          <span className="gradient-text italic px-6">Bilingual</span>
          <br />
          web developer.
        </h1>
        <p className="text-center body-lg mt-8 lg:mt-10 max-w-[700px] mx-auto balance-text text-[#ebefff]">
          Hi, I'm Alex - a web developer based in Kalamazoo, Michigan. I
          specialize in building and designing websites, web applications, and
          everything in between.
        </p>
        <div className="w-full absolute bottom-6">
          <button
            type="button"
            className="hidden lg:flex justify-center items-center h-20 w-20 mx-auto mt-20 transition duration-200 ease-in-out z-50 relative text-[#ef479e] hover:scale-[1.05]"
            onClick={handleClickScroll}
          >
            <Chevron />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
