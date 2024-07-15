import React from "react";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "./Blogs";
import Pagination from "./Pagination";

function CategoryPage() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <div style={{marginTop:'100px', textAlign:'center'}}>
                <Header/>
                <div>
                    <button onClick={() => navigate(-1)}>Back</button>
                    <h2>Blogs on <span>{location.pathname.split('/').at(-1)}</span></h2>
                </div>
                <Blogs/>
                <Pagination/>
            </div>
        </>
    )
}

export default CategoryPage