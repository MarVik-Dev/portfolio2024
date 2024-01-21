"use client";

import {
  MailIcon,
  HomeIcon,
  PhoneCall,
  PhoneIcon,
  PlaneTakeoff,
} from "lucide-react";
import Form from "@/components/Form";
import { useState } from "react";

const Contact = () => {
  const [captcha, setCaptcha] = useState(false);




  return (
    <section>
      <div className="container xl:min-h-screen mx-auto">
        {/* Text & illustration */}
        <div className="grid xl:grid-cols-2 h-full pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Dire quelques mots 🚀{" "}
            </div>
            <h1 className="h1 max-w-md mb-8">Si on papotait ensemble ?</h1>
            <p className="subtitle max-w-[500px]">
              Un Projet, une opportunité, l'innovation ?
            </p>
            <p className="h3 max-w-[500px]">
              {" "}
              <br /> Votre message est, <br /> le premier pas vers une collaboration
              certaine 🚀
            </p>
          </div>
          {/* Illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* Info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* Info TXT */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* Mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              {captcha ? (
                <div>victor@marvik.fr</div>
              ) : (
                <div>
                  Afficher adresse mail ? <br /> Captcha à valider.{" "}
                </div>
              )}
            </div>
            {/* Address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>
                <span className="text-primary">Installé en :</span> <br />
                Occitanie
              </div>
            </div>
            {/* Address */}
            <div className="flex items-center gap-x-8">
              <PlaneTakeoff size={18} className="text-primary" />
              <div>
                <span className="text-primary">Fréquemment :</span> <br /> À
                Paris{" "}
              </div>
            </div>
            {/* Address */}
            {/* <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Suisse</div>
            </div> */}
            {/* Mail */}
            {/* <div className="flex items-center gap-x-8">
             <PhoneIcon size={18} className="text-primary" />
              <div>(+336) 666 666 666</div>
            </div> */}
          </div>
          <Form captcha={captcha} setCaptcha={setCaptcha} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
