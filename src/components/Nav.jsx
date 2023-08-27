import { useState, useEffect } from "react";
import { debounce } from "../utilities/helpers";
import { NavLinks } from "../constants";
import { Logo } from "../assets/media/svg/index.js";

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.scrollY;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 20) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    transition: "top 0.2s",
  };

  return (
    <header
      style={{ ...navbarStyles, top: visible ? "0" : "-85px" }}
      className="fixed w-full z-[1001] bg-primary-black top-0 shadow-[0_-2px_15px_rgba(0,0,0,0.1)] grainy"
    >
      <div className="py-5 flex items-center justify-between max-w-[1600px] mx-auto px-[17px] md:px-6 lg:px-[36px] text-white">
        <a
          href="/"
          alt="logo"
          className="block w-[40px] h-[40px] hover:text-primary-yellow transition-colors duration-200"
        >
          <span className="sr-only">Logo</span>
          <Logo />
        </a>
        <nav className="flex items-center">
          <ul className="hidden lg:flex items-center space-x-12">
            {NavLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-primary-yellow focus:text-primary-yellow transition-colors duration-150 body-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="src/assets/Resume_Alexandre_Zahrai.pdf" target="_blank" className="button-pink ml-12">
            <div>Resumé</div>
          </a>

          <a href="#contact" className="button-yellow ml-3 lg:ml-6">
            <div>Contact</div>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
