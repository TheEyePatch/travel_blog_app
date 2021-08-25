import { useContext } from 'react';
import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'
import AuthContext from '../../contexts/auth-context';
function MainNavigation(){
  const authContext = useContext(AuthContext);
  const userLoggedIn = authContext.userLoggedIn;
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Travel Blog</h1>
      <nav className={classes.nav}>
        <ul className={classes.link_list}>
          
          <li><Link to='/' >Travel Blogs</Link></li>
          {userLoggedIn && 
            <li><Link to = '/travel_blogs/new'>New Blog</Link></li>
          }
          { userLoggedIn &&
            <li><button onClick={authContext.logout}  >Sign Out</button></li> 
            }
          {!userLoggedIn && 
          <li><Link to = '/sign_in'>Sign In</Link></li>
          }
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;