import { useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../style' 
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active,setActive] = useState('')
  const [toggle,setToggle] = useState(false)

  return (
    <div
      className={`${styles.paddingX} w-full flex
      item-center py-5 bg-gray-100  shadow-md `}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto ">
        <Link
          to={'/'}
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0,0)
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 text-gray-700'>
          {navLinks.map((Link) => (
            <li key={Link.id} 
              className={`${
                active === Link.title? 'text-[#8AB6F9]': 'text-gray-700'
              } hover:text-[#8AB6F9] text-[18px] cursor-pointer`}
              onClick={()=> setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center text-gray-700'>
          <img 
            src={toggle? close : menu} 
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={()=> setToggle(!toggle)} 
          />
          <div className={`${!toggle? 'hidden': 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]
            z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((Link) => (
                <li key={Link.id} 
                  className={`${
                    active === Link.title? 'text-secondary': 'text-white'
                    } hover:text-white font-medium cursor-pointer
                    font-poppins text-[16px]`}
                  onClick={()=> {
                    setActive(Link.title)
                    setToggle(!toggle)
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar