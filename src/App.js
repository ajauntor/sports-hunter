import Home from "./component/Home/Home";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from "./component/NotFound/NotFound";
import ClubDetail from "./component/ClubDetail/ClubDetail";


function App() {
  return (
    <div className="main-div">
    <Router>
      <Switch>

        <Route path="/home" >
          <Home/>
        </Route>

        <Route path="/club/:clubId">
          <ClubDetail/>
        </Route>

        <Route exact path="/" >
          <Home/>
        </Route>

        <Route path="*" >
          <NotFound/>
        </Route>



      </Switch>
    </Router>
    </div>
  );
}

export default App;
