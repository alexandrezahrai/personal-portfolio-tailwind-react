/* eslint-disable react/no-unescaped-entities */
import Heading from "../components/Heading";
import { Bio as bio } from "../constants";

const About = () => {
  return (
    <div className="container mx-auto">
      <Heading heading="Getting personal..." />

      <hr className="mt-4 mb-8 lg:mb-12 border-t-[0.5px] border-primary-black" />

      <div className="mt-0 lg:mt-10">
        {bio.copy.map((paragraph) => (
          <p key={paragraph} className="body-md mb-4 last:mb-0" role="alert">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
