import BlogPage from "../components/BlogPage"


function Blogs() {
    return (
        <>
            <div className="px-4 py-40 text-center bg-black mx-auto text-white">
                <h2 className="font-bold text-5xl lg:text-7xl leading-snug mb-5 font-primary">Blog Page</h2>
            </div>

            {/* show all blogs container  */}
            <div className="max-w-7xl mx-auto">
                <BlogPage />
            </div>
        </>
    )
}

export default Blogs