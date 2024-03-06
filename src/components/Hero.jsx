import { styles } from "../style"


const Hero = () => {
  return (
    <section 
      className="relative w-full h- h-screen mx-auto"
    >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 
        mx-auto flex flex-row items-start gap-5`}>
          
          <div>
            <h1 className={`${styles.heroHeadText} text-[#E17888]`}>Hi, I'm <span className="text-[#8AB6F9]">Khomotso</span></h1>
            
            <p className={`${styles.heroSubText} mt-2 text-[#ffffff]`}> A MERN stack software developer.</p>
            
            <button className="cv-button">Download resume</button>
          </div>

      </div>
          
    </section>
  );
};

export default Hero;