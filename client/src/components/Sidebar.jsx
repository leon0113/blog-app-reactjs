import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Sidebar() {

    const [popularBlogs, setPopularBlogs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then(res => res.json())
            .then(data => setPopularBlogs(data.slice(0, 12)));
    }, [])

    return (
        <div>
            <h3 className="text-2xl font-bold px-4 mt-2 text-blue-500">Latest Blogs</h3>
            <div>
                {
                    popularBlogs.slice(0, 5).map(blog => <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
                        <h4 className="font-medium mb-2">{blog.title}</h4>
                        <Link to={`/blogs/${blog.id}`} className="font-medium
                     bg-white p-1 pb-2 rounded-md text-black hover:bg-blue-500 hover:text-white inline-flex items-center gap-3">Read More <FaArrowRight className="mt-1 ml-2" /></Link>
                    </div>)
                }
            </div>
            <h3 className="text-2xl font-semibold px-4 text-blue-500 mt-4">Popular Blogs</h3>
            <div>
                {
                    popularBlogs.slice(6, 10).map(blog => <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
                        <h4 className="font-medium mb-2">{blog.title}</h4>
                        <Link to={`/blogs/${blog.id}`} className="font-medium
                     bg-white p-1 pb-2 rounded-md text-black hover:bg-blue-500 hover:text-white inline-flex items-center gap-3">Read More <FaArrowRight className="mt-1 ml-2" /></Link>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Sidebar