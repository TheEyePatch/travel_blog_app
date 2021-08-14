import classes from './styles/TravelBlogs.module.css'
import TravelBlogList from '../components/TravelBlogs/TravelBlogList'

function TravelBlogs(){
  return (
    <section className={classes.section}>
      <TravelBlogList/> 
    </section>
  )
}

export default TravelBlogs;