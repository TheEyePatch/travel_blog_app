import { useContext } from 'react';
import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'
import AuthContext from '../../contexts/auth-context';
function MainNavigation(){
  const authContext = useContext(AuthContext);

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Travel Blog</h1>
      <nav className={classes.nav}>
        <ul className={classes.link_list}>
          <li><Link to='/' >Travel Blogs</Link></li>
          <li><Link to = '/travel_blogs/new'>New Blog</Link></li>
          <li><Link to = '/sign_in'>Sign In</Link></li>
          <li onClick={authContext.logout} ><Link >Sign Out</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;