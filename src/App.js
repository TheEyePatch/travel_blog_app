import { Route, Switch, Redirect } from 'react-router-dom'
import { useContext } from 'react';
import './App.css';
import NewTravelBlog from './pages/NewTravelBlog';
import TravelBlogs from './pages/TravelBlogs';
import TravelBlog from './pages/TravelBlog';
import MainNavigation from './components/layout/MainNavigation';
import SignIn from './pages/SignIn';
import AuthContext from './contexts/auth-context';



function App() {
  const authContext = useContext(AuthContext)
  const userLoggedIn = authContext.userLoggedIn;

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
            <Route path= {`/travel_blogs/:id`}>
              <TravelBlog/>
            </Route>
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
