import { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";
import classes from './styles/TravelBlog.module.css'

const TravelBlog = () => {
  const params = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/blogs/${params.id}`,{
      method: 'GET',
      'Content-Type': 'application/json'
    }).then(data => data.json())
    .then(data => setBlog(data) )
  }, [])


  return (
    <section className={classes.section}>
      <h1>{blog.id}</h1>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
    </section> 
  ) 
};


export default TravelBlog;