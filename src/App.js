import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListEmployeeComponent from "./Components/ListEmployeeComponent";
import AddEmployeeComponent from "./Components/AddEmployeeComponent";
import HeaderComponent from "./Components/HeaderComponent";
import UpdateEmployeeComponent from "./Components/UpdateEmployeeComponent";
import NotFoundComponent from "./Components/NotFoundComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route
              path="/add-employee"
              component={AddEmployeeComponent}
            ></Route>
            <Route
              path="/update-employee/:id"
              component={UpdateEmployeeComponent}
            ></Route>
            <Route exact path="/error" component={NotFoundComponent}></Route>
            <Route path="*" component={NotFoundComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
