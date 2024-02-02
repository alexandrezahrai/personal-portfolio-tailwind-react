import Heading from "../components/Heading";
import { Tools } from "../constants";

const Skills = () => {
  return (
    <div className="container mx-auto">
      <Heading heading="So what can I do?" />

      <hr className="mt-4 border-t-[0.5px] border-transparent" />

      <h2 className="heading-2 mb-24 text-center gradient-text w-fit mx-auto">
        Languages & Tools:
      </h2>

      <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-y-8 gap-x-4 mt-10 anchor">
        {Tools.map((tool, index) => (
          <li
            key={index}
            className="skill-card text-[14px] text-[#8a8f98] flex justify-center items-center bg-transparent flex-col h-[200px] xl:h-[166px] rounded-xl relative"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay={`${index * 100}`}
            data-aos-offset="20"
            data-aos-anchor=".anchor"
          >
            <span className="sr-only">Logo for {tool.name}</span>
            {tool.image && (
              <div className="w-12 h-12 md:h-12 flex items-center justify-center shrink-0">
                <img
                  src={tool.image}
                  alt={tool.name + " logo"}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
            <p className="mt-6 eyebrow">{tool.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
