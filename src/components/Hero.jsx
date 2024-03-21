import { styles } from "../style"
import { FaGithub, FaLinkedin } from 'react-icons/fa6'


const Hero = () => {
  return (
    <section 
      className="relative w-full h-screen mx-auto bg-gray-100"
    >
      <div className={`${styles.paddingX} absolute inset-0 top-[170px] max-w-7x1 
        mx-auto flex flex-row items-start gap-5`}>
          
          <div>
            <h1 className={`${styles.heroHeadText} text-gray-700`}>Hi, I'm <span className="text-[#8AB6F9]">Khomotso</span></h1>
            
            <p className={`${styles.heroSubText} mt-2`}> A MERN stack software developer.</p>
            
            <div className="flex flex-col sm:flex-row items-left justify-start">
              <a href="https://drive.google.com/file/d/13-omN1k2KMC7tBsnkFcjtacfKFIByX_O/view?usp=drive_link" target="_blank">
                <button 
                  className="bg-blue-500 text-blue-100 px-8 py-4 my-6 font-bold
                              rounded-md hover:-translate-y-1 transition-all shadow-md shadow-blue-700"
                >
                  Download resume
                </button>
              </a>
              <div className="sm:ml-12 flex items-center mt-4">
                {/* <a className="text-slate-600 px-4 text-3xl" href="https" target='-blank'>|</a> */}
                <a className="text-gray-600 mr-4" href="https://www.linkedin.com/in/khomotso-gojela-149995216/" target='-blank'><FaLinkedin size={24}/></a>
                <a className="text-gray-600 mr-4" href="https://github.com/khomotso-gojela" target='-blank'><FaGithub size={24}/></a>
              </div>

            </div>
          </div>

      </div>
          
    </section>
  );
};

export default Hero;