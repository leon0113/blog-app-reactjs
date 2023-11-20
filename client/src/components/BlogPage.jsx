/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";


function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);


    const pageSize = 12; //12 blogs in one page

    useEffect(() => {
        async function fetchBlogs() {

            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

            if (selectedCategory) {
                url += `&category=${selectedCategory}`;
            }

            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }
        fetchBlogs()
    }, [currentPage, pageSize, selectedCategory])

    // handle page change
    const handlePagination = (pageNo) => {
        setCurrentPage(pageNo);
    }

    //handle Category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setActiveCategory(category);
        setCurrentPage(1);
    }

    return (
        <div>
            {/* category section  */}
            <div>Category</div>

            {/* blog */}
            <div>
                <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
            </div>

            {/* pagination */}
            <Pagination handlePagination={handlePagination} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
        </div>
    )
}

export default BlogPage