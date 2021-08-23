import { Route, Switch } from 'react-router-dom'
import './App.css';
import NewTravelBlog from './pages/NewTravelBlog';
import TravelBlogs from './pages/TravelBlogs';
import MainNavigation from './components/layout/MainNavigation';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div>
      <MainNavigation/>
      <Switch>
        <Route path='/' exact>
          <TravelBlogs/>
        </Route>
        <Route path='/travel_blogs/new' exact>
          <NewTravelBlog/>
        </Route>
        <Route path='/sign_in' exact>
          <SignIn/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
