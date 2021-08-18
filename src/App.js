import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import AddEmployeeComponent from './Components/AddEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Switch>
            <Route exact path="/" component = {ListEmployeeComponent}></Route>
            <Route path="/employees" component = {ListEmployeeComponent}></Route>
            <Route path="/add-employee" component = {AddEmployeeComponent}></Route>
          </Switch> 
        </div>
      </Router>
    </div>
  );
}

export default App;
