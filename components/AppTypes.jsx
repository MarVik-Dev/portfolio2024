import { Paintbrush2, Webhook, Merge } from "lucide-react"; 
import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <Paintbrush2 size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
 "Quelque soit le choix, la sphère du web design est là pour façonner l'apparence et la convivialité d'une application Web ou mobile. À l'aide d'outils comme Figma et Excalidraw, chaque détail visuel, de la disposition au choix des couleurs, est méticuleusement élaboré. 🖌️"
    },
  {
    icon: <Webhook size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
"L'application web est conçue pour être utilisée sur des navigateurs,les outils clés incluent React et Next.js pour le front-end, Node.js pour le back-end, et diverses bibliothèques JavaScript pour une expérience utilisateur réactive.🌐"    
},
  {
    icon: <Merge size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
  "L'application mobile est adaptée aux appareils mobiles tels que smartphones et tablettes, React Native et Ionic sont essentiels, utilisant les capacités natives des appareils. Node.js s'intègre pour un développement complet sur iOS et Android. 📱"
    },
];

const Services = () => {
  return (
    <section className="my-24 min-h-[50vh]">
      <div className="container mx-auto">
        <h2 className="section-title text-wrap mb-24 wrap text-center mx-auto">
        Application Web ou Mobile ?

        </h2>
        {/* Grid Items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
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
                  <CardDescription className="text-lg">{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
