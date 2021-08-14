import classes from '../styles/NewTravelBlogForm.module.css'
import Card from '../Card';
import { useRef } from 'react';


function NewTravelBlogForm(){
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  
  const submitHandler = (event)=>{
    event.preventDefault();
    let title_value = titleInputRef.current.value;
    let description_value = descriptionInputRef.current.value;

    let object_input = {
      title: title_value,
      description_value
    };

    console.log(object_input)
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