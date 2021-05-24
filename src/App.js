import './App.css';
import Header from "./components/Header"
import Home from './components/Home'
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
