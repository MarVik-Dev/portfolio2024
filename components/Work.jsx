"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
// import swipper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// Import Components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Portfolio",
    description:
      "La création de ce nouveau portfolio a permis d'aborder les dernieres technologies telles que React.Js ou encore de Next.Js 14 ainsi que de Tailwind..",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Cokar",
    description:
      "Ce projet a été développé en collaboration et au sein de l'incubateur ALT... ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "react Js",
    name: "SunShine Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, laudantium!",
    link: "/",
    github: "/",
  }
];

const Work = () => {
  return (
    <section className=" bg-white dark:bg-secondary/50 py-24">
      <div className="container xl:flex xl:justify-center xl:items-center">

        {/* Text */}
        <div className="max-w-full flex justify-center flex-col mx-auto xl:mx-0 text-center mb-12 xl:h-[400px] ">
          <h2 className="section-title mb-4">Projets réalisés</h2>
          <p className="subtitle mb-8 xl:text-left">
            En parcourant ces récents projets, vous decouvrirez un ensemble de technologies fiables et récentes.
          </p>

          <Link href="/projects">
            <Button>Tous les projets</Button>
          </Link>
        </div>

        {/* Slider */}
        <div className="max-w-[1000px] w-full relative right-0 top-0">
          {/* <div className="h-20 w-full absolute rotate-45 xl:rotate-12 flex items-center xl:mt-40 justify-center bg-black dark:bg-white text-primary border  text-5xl z-10 ">
        Prochainement
      </div> */}
          <Swiper
            className="h-[480px] "
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Show only the first 4 projects for slides */}
            {projectData.slice(0, 5).map((project, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
