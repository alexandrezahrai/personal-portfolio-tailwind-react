import { Tools } from "../constants";

const Skills = () => {
  return (
    <div className="container mx-auto">
      <h1 className="heading-2 max-w-[350px] lg:max-w-[500px] text-left">
        So, what can I do?
      </h1>

      <hr className="mt-4 mb-12 border-t-[0.5px] border-primary-black" />

      <h2 className="heading-3 mt-6 lg:mt-10">Languages & Tools:</h2>
      <ul className="grid md:grid-cols-3 xl:grid-cols-7 gap-4 mt-6 anchor">
        {Tools.map((tool, index) => (
          <li
            key={index}
            className="text-[14px] text-black flex justify-center items-center bg-white flex-col h-[200px] xl:h-[166px] rounded-xl ring-[0.25px] ring-black/[0.15]"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay={`${index * 100}`}
            data-aos-offset="20"
            data-aos-anchor=".anchor"
          >
            <span className="sr-only">Logo for {tool.name}</span>
            {tool.image && (
              <div className="w-16 h-16 flex items-center justify-center shrink-0">
                <img
                  src={tool.image}
                  alt="logo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
            <p className="mt-4 eyebrow">{tool.name}</p>
          </li>
        ))}
      </ul>

      <h2 className="heading-3 mt-6 lg:mt-10">Editor of Choice:</h2>
      <p className="body-md mt-2">Visual Studio Code</p>
    </div>
  );
};

export default Skills;
