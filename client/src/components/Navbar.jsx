import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaBars, FaTwitter } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import Modal from './Modal';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // navItems
    const navItems = [
        { path: "/", pageName: "Home" },
        { path: "/blogs", pageName: "Blogs" },
        { path: "/services", pageName: "Services" },
        { path: "/contact", pageName: "Contact" },
        { path: "/about", pageName: "About" },
    ];

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }


    return (
        <header className="bg-black text-white fixed top-0 left-0 right-0">
            <nav className="p-4 max-w-7xl mx-auto flex justify-between items-center">
                {/* logo  */}
                <a href="/" className="text-3xl font-bold ">Blog<span className="text-blue-500">Site</span></a>

                {/* Nav items for lg devices */}
                <ul className=' md:flex gap-12 text-lg font-medium hidden'>
                    {
                        navItems.map(({ path, pageName }) => <li key={pageName}>
                            <NavLink className={({ isActive }) =>
                                isActive
                                    ? "active"
                                    : ""
                            } to={path}>{pageName}</NavLink>
                        </li>)
                    }
                </ul>

                {/* menu items */}
                <div className=' lg:flex gap-6 items-center hidden'>
                    <a href="https://github.com/leon0113" className=' text-3xl hover:text-blue-500'><FaFacebookF /></a>
                    <a href="https://github.com/leon0113" className=' text-3xl hover:text-blue-500'><FaGithub /></a>
                    <a href="https://github.com/leon0113" className=' text-3xl hover:text-blue-500'><FaTwitter /></a>
                    <button className='bg-blue-500 py-2 px-6 font-medium rounded hover:bg-white hover:text-blue-500 transition-all duration-200 ease-in'>Log in</button>
                </div>

                {/* Modal  */}
                <Modal isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} />

                {/* Mobile menu */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='cursor-pointer hover:text-blue-500'>{isMenuOpen ? <RxCross1 className='w-5 h-5' /> : <FaBars className='w-5 h-5' />}</button>
                </div>
            </nav>
            {/* mobile navigation bar */}
            <div>
                <ul className={`md:hidden gap-12 text-lg font-medium block space-y-4 px-4 py-6 mt-16 bg-gray-300 ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-0" : "hidden"}`} >
                    {
                        navItems.map(({ path, pageName }) => <li className='text-black' key={pageName}>
                            <NavLink onClick={toggleMenu} to={path}>{pageName}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar