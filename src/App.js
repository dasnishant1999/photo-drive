import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";

import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";

import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import PrivateRoute from "./routes/PrivateRoute";
import DataLayerContextProvider from "./contexts/DataLayerContext";

function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <DataLayerContextProvider>
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Home}></PrivateRoute>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/signin" component={SignIn}></Route>
            </Switch>
          </Router>
        </DataLayerContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
