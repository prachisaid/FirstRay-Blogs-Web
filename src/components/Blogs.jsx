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
                    
                    // posts.map((post) => {
                    //     return (
                    //         <div key={post.id} className='card'>
                    //             <p style={{fontWeight : 'bold'}}>{post.title}</p>
                    //             <p>By <span>{post.author}</span> on <span>{post.category}</span></p>
                    //             <p>Posted on {post.date}</p>
                    //             <p>{post.content}</p>

                    //             {post.tags.map((tag, index) => {
                    //                 return (
                    //                     <span key={index}>{`#${tag}`}</span>
                    //                 )
                    //             })}
                    //         </div>
                    //     )
                    // })
                    <Cards/>
                )}
            </div>
        </>
    )
}

export default Blogs