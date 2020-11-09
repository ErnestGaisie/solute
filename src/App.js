import './App.css';
import Header from "./components/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
       <Header />
       </Switch>
      </Router>
    </div>
  );
}

export default App;
