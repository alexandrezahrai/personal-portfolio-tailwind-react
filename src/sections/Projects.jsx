/* eslint-disable react/no-unescaped-entities */
import { Works } from "../constants";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <h1 className="heading-2 max-w-[350px] lg:max-w-[500px] text-left">
        Some projects I've worked on...
      </h1>

      <hr className='mt-4 mb-12 border-t-[0.5px] border-primary-black' />

      <ul className="mt-10 lg:mt-16 flex flex-col gap-y-8 lg:gap-y-12 [&>li:nth-child(1)>a]:border-primary-blue [&>li:nth-child(2)>a]:border-primary-pink [&>li:nth-child(3)>a]:border-primary-green [&>li:nth-child(4)>a]:border-primary-yellow [&>li:nth-child(1)>a:hover]:bg-primary-blue [&>li:nth-child(2)>a:hover]:bg-primary-pink [&>li:nth-child(3)>a:hover]:bg-primary-green [&>li:nth-child(4)>a:hover]:bg-primary-yellow">
        {Works.map((work, index) => (
          <li
            key={index}
            className="relative"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay={`${index * 200}`}
            data-aos-offset="-200"
          >
            <a
              href={work.link}
              target="_blank"
              rel="noreferrer"
              className="group bg-white rounded-2xl hover:rounded-none p-7 md:px-14 md:pb-[4rem] md:pt-[calc(4rem-16px)] grid grid-cols-1 lg:grid-cols-2 hover:shadow-[0_-2px_15px_rgba(0,0,0,0.1)] transition-all duration-[400ms] hover:bg-primary-pink border-t-[16px] border-primary-pink ring-[0.25px] ring-black/[0.15] relative overflow-hidden gap-8 lg:gap-0"
            >
              <div className="flex flex-col gap-6 w-full lg:max-w-[350px] xl:max-w-[543px]">

                <h2
                  className="heading-3 transition-colors duration-[400ms]"
                >
                  {work.title}
                </h2>

                <p
                  className="body-base transition-colors duration-[400ms]"
                >
                  {work.description}
                </p>

                <ul className="flex flex-wrap [&>li:last-child>span]:hidden">
                  {work.tags.map((tag) => (
                    <li
                      key={tag}
                      className="flex items-center eyebrow transition-colors duration-[400ms]"
                    >
                      <p>{tag}</p>
                      <span className="mx-2">|</span>
                    </li>
                  ))}
                </ul>
              </div>

              {work.image && (
                <div className="place-self-end h-full">
                  <div className="lg:max-w-[450px] lg:h-[245px] w-full h-full bg-primary-gray rounded-lg overflow-hidden ring-[0.25px] ring-black/[0.15]">
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
    </div>
  );
};

export default Projects;
