import Card from '../Card'
import {Link} from 'react-router-dom'

function TravelBlogItem(props){
  const blog = props.object;
  return (  
    <div>
      <Card>
        <div className={props.className}>
          <Link to={`/travel_blogs/${blog.id}`}><h1>{blog.title}</h1></Link>
          <p>{blog.description}</p>
        </div>
      </Card>
    </div>
  )
}

export default TravelBlogItem;