"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://github.com/MarVicFr",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/fr-victor-martin/",
    name: <RiLinkedinFill />,
  },
  // {
  //   path: "/",
  //   name: <RiYoutubeFill />,
  // },
  // {
  //   path: "/",
  //   name: <RiFacebookFill />,
  // },
  // {
  //   path: "/",
  //   name: <RiInstagramFill />,
  // },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return <div className={`${containerStyles}`}>
    {icons.map((icon, index) => {
      return (
        <Link href={icon.path} key={index} >
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      )
    })}
  </div>;
};

export default Socials;
