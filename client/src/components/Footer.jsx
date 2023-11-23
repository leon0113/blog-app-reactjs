import { FaRegCopyright } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-gray-900">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
                <div className="grid mb-8 lg:grid-cols-4">
                    <div className="grid grid-cols-2 gap-5  lg:col-span-4 md:grid-cols-4">
                        {/* 1st category  */}
                        <div>
                            <p className="font-medium tracking-wider text-gray-300">Category</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/blogs" className="text-gray-300 transition-colors duration-500 hover:text-blue-500">News</a>
                                </li>
                                <li>
                                    <a href="/blogs" className="text-gray-300 transition-colors duration-500 hover:text-blue-500">World</a>
                                </li>
                                <li>
                                    <a href="/blogs" className="text-gray-300 transition-colors duration-500 hover:text-blue-500">Topics</a>
                                </li>
                                <li>
                                    <a href="/blogs" className="text-gray-300 transition-colors duration-500 hover:text-blue-500">References</a>
                                </li>
                                <li>
                                    <a href="/blogs" className="text-gray-300 transition-colors duration-500 hover:text-blue-500">About</a>
                                </li>
                            </ul>
                        </div>
                        {/* 2nd category  */}
                        <div>
                            <p className="font-medium tracking-wider text-gray-300">Application</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/blogs" className="text-gray-300 transition-colors duration-500 hover:text-blue-500">Website</a>
                                </li>
                                <li>
                                    <a href="/blogs" className="text-gray-300 transition-colors duration-500 hover:text-blue-500">Store</a>
                                </li>
                                <li>
                                    <a href="/blogs" className="text-gray-300 transition-colors duration-500 hover:text-blue-500">E-Commerce</a>
                                </li>
                                <li>
                                    <a href="/blogs" className="text-gray-300 transition-colors duration-500 hover:text-blue-500">References</a>
                                </li>
                                <li>
                                    <a href="/blogs" className="text-gray-300 transition-colors duration-500 hover:text-blue-500">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        {/* 3rd category  */}
                        <div>
                            <p className="font-medium tracking-wider text-gray-300">Terms</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/blogs" className="text-gray-300 transition-colors duration-500 hover:text-blue-500">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href="/blogs" className="text-gray-300 transition-colors duration-500 hover:text-blue-500">Copyrights</a>
                                </li>
                                <li>
                                    <a href="/blogs" className="text-gray-300 transition-colors duration-500 hover:text-blue-500">Rules</a>
                                </li>
                                <li>
                                    <a href="/blogs" className="text-gray-300 transition-colors duration-500 hover:text-blue-500">Licenes</a>
                                </li>
                                <li>
                                    <a href="/blogs" className="text-gray-300 transition-colors duration-500 hover:text-blue-500">Information</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-center gap-3 hover:text-blue-500">
                            <FaRegCopyright className="text-white text-xl mt-1 " />
                            <a href="/" className="text-3xl font-bold text-white">Blog<span className="text-blue-500">Site</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer