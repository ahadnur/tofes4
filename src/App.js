import './App.css';
import Navbar from './component/common/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './component/home/Home';
import { TestDashBoard } from './component/testDashBoard';
import { Register } from './component/Account/Register';


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      {/* <DashContent /> */}
      <Switch>
       <Route exact path="/"><Home/></Route>
       <Route exact path="/dashboard"><TestDashBoard/></Route>
       <Route  path="/register"><Register/></Route>
     </Switch>
    </Router>
  );
}

export default App;
