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
    <div
      onClick={() => window.open(source_code_link, "_blank")} 
      className=" cursor-pointer w-full flex flex-col sm:flex-row bg-gray-300
         rounded-md overflow-hidden shadow-lg"
    
    >
      
      <div className='relative sm:w-3/12'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-40 object-cover object-top
            sm:w-40 sm:h-full'
          
        />
      </div>

      <div className=' p-4 items-start justify-start sm:w-9/12'>
        <h3 className='text-blue-400 font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-gray-600 text-[14px] text-wrap'>{description}</p>
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

    </div>
  );
};

const Works = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-gray-500 text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 lg:grid lg:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");