import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa6'

function Banner() {
    return (
        <div className="px-4 py-32 bg-black mx-auto text-white">
            <div className="text-center">
                <h1 className="font-bold text-5xl lg:text-7xl leading-snug mb-5 font-primary">Welcome to Blog Site!</h1>
                <p className="text-gray-100 lg:w-3/5 font-secondary mx-auto mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo numquam atque rerum tempora consequatur! <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo numquam atque rerum tempora consequatur!</p>
                <div>
                    <Link to='/contact' className="font-medium
                     bg-white p-2 rounded-md text-black hover:bg-gray-900 hover:text-white inline-flex items-center gap-3">Learn More <FaArrowRight /></Link>
                </div>
            </div>
        </div>
    )
}

export default Banner