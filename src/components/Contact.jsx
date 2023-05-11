import React, { useRef, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion";
import { contacts } from "../constants";

const ServiceCard = ({ index, title, icon, url }) => (
  <Tilt className="xs:w-[180px] mt-10 w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <a href={url} target="_blank">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-1 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-medium text-center">
            {title}
          </h3>
        </div>
      </a>
    </motion.div>
  </Tilt>
);

const Contact = () => {
  return (
    <>
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[100px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>GET IN TOUCH</p>
            <h2 className={styles.sectionHeadText}>Contact.</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {contacts.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
