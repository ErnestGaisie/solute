import './App.css';
import Header from "./components/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import SearchPage from "./components/searchPage/SearchPage"

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
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
