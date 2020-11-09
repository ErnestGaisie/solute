import './App.css';
import Header from "./components/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"

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
       <Footer />
      </Router>
    </div>
  );
}

export default App;
