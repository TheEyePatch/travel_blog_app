import { useState, useEffect } from 'react';
import TravelBlogItem from './TravelBlogItem'
import classes from '../styles/TravelBlogList.module.css'

function TravelBlogList(){
  const [isLoading, setLoading] = useState(true);
  const [allBlogs, setAllBlogs] = useState([]);

  // GET the Travel Blogs
  useEffect(() =>{
    fetch('http://localhost:3001/blogs',{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }
    )
    .then(response =>{
      return response.json();
    }).then(data =>{
      setLoading(false);
      setAllBlogs(data);
    }).catch(err =>{
      console.log(err)
    })
  }, [])

  if(isLoading === true){
    return(<section>
      <p>Loading...</p>
    </section>
    );
  }

  return <div className={classes.travel_list}>
    {
      allBlogs.map(blog =>{
        return <TravelBlogItem className={classes.blog_item} key={blog.id} object = {blog} />
      })
    }
  </div>
}

export default TravelBlogList;