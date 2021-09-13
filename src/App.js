import './App.css';
import Navbar from './component/common/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './component/home/Home';
import { TestDashBoard } from './component/testDashBoard';
import { DashContent } from './component/Dashboard/dContent';

function App() {
  return (
    <Router>
      <Navbar />
      <DashContent />
      {/* <Switch>
       <Route exact path="/"><Home/></Route>
       <Route exact path="/dashboard"><TestDashBoard/></Route>
     </Switch> */}
    </Router>
  );
}

export default App;
