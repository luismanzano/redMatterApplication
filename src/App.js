import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Bonus from './Bonus';

function App() {
  return (
    <div className="App">
    <Router>
        <nav className="navbar">
        <Link to="/task1"><a href="#">Task 1</a></Link>
        <Link to="/task2"><a href="#">Task 2</a></Link>
        <Link to="/task3"><a href="#">Task 3</a></Link>
        <Link to="/task4"><a href="#">Task 4</a></Link>
        <Link to="/bonus"><a href="#">BONUS TASK</a></Link>
        </nav>

        <div className="separator"></div>

        <Switch>
            <Route path="/task1">
              <Task1 />
            </Route>
            <Route path="/task2">
              <Task2 />
            </Route>
            <Route path="/task3">
              <Task3 />
            </Route>
            <Route path="/task4">
              <Task4 />
            </Route>
            <Route path="/bonus">
              <Bonus />
            </Route>
          </Switch>

        </Router>
    </div>
  );
}

export default App;
