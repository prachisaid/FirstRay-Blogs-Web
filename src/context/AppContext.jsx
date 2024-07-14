import { createContext, useEffect, useState } from "react";

const url = `https://codehelp-apis.vercel.app/api/get-blogs`
export const AppContext = createContext();

function AppContextProvider({children}) {
    const [loading, setLoading] = new useState(false)
    const [posts, setPosts] = new useState([])
    const [page, setPage] = new useState(1);
    const [totalPages, setTotalPages] = new useState(null)

    async function fetchData(page = 1) {
        setLoading(true)
        // try{} catch(){}
        const response = await fetch(url + `?page=${page}`)
        const data = await response.json()
        console.log(data)
        setPage(data.page)
        setPosts(data.posts)
        setTotalPages(data.totalPages)
        setLoading(false)
    }

    function handlePageChange(page) {
        setPage(page)
        fetchData(page)
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
        fetchData,
        handlePageChange
    };

    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider