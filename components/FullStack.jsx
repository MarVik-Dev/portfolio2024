import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Front-end",
    description:
     "Le front-end, c'est comme sculpter numériquement avec des outils tels que React, TypeScript et Next.js. On façonne l'apparence et l'interactivité, peignant des histoires visuelles avec Tailwind CSS et ShadcnUI, créant des expériences utilisateur captivantes. 🎨",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Back-end",
    description:
  "Le back-end, piloté avec agilité par le framework Nest.js, se dévoile en coulisses pour gérer les requêtes, traiter les données avec finesse, et orchestrer une expérience utilisateur robuste, offrant ainsi le socle invisible d'applications web performantes. ✨",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Base de données",
    description:
 "Les bases de données, comme MongoDB et MySQL, sont les bibliothèques numériques essentielles. MongoDB offre une agilité exceptionnelle, MySQL une structure relationnelle. Tous deux, forment une base de connaissances solide pour le spectacle web. 🗃️",
  },
];

const TechFullStack = () => {
  return (
    <section className="my-24 py-12 xl:py-24 min-h-[50vh] ">
      <div className="container mx-auto">
        <h2 className="section-title text-wrap mb-24 wrap text-center mx-auto">
          Développeur "FullStack" ?
        </h2>
        <p className="container subtitle max-w-3xl max-auto hidden md:flex text-left">
          Les competences d'un développeur fullstack JavaScript se scindent en
          trois domaines : front-end, back-end, et bases de données. Il se doit
          donc de façonner une expérience utilisateur complète, simple et
          cohérente. 💻
        </p>
        {/* Grid Items */}
        <div className="grid xl:grid-cols-3 py-10 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, idx) => {
            return (
              <Card
                className="w-full max-w-[424px] h-full flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={idx}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechFullStack;
