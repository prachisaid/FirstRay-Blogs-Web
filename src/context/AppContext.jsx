import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const url = `https://codehelp-apis.vercel.app/api/get-blogs`
export const AppContext = createContext();

// export default
function AppContextProvider({children}) {
    const [loading, setLoading] = new useState(false)
    const [posts, setPosts] = new useState([])
    const [page, setPage] = new useState(1);
    const [totalPages, setTotalPages] = new useState(null)
    const navigate = useNavigate()

    async function fetchBlogsData(page = 1, tag, category) {
        setLoading(true)
        // try{} catch(){}
        let baseUrl = `${url}?page=${page}`;

        if(tag) {
            baseUrl += `&tag=${tag}`
        }
        else if(category) {
            baseUrl += `&category=${category}`
        }

        const response = await fetch(baseUrl)
        const data = await response.json()
        console.log(data)
        setPage(data.page)
        setPosts(data.posts)
        setTotalPages(data.totalPages)
        setLoading(false)
    }

    function handlePageChange(page) {
        navigate({search : `?page=${page}`})
        setPage(page)
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogsData,
        handlePageChange
    };

    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider
