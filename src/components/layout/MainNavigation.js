import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'
function MainNavigation(){
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Travel Blog</h1>
      <nav className={classes.nav}>
        <ul className={classes.link_list}>
          <li><Link to='/' >Travel Blogs</Link></li>
          <li><Link to = '/travel_blogs/new'>New Blog</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;