import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub } from "react-icons/fa";

function Navbar() {
    // navItems
    const navItems = [
        { path: "/home", pageName: "Home" },
        { path: "/blogs", pageName: "Blogs" },
        { path: "/services", pageName: "Services" },
        { path: "/contact", pageName: "Contact" },
        { path: "/about", pageName: "About" },
    ]


    return (
        <header className="bg-black">
            <nav className="p-4 flex gap-6">
                {/* logo  */}
                <a href="/" className="text-xl font-bold text-white">Blog<span className="text-blue-500">Site</span></a>

                {/* Nav items for lg devices */}
                <ul className='text-white md:flex gap-12 text-lg font-bold hidden'>
                    {
                        navItems.map(({ path, pageName }) => <li key={pageName}>
                            <Link to={path}>{pageName}</Link>
                        </li>)
                    }
                </ul>

                {/* menu items */}
                <div className='text-white flex gap-3'>
                    <a href="https://github.com/leon0113" className=' text-xl hover:text-blue-500'><FaFacebook /></a>
                    <a href="https://github.com/leon0113" className=' text-xl hover:text-blue-500'><FaGithub /></a>
                    <a href="https://github.com/leon0113" className=' text-xl hover:text-blue-500'><FaFacebook /></a>
                    <button className='bg-blue-500 py-2 px-6 font-medium rounded hover:bg-white hover:text-blue-500 transition-all duration-200 ease-in'>Log in</button>
                </div>

            </nav>
        </header>
    )
}

export default Navbar