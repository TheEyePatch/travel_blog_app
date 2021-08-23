import React, { useState, useEffect, useContext } from 'react';
import TravelBlogItem from './TravelBlogItem'
import classes from '../styles/TravelBlogList.module.css'
import AuthContext from '../../contexts/auth-context';

function TravelBlogList(){
  const [isLoading, setLoading] = useState(true);
  const [allBlogs, setAllBlogs] = useState([]);
  const authContext = useContext(AuthContext)

  useEffect(() =>{
    fetch('http://localhost:3001/blogs',{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'AUTH-TOKEN': authContext.token
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

  if(isLoading == true){
    return(<section>
      <p>Loading...</p>
    </section>
    );
  }

  return <div className={classes.travel_list}>
    {
      allBlogs.map(blog =>{
        return <TravelBlogItem className={classes.blog_item} key={blog.id} title={blog.title} description = {blog.description} />
      })
    }
    {/* <button className={classes.btn} onClick={addHandler}>Add blog</button>
    <button className={classes.btn} onClick={minusHandler}>Minus blog</button> */}
  </div>
}

export default TravelBlogList;