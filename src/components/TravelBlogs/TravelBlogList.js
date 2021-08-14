import React, { useState } from 'react';
import TravelBlogItem from './TravelBlogItem'
import classes from '../styles/TravelBlogList.module.css'

const travel_blogs = [
  {
    id: 1,
    title: 'Travel Blog 1',
    description: 'Travel Description'
  },
  {
    id: 2,
    title: 'Travel Blog 2',
    description: 'Travel Description'
  }
];

let blog = {
  id: 3,
  title: 'Travel 3',
  description: 'Travel Description'
};

function TravelBlogList(){
  const [blogs, pushBlog] = useState(travel_blogs)
  const buttonHandler = (event)=>{
    event.preventDefault();
    pushBlog(travel_blogs => [...travel_blogs, blog]);
    
  }
  return <div className={classes.travel_list}>
    {
      blogs.map(blog =>{
        return <TravelBlogItem className={classes.blog_item} key={blog.id} title={blog.title} description = {blog.description} />
      })
    }
    <button className={classes.btn} onClick={buttonHandler}>Add blog</button>
  </div>
}

export default TravelBlogList;