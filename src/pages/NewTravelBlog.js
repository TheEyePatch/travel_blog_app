import classes from './styles/NewTravelBlog.module.css'
import NewTravelBlogForm from '../components/Forms/NewTravelBlogForm';


function NewTravelBlog(){
  return (
    <section className={classes.section}>
      <NewTravelBlogForm/>
    </section>
  );
}

export default NewTravelBlog;
