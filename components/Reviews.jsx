"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
// import swipper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const reviewsData = [
  {
    avatar: "/reviews/avatar-5.png",
    name: "Stewen F.",
    job: "Dev. Back-end",
    review:
      "Sa créativité et son engagement ont contribué de manière significative à la réussite de notre projet. Un plaisir d'avoir pu re-travailler ensemble ! 👏🌟",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Amine R.",
    job: "Dev. Front-end",
    review:
      "En tant que développeur front-end, l'esprit créatif de Vik a donné vie à des interfaces utilisateur simples qui ont grandement enrichi notre application! 👨‍💻✨",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Florine M.",
    job: "Graphiste",
    review:
      "Collaborer avec Vik a été une expérience inspirante. En tant que graphiste, sa créativité et son souci du détail ont contribués à notre projet.. 🎨🖌️",
  },
];

const Reviews = () => {
  return (
    <section className=" py-12 xl:py-24 mb-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          EX-collègues ?
        </h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-full"
        >
          {reviewsData.map((person, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Card className="bg-tertiary dark:bg-primary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* Image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* Name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
