import React from 'react'

const Pagination = ({currentPage, totalPages, changePage, setPage, pageSize, changePageSize}) => {

    const pageLinks = [];

    pageLinks.push(
        <button key={"prev"} disabled={currentPage <= 1} onClick={() => changePage(-1)}>
            prev
        </button>);

    for (let i = 1; i <= totalPages; i++) {
        pageLinks.push(
            <button key={i}
                    style={currentPage === i ? {fontWeight: 'bold', border: 'solid black 1px'} : {fontWeight: 'normal'}}
                    onClick={() => setPage(i)}
            >
                {i}
            </button>)
    }

    pageLinks.push(<button key={"next"} disabled={currentPage >= totalPages} onClick={() => changePage(1)}>next</button>);

    return (
        <div>
            {pageLinks}
            <select name="page-size" id="page-size" value={pageSize} onChange={(e) => {changePageSize(e.target.value)}}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
        </div>
    )
}

export default Pagination