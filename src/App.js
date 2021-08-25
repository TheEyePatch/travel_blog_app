import { Route, Switch, Redirect } from 'react-router-dom'
import { useContext } from 'react';
import './App.css';
import NewTravelBlog from './pages/NewTravelBlog';
import TravelBlogs from './pages/TravelBlogs';
import TravelBlog from './pages/TravelBlog';
import MainNavigation from './components/layout/MainNavigation';
import SignIn from './pages/SignIn';
import { useContext } from 'react';
import AuthContext from './contexts/auth-context';
import { BlogContextProvider } from './contexts/blog-context'
import BlogContext from './contexts/blog-context';

function App() {
  const authContext = useContext(AuthContext)
  const userLoggedIn = authContext.userLoggedIn;
  const blogContext = useContext(BlogContext);

  return (
    <div>
      <MainNavigation/>
      <Switch>
        <Route path='/' exact>
          <TravelBlogs/>
        </Route>
        {
          userLoggedIn && (
          <Route path='/travel_blogs/new' exact>
            <NewTravelBlog/>
          </Route>
          )
        }

        {
          userLoggedIn && (
          <BlogContextProvider>
            <Route path= {`/travel_blogs/${blogContext.blog_id}`}>
              <TravelBlog/>
            </Route>
          </BlogContextProvider>
            
          )
        }
        
        { !userLoggedIn && 
          <Route path='/sign_in' exact>
            <SignIn/>
          </Route>
        }
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
