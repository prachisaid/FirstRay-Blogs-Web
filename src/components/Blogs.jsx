import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import Cards from './Cards'

function Blogs() {

    const {loading, posts} = useContext(AppContext)
    console.log(posts)

    return (
        <>
            <div style={{marginBottom : '90px', marginTop : '90px'}}>
                {loading ? <Spinner/> : (
                    posts.length == 0 ? <div>Post not available</div> :
                    posts.map((post) => {
                        return (
                            <Cards key={post.id} post = {post} />
                        )
                    })
                )}
            </div>
        </>
    )
}

export default Blogs