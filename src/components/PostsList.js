import React from 'react'
import Post from './Post'

const PostsList = () => {
    return (
        <div className="flex items-center bg-blue-200 flex-grow shadow-2xl-inner flex-col">
            <h1>ALL BLOG POSTS</h1>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default PostsList
