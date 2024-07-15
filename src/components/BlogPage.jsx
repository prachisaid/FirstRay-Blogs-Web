import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Blogs from "./Blogs";
import Spinner from "./Spinner";
import Pagination from "./Pagination";
import Cards from "./Cards";

const baseUrl = `https://codehelp-apis.vercel.app/api/get-blog`

function BlogPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const {setLoading, loading} = useContext(AppContext)

    const [blog, setBlog] = useState(null)
    const [relatedBlogs, setRealatedBlogs] = useState([]);
    const blogId = location.pathname.split('/').at(-1)

    async function fetchRelatedBlogs() {
        setLoading(true)
        let url = `${baseUrl}?blogId=${blogId}`

        const response = await fetch(url)
        const data = await response.json()

        setBlog(data.blog)
        setRealatedBlogs(data.relatedBlogs)
        setLoading(false)
    }

    useEffect(() => {
        if(blogId) {
            fetchRelatedBlogs()
        }
    }, [location.pathname])

    return (
        <>
            <Header/>
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
            {
                loading ? <Spinner/> : 
                blog ? <div><Cards post = {blog}/> 
                <h2>Related Blogs</h2>
                {
                    relatedBlogs.map((post) => (
                        <div key={post.id}>
                            <Cards post = {post} />
                        </div>
                    ))
                }
                </div>
                : <p>No posts available</p>
            }
            <Pagination/>
        </>
    )
}

export default BlogPage