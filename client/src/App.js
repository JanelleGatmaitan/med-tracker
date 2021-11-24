import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import About from './pages/about';
import Dashboard from './pages/dashboard';
import Auth from './pages/auth';
import NavBar from "./components/navbar";
import { UserContext } from './lib/UserContext';
import { useState } from "react";

// function handleSignIn(result) {
//   const { user, token } = result;
//   window.localStorage.setItem('react-context-jwt', token);
//   this.setState({ user });
// }

// function handleSignOut() {
//   window.localStorage.removeItem('react-context-jwt');
//   this.setState({ user: null });
// }

function App() {
  const [user, setUser] = useState(null);
  const handleSignIn = (result) => {
    const { user, token } = result;
    localStorage.setItem('react-context-jwt', token);
    setUser({ user });
    console.log('user logged in');
  }
  const handleSignOut = () => {
    setUser(null);
    console.log('user signed out');
  }

  return (
    <Router>
      <UserContext.Provider value={{user, setUser}}>
        <NavBar signOut={handleSignOut}/>
        <Route path="/" exact component={About} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path={["/register", "/sign-in"]} exact render={(props) => <Auth {...props} signIn={handleSignIn}/>}/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
