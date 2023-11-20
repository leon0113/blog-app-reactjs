/* eslint-disable react/prop-types */

function Pagination({ handlePagination, currentPage, blogs, pageSize }) {

    const totalPages = Math.ceil(blogs.length / pageSize);

    const renderPaginationLinks = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNo) => (
            <li key={pageNo} className={pageNo === currentPage ? "activePagination" : ""}>
                <a onClick={() => handlePagination(pageNo)} href="#">{pageNo}</a>
            </li>
        ))
    }
    // Array.from({ length: totalPages }, (_, i) => i + 1) ---output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <ul className="pagination my-8 flex-wrap gap-4">
            <li>
                <button onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            </li>
            <div className="flex">{renderPaginationLinks()}</div>
            <li>
                <button onClick={() => handlePagination(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </li>
        </ul>
    )
}

export default Pagination