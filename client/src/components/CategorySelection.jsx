/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function CategorySelection({ handleCategoryChange, selectedCategory, activeCategory }) {
    const categories = ["Health", "Fintech", "Security", "Apps", "Startups", "AI"];
    return (
        <div className="px-4 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold">
            <button
                onClick={() => handleCategoryChange(null)}
                className={`lg:ml-12 ${activeCategory ? '' : "activeCat"}`}
            >All</button>
            {
                categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`mr-2 space-x-16 ${activeCategory === category ? 'activeCat' : ""}`}
                    >{category}</button>
                ))
            }
        </div>
    )
}

export default CategorySelection