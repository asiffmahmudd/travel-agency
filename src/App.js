
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/Home/HomePage/HomePage';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/admin">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
