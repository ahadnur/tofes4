import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './component/home/Home';
// import { Register } from './component/Account/Register';
import { DashContent } from "./component/Dashboard/dContent";
import { CaseForm } from "./component/CreateCase/caseForm";
import CaseDetail from "./component/CaseDetail/caseDetail";
import { Admin } from "./component/Admin/admin";
// import { CaseDetail } from './component/CaseDetail/caseDetail'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/dashboard"><DashContent /></Route>
        {/* <Route exact path="/register"><Register /></Route> */}
        <Route exact path="/caseform"><CaseForm /></Route>
        <Route exact path="/casedetail"><CaseDetail/></Route>
        <Route exact path="/admin"><Admin/></Route>
      </Switch>
    </Router>
  );
}

export default App;
