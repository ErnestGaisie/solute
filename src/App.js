import './App.css';
import Header from "./components/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home"

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
          <Route path = "/">
            <Home />
          </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
