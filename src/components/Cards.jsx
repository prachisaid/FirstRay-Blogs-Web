import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Cards() {

    const {posts} = useContext(AppContext)

    return (
        <div>{
                posts.map((post) => {
                    return (
                        <div key={post.id} className='card'>
                            <p style={{fontWeight : 'bold'}}>{post.title}</p>
                            <p>By <span>{post.author}</span> on <span>{post.category}</span></p>
                            <p>Posted on {post.date}</p>
                            <p>{post.content}</p>

                            {post.tags.map((tag, index) => {
                                return (
                                    <span key={index}>{`#${tag}`}</span>
                                )
                            })}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards