import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";

import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";

import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  // console.log(docs,favourites);

  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home}></PrivateRoute>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/signin" component={SignIn}></Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
