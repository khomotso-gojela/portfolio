import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import Headroom from "react-headroom"

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gray-100">
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
        </div> */}
        <Headroom>
          <Navbar />
        </Headroom>
        <Hero />
        <About />
        <Tech/>
        <Experience />
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas />
        </div>
        <div className="bg-gray-700 text-center py-4 text-gray-100 text-sm font-thin">
        Copyright © 2024, Khomotso
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
