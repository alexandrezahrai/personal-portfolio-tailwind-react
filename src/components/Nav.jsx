import { NavLinks } from "../constants";
import { Logo } from "../assets/media/svg/index.js";
import Button from "./Button";

const Nav = () => {
  var prevScrollpos = window.scrollY;

  window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (currentScrollPos <= 100) {
      document.getElementById("navbar").style.top = "0px";
    } else if (prevScrollpos > currentScrollPos && currentScrollPos > 0) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <header
      id="navbar"
      className="fixed w-full z-[1001] bg-none top-0 shadow-[0_-2px_15px_rgba(0,0,0,0.1)] border-b border-b-[hsla(0,0%,100%,.08)] transition-[top] duration-[400ms] ease-in-out"
    >
      <div className="py-5 flex items-center justify-between container mx-auto text-white">
        <a
          href="/"
          alt="logo"
          className="block w-[40px] h-[40px] hover:text-[#3360ff] focus:text-[#3360ff] transition-colors duration-200"
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
                  className="hover:text-[#3360ff] focus:text-[#3360ff] transition-colors duration-150 body-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            text="Contact"
            className={"ml-12"}
            buttonType="button-glass"
            href="#contact"
            target={""}
          />

          <Button
            text="Resumé"
            className={"ml-3 lg:ml-6"}
            buttonType="button-blue"
            href="/Resume_Alexandre_Zahrai.pdf"
            target={"_blank"}
          />
        </nav>
      </div>
    </header>
  );
};

export default Nav;
