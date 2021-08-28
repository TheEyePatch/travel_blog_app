import Card from '../Card'
import {Link, Route, Switch} from 'react-router-dom'
import { useContext } from 'react';
import UserContext from '../../contexts/user-context';
import AuthContext from '../../contexts/auth-context';

function TravelBlogItem(props){
  const blog = props.object;
  const user_context = useContext(UserContext);
  const authContext = useContext(AuthContext)
  const userLoggedIn = authContext.userLoggedIn;
  if(userLoggedIn){
    user_context.getUser();
  }
  
  const isAuthor = user_context.email == blog.author

  const header = (
    <Switch>
      <Route path='/' exact>
      <Link to={`/travel_blogs/${blog.id}`}><h1>{blog.title}</h1></Link>
      </Route>
      <Route path='*'>
      <h1>{blog.title}</h1>
      </Route>
    </Switch>
  )

  return (  
    <div>
      <Card>
        <div className={props.className}>
          {header}
          <p>{blog.description}</p>
          <p>{blog.author}</p>

          <Route path='/travel_blogs/:id' exact>
            {isAuthor && userLoggedIn && <button>Update</button>}
          </Route>

        </div>
      </Card>
    </div>
  )
}

export default TravelBlogItem;