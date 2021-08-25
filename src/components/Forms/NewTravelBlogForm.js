import { useHistory } from 'react-router';
import classes from '../styles/NewTravelBlogForm.module.css'
import Card from '../Card';
import { useRef } from 'react';


function NewTravelBlogForm(){
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const history = useHistory();
  const submitHandler = (event)=>{
    event.preventDefault();
    let title_value = titleInputRef.current.value;
    let description_value = descriptionInputRef.current.value;

    let object_input = {
      title: title_value,
      description: description_value
    };

    async function postBlog(){
      const post_blog = await fetch('http://localhost:3001/blogs',
      {
        method: 'POST',
        body: JSON.stringify(object_input),
        headers:{
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('auth_token')
        }
      });
      return post_blog;
    }
    postBlog().then(data =>{
      console.log(data)
    }).then(
      () =>{
        history.replace('/')
      }
    )
  }

  return <Card>
    <h1>New Travel Blog</h1>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor='title'>Title</label><br/>
        <input type='text' required id='title' ref={titleInputRef}/>
      </div>
      <div className={classes.input}>
        <label htmlFor='description'>Description</label>
        <textarea id='description' ref={descriptionInputRef}></textarea>
      </div>
      <button className={classes.btn}>Submit</button>
  </form>
  </Card>
 

}

export default NewTravelBlogForm;