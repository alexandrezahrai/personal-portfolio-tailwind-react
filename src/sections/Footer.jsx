import { Bio as bio, Socials } from "../constants";
import { Logo } from "../assets/media/svg/index.js";
import Button from "../components/Button";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div id="contact" className="container mx-auto">
      <a
        href="#home"
        alt="logo"
        className="block w-[60px] h-[60px] hover:text-[#3360ff] focus:text-[#3360ff] transition-colors duration-200"
      >
        <span className="sr-only">Logo</span>
        <Logo />
      </a>

      <hr className="mt-4 mb-12 border-t-1 border-t-[hsla(0,0%,100%,.08)]" />

      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div>
          <ul className="flex flex-col gap-2">
            <li className="w-fit">
              <a
                href={`mailto:${bio.email}`}
                className="hover:text-[#3360ff] focus:text-[#3360ff] transition-colors duration-200"
              >
                <p className="body-md">{bio.email}</p>
              </a>
            </li>
            <li className="w-fit">
              <a
                href={`tel:${bio.phone}`}
                className="hover:text-[#3360ff] focus:text-[#3360ff] transition-colors duration-200"
              >
                <p className="body-md">{bio.phone}</p>
              </a>
            </li>
          </ul>

          <ul className="flex gap-4 items-center mt-4">
            {Socials.map((social, index) => (
              <li
                key={index}
                className="w-6 h-6 transition-colors duration-200 hover:text-[#3360ff] focus:text-[#3360ff]"
              >
                <a href={social.url} target="_blank" rel="noreferrer">
                  <span className="sr-only">{social.name}</span>
                  {<social.icon />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Button
          text="Resumé"
          className={"mt-16 lg:mt-0"}
          buttonType="button-blue"
          href="/Resume_Alexandre_Zahrai.pdf"
          target={"_blank"}
        />
      </div>

      <div className="text-sm balance-text font-Syne w-full text-center mt-32">
        Designed and Developed by Alexandre Zahrai - &copy; {year}
      </div>
    </div>
  );
};

export default Footer;
