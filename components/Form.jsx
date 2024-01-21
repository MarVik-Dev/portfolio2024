"use client";

import { toast } from "sonner";
import { send } from "@/lib/mail";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = ({ captcha, setCaptcha }) => {
  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (captcha) {
      const formData = new FormData(e.currentTarget);
      const promiseAwait = new Promise((resolve) =>
        setTimeout(() => resolve({ name: formData.get("name") }), send(formData))
      );

      toast.promise(promiseAwait, {
        loading: "En cours de réflexion 🤔",
        success: (data) => {
          return `${data.name} votre email m'a été transmis. À très vite! `;
        },
        error: (err) => {
          return `Oupsss ${data.name} impossible d'envoyer votre email. Essayez à nouveau ! `;
        },
      });

    }
  };

  return (
    <form onSubmit={HandleSubmit} className="flex flex-col  gap-y-4">
      {/* Input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" name="name" placeholder="Nom" required />
        <User className="absolute right-6" size={20} />
      </div>
      {/* Input */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>

      {/* Input */}
      <div className="relative flex items-center">
        <Textarea
          type="content"
          id="content"
          name="content"
          placeholder="Votre message ..."
          required
        />
        <MessageSquare className="absolute right-6 top-6" size={20} />
      </div>
      <div className="flex items-end justify-between">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={setCaptcha}
        />

        <Button
          className={
            captcha
              ? "flex items-center gap-x-1 max-w-[166px]"
              : "flex cursor-not-allowed opacity-25 items-center gap-x-1 max-w-[166px]"
          }
          type="submit"
        >
          Envoyer
          <ArrowRightIcon size={20} />
        </Button>
      </div>
    </form>
  );
};

export default Form;
