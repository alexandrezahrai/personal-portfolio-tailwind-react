import { Works } from "../constants";

const ProjectCard = () => {
  return (
    <ul className="mt-10 lg:mt-16 flex flex-col gap-y-8 lg:gap-y-12">
      {Works.map((work, index) => (
        <li
          key={index}
          className="relative"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay={`${index * 200}`}
          data-aos-offset="-200"
        >
          <a
            href={work.link}
            target="_blank"
            rel="noreferrer"
            className="project-card group bg-transparent rounded-2xl p-7 md:px-14 md:pb-[4rem] md:pt-[calc(4rem-16px)] grid grid-cols-1 lg:grid-cols-2 transition-all duration-[400ms] relative overflow-hidden gap-8 lg:gap-0"
          >
            <div className="flex flex-col gap-6 w-full lg:max-w-[350px] xl:max-w-[543px]">
              <h2 className="heading-3 transition-colors duration-[400ms] gradient-text w-fit">
                {work.title}
              </h2>

              <p className="body-base transition-colors duration-[400ms] text-[#ebefff]">
                {work.description}
              </p>

              <ul className="flex flex-wrap [&>li:last-child>span]:hidden">
                {work.tags.map((tag) => (
                  <li
                    key={tag}
                    className="flex items-center eyebrow transition-colors duration-[400ms] text-[#8a8f98]"
                  >
                    <p>{tag}</p>
                    <span className="mx-2">|</span>
                  </li>
                ))}
              </ul>
            </div>

            {work.image && (
              <div className="place-self-end h-full">
                <div className="image-wrapper lg:max-w-[450px] lg:h-[245px] w-full h-full bg-primary-gray rounded-lg overflow-hidden ring-1 ring-[rgba(255,255,255,0.05)]">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="object-cover object-center h-full w-full"
                  />
                </div>
              </div>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ProjectCard;
