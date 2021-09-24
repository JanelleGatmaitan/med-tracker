import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './pages/about';
import Dashboard from './pages/dashboard';
import NoMatch from './pages/no-match';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
