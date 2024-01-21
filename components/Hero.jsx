import Link from "next/link";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-screen xl:pt-28  flex justify-center dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Txt */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <h1 className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web{" "} <br /> FullStack{" "} <br/> Developpeur{" "}
            </h1>
            <div className="h1 mb-4">
              Salut ! <br /> Moi c'est Vik
            </div>
            <div className="h1 mb-4 text-primary text-center">- MarVik -</div>
            <h2 className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Javascript & Typescript : Nest.Js, React.Js, Next.Js. <br />
              Ces technologies qui me definissent !
            </h2>
            {/* Button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Me contacter <Send size={18} />
                </Button>
              </Link>

            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px]"
            />
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative">
            {/* Badge-1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText="information ici"
            />
            {/* Badge-2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={2}
              badgeText="ème info ici"

            />
            {/* Badge-3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={3}
              badgeText="ème pour conclure !"
              endCountText="k"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
      </div>
          {/* Icon */}
          <div className="flex absolute bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
    </section>
  );
};

export default Hero;
