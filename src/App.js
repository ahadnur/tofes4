import './App.css';
import { Content } from './component/home/Content';
import Footer from './component/home/Footer';
import Navbar from './component/home/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './component/home/Home';
import { TestDashBoard } from './component/testDashBoard';

function App() {
  return (
   <Router>
     <Navbar/>
     <Switch>
       <Route exact path="/"><Home/></Route>
       <Route exact path="/dashboard"><TestDashBoard/></Route>
     </Switch>
   </Router>
  );
}

export default App;
