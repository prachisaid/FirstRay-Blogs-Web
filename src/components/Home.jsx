import React from "react";
import Header from './Header'
import Blogs from './Blogs'
import Pagination from './Pagination'

function Home() {
    return (
        <>
            <Header/>
            <Blogs/>
            <Pagination/>
        </>
    )
}

export default Home