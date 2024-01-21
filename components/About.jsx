"use client"

import DevImg from "./DevImg";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TooltipComponent from "../components/TooltipComponent";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Nom & Prénom",
  },
  // {
  //   icon: <PhoneCall size={20} />,
  //   text: "+012 334 5643",
  // },
  // {
  //   icon: <MailIcon size={20} />,
  //   text: "roger@more.com",
  // },
  {
    icon: <Calendar size={20} />,
    text: "Né(e) la meilleure année !",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master I",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "La belle Bleue, France",
  },
];

const qualificationData = [
  {
    title: "formation",
    data: [
      {
        university: "Ecole 3",
        qualification: "Master",
        years: "2023",
      },
      {
        university: "Ecole 2",
        qualification: "Licence",
        years: "2020 - 2022",
      },
      {
        university: "Ecole 1",
        qualification: "BTS",
        years: "2019",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        compagny: "ALT Incubateur",
        role: "Fullstack Js Senior",
        years: "2023",
      },
      {
        compagny: "ALT Incubateur",
        role: "Fullstack Js ",
        years: "2022",
      },
      {
        compagny: "ALT Incubateur",
        role: "Fullstack Js Junior",
        years: "2021",
      },

    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      { name: "Environnements", technos: "SCRUM, Kanban. " },
      { name: "BDD", technos: "MongoDb, MySQL. " },
      {
        name: "Back-end",
        technos:
          "Nest.Js, TypeScript, Next-Auth, TRPC, Mongoose, Bcrypt, JWT, Express.",
      },
      {
        name: "Front-end",
        technos:
          "TypeScript, React.js, Next.js 14, Next-Auth, Axios / RedAxios, TRPC, Redux, Zustand, Cypress, Clerk, Stripe, Ionic.",
      },
      {
        name: "Librairies CSS",
        technos: "TailwindCSS, ShadcnUI, NextUI, Framer-Motion, Bootstrap.",
      },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/about/apple.svg", descTech: "Apple : Un systeme stable et agréable que j'utilise quotidiennement !" },
      { imgPath: "/about/linux.svg", descTech: "Linux : Cet environnement est simple fluide, performant et recommandé pour développer !" },
      { imgPath: "/about/github.svg", descTech: "GitHub : La plateforme de versionning et de sauvegarde en ligne où nos projets sont stockés !" },
      { imgPath: "/about/docker.svg", descTech: "Docker : Un outil permettant de scinder et isoler chaque partie de l'application afin de prévenir et limiter tout dysfonctionnement !" },
      { imgPath: "/about/discord.svg", descTech: "Discord : Une application en ligne où les gens peuvent discuter, parler et partager des choses." },
      { imgPath: "/about/figma.svg", descTech: "Figma : Un bon outil en ligne de conception et collaboration instantanée entre membres pour les projets d'interface utilisateur." },
      { imgPath: "/about/youtrack.svg", descTech: "YouTrack : Un assistant qui aide les membres d'équipe à travailler sur un même projet, definir des tâches et à résoudre des problèmes. !" },
      { imgPath: "/about/notion.svg", descTech: "Bon outil !" },
      { imgPath: "/about/ps.svg", descTech: "Photoshop : Un logiciel idéal pour la retouche photo et création graphique !" },
      { imgPath: "/about/illustrator.svg", descTech: "Illustrator : Un autre outil de conception vectorielle pour logos et dessins graphiques. !" },
      { imgPath: "/about/mongodb.svg", descTech: "MongoDb : Une base de données qui permet de stocker des informations importantes pour les sites et applications Web !" },
      { imgPath: "/about/mysql.svg", descTech: "MySQL : Une autre base de données organisée pour stocker des informations importantes de manière relationnelle !" },
      { imgPath: "/about/vscode.svg", descTech: "VSCode : Un éditeur de code léger et polyvalent." },
      { imgPath: "/about/phpstorm.svg", descTech: "PHPStorm : Un autre éditeur de code léger, polyvalent mais payant !" },
      { imgPath: "/about/postman.svg", descTech: "PostMan : Une extension ou logiciel qui facilite le test d'API et la communication entre les parties du programme. " },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };


  return (
    <section className="py-24 min-h-[100vh]  ">
      <div className="container mx-auto ">
        <h2 className="section-title mb-24 text-center  mx-auto">
          Qui suis-je ?
        </h2>

        <div className="flex flex-col xl:flex-row  ">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Présentation
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Compétences
                </TabsTrigger>
              </TabsList>
              {/* Tabs content */}
              <div className="text-lg mt-12 xl:mt-8 flex items-center justify-center">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className=" text-left">
                    <h3 className="h3 mb-4 ">En quelques mots ?</h3>
                    <p className="subtitle max-w-xl max-auto ">
                      Un garçon simple, plutôt curieux qui aime comprendre & construire !
                      <br />
                      <br />
                      Après plusieurs années dans le domaine IT, j'ai décidé il y a 3 ans
                      d'apprendre le JavaScript, car, déjà, ça semblait cool puis cela me
                      permettait aussi de faire des trucs et de fabriquer des choses ^^ !
                      <br />
                      <br />
                      C'est ainsi que, inévitablement TypeScript et moi devions faire connaissance.
                      Tant sur le back-end ou le front-end, il faut <br /> l'admettre,
                      on a bien sympathisé !
                      <br />
                      <br />
                      De projet en péripétie et de péripétie en projet, de nombreuses librairies
                      se sont ajoutées au groupe. Celles-ci ont permis de repousser les limites
                      de mes idées et le dernier projet en date {" "}
                      <TooltipComponent
                        word={"Cokar"}
                        desc={
                          "CoKar est une Application Web, optimisant l'organisation des événements d'association et le co-voiturage entre membres.Un projet réalisé dans l'incubateur ALT. "
                        }
                      />{" "}
                      l'illustre parfaitement.
                      <br />
                      <br />
                      Tel un poisson dans l'eau qui, parfois, avale la tasse avec autant de possibilités, je parcours actuellement les méandres d'un serveur VPS avec NGINX pour gérer mon propre hébergement. 👻
                      <br />
                      <br />
                      Mon principal objectif, aujourd'hui, est d'évoluer en équipe, en tant que développeur Front-end || Back-end ou fullstack JS/TS. Dans un environnement Agile et avec une méthodologie orientée SCRUM ou Kanban, ce qui me permettra d'enrichir et de partager mes connaissances.
                      <br />
                      <br />
                      Apréhender l'environnement DevOps, mon prochain challenge !
                    </p>
                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12 ">
                      {infoData.map((item, idx) => {
                        return (
                          <div className="flex items-center gap-x-4" key={idx}>
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Langues parlées:</div>
                      <div className="border-b border-border"></div>
                      <div>
                        Français, anglais, espagnol, portugais (notions).
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Mes qualifications
                    </h3>
                    {/* Experience & education wrapper */}
                    <p className="my-5">Tout au long de mon parcours professionnel, mes compétences se sont forgées à travers une variété d'expériences. En voici quelques-unes :  </p>
                    <div className="grid grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, idx) => {
                              const { compagny, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={idx}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary -left-[5px] absolute group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {compagny}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Education */}

                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "formation").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "formation").data.map(
                            (item, idx) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={idx}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary -left-[5px] absolute group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Mes skills</h3>
                    <div className="mb-16">
                      <div className="border-b border-border mb-4"></div>
                      {/* Skill list */}
                      <div>
                        {getData(skillData, "skills").data.map((item, idx) => {
                          const { name, technos } = item;
                          return (
                            <div
                              className=" text-center xl:text-left mx-auto my-4 xl:my-8"
                              key={idx}
                            >
                              <div className="uppercase font-semibold text-primary tracking-[4px]">
                                {name} :
                              </div>
                              <div className="xl:mx-5">{technos}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl-text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex items-center justify-center flex-row gap-3 flex-wrap ">
                        {getData(skillData, "tools").data.map((item, idx) => {
                          const { imgPath, descTech } = item;
                          return (
                            <TooltipComponent
                              key={idx}
                              img={imgPath}
                              desc={
                                descTech
                              }
                            ></TooltipComponent>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
