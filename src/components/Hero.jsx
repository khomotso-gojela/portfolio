import { motion } from "framer-motion"

import { styles } from "../style"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section 
      className="relative w-full h- h-screen mx-auto"
    >
      <ComputersCanvas />
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 
        mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#2991b1]"/>
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-400 "/>

            {/* <div className="w-1 sm:h-80 h-40 violet-gradient"/> */}

          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="text-[#2991b1]">Khomotso</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}> I test and develop softwares <br className="sm:block hidden"/>using MERN technology.</p>
          </div>

      </div>
          
          <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
            <a href='#about'>
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;