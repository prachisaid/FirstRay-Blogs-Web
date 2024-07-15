import React, { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './components/Home';
import BlogPage from './components/BlogPage';
import TagPage from './components/TagPage';
import CategoryPage from './components/CategoryPage';

function App() {

    const {fetchBlogsData, page} = useContext(AppContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    
    useEffect(() => {
        const page = searchParams.get('page') ?? 1

        if(location.pathname.includes('tags')) {
            const tag = location.pathname.split('/').at(-1).replace("-", " ")
            // console.log(paths.at(-1))
            fetchBlogsData(Number(page), tag)
        }
        else if(location.pathname.includes('categories')) {
            const category = location.pathname.split('/').at(-1).replace("-", " ")
            fetchBlogsData(Number(page), null, category)
        }
        else {
            fetchBlogsData(Number(page))
        }

    }, [location.pathname, location.search])

    return (
        <>
            <Routes>
                <Route path='/' Component={Home} />   
                <Route path='/blog/:blogId' Component={BlogPage} />
                <Route path='/tags/:tag' Component={TagPage} />
                <Route path='/categories/:category' Component={CategoryPage} />
            </Routes>
        </>
    )
}

export default App;