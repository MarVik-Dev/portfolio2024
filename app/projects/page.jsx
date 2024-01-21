"use client";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Facebook",
    description:
      "Réalisation d'un site internet avec Next.js pour une petite entreprise artisanale nommée Facebook!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Nike",
    description: "Réalisation d'un site internet avec Next.js pour une petite entreprise artisanale nommée Nike!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "fullstack",
    name: "AIRbNb",
    description:
      'Fatigué de chercher des hotels, petite idée entre amis "Si on sous-louait notre appart ?" ',
    link: "/",
    github: "/",
  },

];

// To remove duplicate categories
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project) => {
    // If category is 'all projects' return all projects, in another case filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Réalisations
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, idx) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={idx}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs content */}
          <div class="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, idx) => {
              return (
                <TabsContent value={category} key={idx}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
