import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { NavLink } from 'react-router-dom'

function Cards({post}) {

    return (
        <div key={post.id} className='card'>
            <NavLink to={`/blog/${post.id}`}>
                <p style={{fontWeight : 'bold', color:'black'}}>{post.title}</p>
            </NavLink>

            <p>By <span>{post.author}</span> on {` `}
            <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                <span>{post.category}</span>
            </NavLink>
            </p>

            <p>Posted on {post.date}</p>

            <p>{post.content}</p>

            {post.tags.map((tag, index) => {
                return (
                    <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}>
                        <span key={index}>{`#${tag}`}</span>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default Cards