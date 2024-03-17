import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#CADCFC] text-[17px] max-w-3xl leading-[30px]'
      >
        <p>Embarking on a journey sparked by my fascination with the dynamic landscape of technology, I found my passion at the intersection of innovation and creation. 
        It all began during my formative years in high school, where the enigmatic world of video game development captivated my imagination. Driven by an 
        insatiable curiosity, I immersed myself in learning the intricacies of game development through self-guided tutorials and YouTube 
        resources, fueled by a fervent desire to contribute to this thriving industry.
        </p>
        <br />
        <p>
        As my journey unfolded, I realized the importance of a solid foundation in computer science to truly manifest my aspirations. 
        This realization propelled me towards higher education, where I diligently honed my skills in programming languages, algorithms, 
        and the art of crafting elegant and efficient code. Armed with this knowledge, I ventured further into the realm of 
        software development, recognizing it as a fertile ground to cultivate my programming prowess while inching closer to 
        my dream of game development.
        </p>
        <br />
        <p>
        Today, I proudly stand as a seasoned web software tester and proficient MERN stack software developer, adept in navigating the 
        complexities of modern web applications. My expertise extends to database modeling utilizing NoSQL, a testament to my commitment 
        to mastering diverse technologies and methodologies. With a firm grasp on industry best practices and a relentless pursuit of 
        excellence, I am poised to make meaningful contributions to the ever-evolving landscape of technology.
        Driven by a relentless pursuit of excellence and fueled by a boundless passion for innovation, I am eager to continue pushing 
        the boundaries of what is possible in the world of technology, leaving an indelible mark on the digital frontier.
        </p>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");