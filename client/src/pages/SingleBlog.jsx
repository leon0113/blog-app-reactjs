/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { FaClock } from 'react-icons/fa';
import SideBar from '../components/Sidebar';

function SingleBlog() {
    const data = useLoaderData();
    const { title, image, category, author, published_date, reading_time, content } = data[0];
    console.log(title);
    return (
        <div>
            <div className="px-4 py-40 text-center bg-black mx-auto text-white">
                <h2 className="font-bold text-3xl lg:text-5xl leading-snug mb-5 font-primary">{title}</h2>
            </div>
            <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
                <div className="lg:w-3/4 mx-auto">
                    <div>
                        <img src={image} alt="blog-img" className="w-full mx-auto rounded" />
                    </div>
                    <h2 className="text-xl">Author: <span className="font-bold">{author}</span> <span className="text-gray-400 text-sm">{published_date}</span></h2>
                    <p className="mb-3 text-gray-400"><FaClock className="inline-flex items-center mr-2" /> {reading_time}</p>
                    <p className="text-base text-gray-800 mb-6">{content}</p>
                    {/* dummy content  */}
                    <p className="text-base text-gray-600 mb-6">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nulla eos molestias harum cum quia sapiente! Doloremque, consequuntur maiores molestiae, optio odio fugit recusandae nemo, quia iusto beatae amet sapiente.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nulla eos molestias harum cum quia sapiente! Doloremque, consequuntur maiores molestiae, optio odio fugit recusandae nemo, quia iusto beatae amet sapiente.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nulla eos molestias harum cum quia sapiente! Doloremque, consequuntur maiores molestiae, optio odio fugit recusandae nemo, quia iusto beatae amet sapiente.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nulla eos molestias harum cum quia sapiente! Doloremque, consequuntur maiores molestiae, optio odio fugit recusandae nemo, quia iusto beatae amet sapiente.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nulla eos molestias harum cum quia sapiente! Doloremque, consequuntur maiores molestiae, optio odio fugit recusandae nemo, quia iusto beatae amet sapiente.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nulla eos molestias harum cum quia sapiente! Doloremque, consequuntur maiores molestiae, optio odio fugit recusandae nemo, quia iusto beatae amet sapiente.</p>
                    </p>
                </div>
                {/* sidebar  */}
                <div className="lg:w-1/2">
                    <SideBar />
                </div>
            </div>
        </div>
    )
}

export default SingleBlog