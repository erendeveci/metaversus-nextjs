"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex flex-col  mx-auto`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="object-contain w-full h-full"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" className="w-full h-full object-contain" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" className="w-full h-full object-contain" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" className="w-full h-full object-contain" />
        </div>

        <div className="lg:absolute hidden top-1/3 left-[25%] w-[195px] filter  h-[150px] p-[4px] rounded-[24px] bg-[#5d6680]">
          <div className="relative">
            <img
              src="/upside.png"
              className="w-full h-full object-contain rounded-[24px] "
            />
            <p className="absolute bottom-2 left-2 text-[18px]  text-white font-bold">
             The Upside Down
            </p>
          </div>
        </div>

        <div className="lg:absolute hidden top-10 right-10 w-[195px] filter  h-[150px] p-[4px] rounded-[24px] bg-[#5d6680]">
          <div className="relative">
            <img
              src="/hawkings.png"
              className="w-full h-full object-contain rounded-[24px] "
            />
            <p className="absolute bottom-2 left-2 text-[18px]  text-white font-bold">
              Hawkins Labs
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
