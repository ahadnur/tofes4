import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './component/home/Home';
import { Register } from './component/Account/Register';
import { DashContent } from "./component/Dashboard/dContent";
import { CaseForm } from "./component/CreateCase/caseForm";


function App() {
  return (
    <Router>
      <Switch>
       <Route exact path="/"><Home/></Route>
       <Route exact path="/dashboard"><DashContent/></Route>
       <Route exact path="/register"><Register/></Route>
       <Route exact path="/caseform"><CaseForm/></Route>
     </Switch>
    </Router>
  );
}

export default App;
