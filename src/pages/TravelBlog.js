import { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";
import classes from './styles/TravelBlog.module.css'

const TravelBlog = () => {
  const params = useParams();
  const [object, setBlog] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/blogs/${params.id}`,{
      method: 'GET',
      'Content-Type': 'application/json'
    }).then(data => data.json())
    .then(data =>{
      setLoading(false)
      setBlog({ author: data.author, ...data.blog}) 
    } )
  }, [params.id])

  console.log(object)
  console.log(params.id)

  if(isLoading === true){
    return(<section>
      <p>Loading...</p>
    </section>
    );
  }
  return (
    <section className={classes.section}>
      <h1>{object.title}</h1>
      <h1>{object.description}</h1>
      <h1>{object.author}</h1>
    </section> 
  ) 
};


export default TravelBlog;