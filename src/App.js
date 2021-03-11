import Home from "./component/Home/Home";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="main-div">
      <Home></Home>
    </div>
  );
}

export default App;
