import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const TooltipComponent = ({ word, desc, idx, img }) => {
  return (
    <>
      {desc && (
        <TooltipProvider key={idx}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="text-primary cursor-pointer font-bold">
                {word}
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <span>{desc}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      {img && (
        <TooltipProvider key={idx}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="flex basis-1/5 justify-center items-center"
                key={idx}
              >
                <Image src={img} width={48} height={48} alt="" priority />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <span>{desc}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </>
  );
};

export default TooltipComponent;
