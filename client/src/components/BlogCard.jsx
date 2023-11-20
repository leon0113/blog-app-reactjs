/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'

function BlogCard({ blogs, currentPage, selectedCategory, pageSize }) {
    const filteredData = blogs.filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
        .slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
            {
                filteredData.map((blog) => (
                    <Link key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
                        <div>
                            <img src={blog.image} alt="blog-img" className='w-full' />
                        </div>
                        <h3 className='mt-4 mb-2 font-bold hover:text-blue-500 cursor-pointer'>{blog.title}</h3>
                        <p className='mb-2 text-gray-600'><FaUser className='inline-flex items-center mr-2' /> {blog.author}</p>
                        <p className='text-xm text-gray-500'>Published: {blog.published_date}</p>
                        <p>Tags: {blog.tags.map(t => ` ${t}`)}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default BlogCard