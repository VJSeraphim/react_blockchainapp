import { useState } from 'react'

import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import logo from '../../images/logo.png'

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false) // React.useState(false)

    return (
        <nav className="w-full flex md:justify-center items-center p-4">
            <div className="md:flex-[0.5] flex-intial justify-center item-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer"/>
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, i) => (
                    <NavbarItem key={item.i} title={item}/>
                ))}
                <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Login
                </li>
            </ul>
            <div className="flex relative">
                {toggleMenu 
                    ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                }
            </div>
        </nav>
    )
}

export default Navbar