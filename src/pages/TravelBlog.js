import { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";
import TravelBlogItem from '../components/TravelBlogs/TravelBlogItem';
import classes from './styles/TravelBlog.module.css'
import { UserContextProvider } from '../contexts/user-context';


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

  if(isLoading === true){
    return(<section>
      <p>Loading...</p>
    </section>
    );
  }
  return (
    <section className={classes.section}>
      <UserContextProvider>
        <TravelBlogItem object={object}/> 
      </UserContextProvider>
    </section>
  )
};


export default TravelBlog;