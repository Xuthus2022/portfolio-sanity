import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="group relative flex rounded-full border cursor-pointer">
        <Image
          className="rounded-full border-gray-500 border-1 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out bg-[#242424]"
          src={urlFor(skill?.image).url()}
          alt="Picture of the author"
          width={1000}
          height={1500}
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100" >
              {skill.progress}%
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
