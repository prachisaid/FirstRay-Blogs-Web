import React, { useContext, useEffect } from 'react'
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';

function App() {

    const {fetchData} = useContext(AppContext)

    useEffect(() => {
        fetchData(1)
    }, [])

    return (
        <>
            <Header/>
            <Blogs/>
            <Pagination/>
        </>
    )
}

export default App;