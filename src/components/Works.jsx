import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { live } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div onClick={() => window.open(source_code_link, "_blank")} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 10,
          scale: 1,
          speed: 450,
        }}
        className='bg-gray-300 sm:w-12/12 w-full rounded-md overflow-hidden flex flex-col md:flex-row shadow-lg shadow-gray-500'
      >
        <div className='relative w-full h-[230px] '>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover object-top'
            
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={live}
                alt='source code'
                className='w-7 h-7 object-contain'
              />
            </div>
          </div>
        </div>

        <div className=' p-5'>
          <h3 className='text-blue-400 font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-gray-600 text-[14px]'>{description}</p>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p

                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>

      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-gray-500 text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");