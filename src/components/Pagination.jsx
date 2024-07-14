import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {

    const {handlePageChange, page, totalPages, posts} = useContext(AppContext)
    console.log(page)

    function nextClickHandler() {
        let newPage = page
        {page == totalPages ? newPage = 1 : newPage = page + 1}
        handlePageChange(newPage)
    }

    function previousClickHandler() {
        let newPage = page
        {page == 1 ? newPage = totalPages : newPage = page - 1}
        handlePageChange(newPage)
    }

    return (
        <>
            <div className='pagination'>
                {
                    posts.length > 1 ?<> <button onClick={previousClickHandler}>Previous</button>    
                    <button onClick={nextClickHandler}>Next</button>
                    <p>Page {page} of {totalPages}</p></> : null
                }
                
            </div>
        </>
    )
}

export default Pagination