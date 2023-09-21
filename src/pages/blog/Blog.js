import React from 'react'
import './blog.css'
import BlogCard from '../../components/blogcard/BlogCard'

function Blog() {
  const blogcards=[];
  for(var i=0;i<10;i++){
    blogcards.push(<BlogCard key={i}/>)
  }
  return (
    <div className='blog'>
    <div className='blog-main'>
      <div className='blogtitle'>Blogs....</div>
      {blogcards}
      <div className='blogpagenation'> for pagination</div>
    </div>
    <div className='blog-contents'>
      <div className='blog-contents-title'></div>
    </div>
    </div>
  )
}

export default Blog