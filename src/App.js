import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import One from './pages/One/One';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Post from './pages/Post/Post';
import ViewProfile from "./components/ViewProfile/ViewProfile";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>

          <Route path="/" component={Home} exact/>
          <Route path="/home" component={One}/>
          <Route path="/about" component={About}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/post/:id" component={Post}/>
          <Route path="/prueba/profile/viewprofile" component={ViewProfile}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
