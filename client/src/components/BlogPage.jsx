import { useEffect, useState } from "react"
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from './Sidebar';


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


    const totalBlogs = blogs.filter((blogs) => !selectedCategory || blogs.category === selectedCategory);

    const filteredData = totalBlogs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <div>
            {/* category section  */}
            <div>
                <CategorySelection handleCategoryChange={handleCategoryChange} activeCategory={activeCategory} selectedCategory={selectedCategory} />
            </div>

            {/* blog */}
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Blog cards  */}
                <BlogCard filteredData={filteredData} />

                {/* side bar  */}
                <div>
                    <SideBar />
                </div>
            </div>

            {/* pagination */}
            <div>
                <Pagination handlePagination={handlePagination} currentPage={currentPage} totalBlogs={totalBlogs} pageSize={pageSize} />
            </div>
        </div>
    )
}

export default BlogPage