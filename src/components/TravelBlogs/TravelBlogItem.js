import Card from '../Card'
import {Link} from 'react-router-dom'

function TravelBlogItem(props){
  const blog = props.object;
  return (  
    <div>
      <Card>
        <div className={props.className}>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
        </div>
      </Card>
    </div>
  )
}

export default TravelBlogItem;