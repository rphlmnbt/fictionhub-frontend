import './App.css';
import Header from "./components/Header"
import Home from './components/Home'
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BestSellers from './components/BestSellers';



function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/fictionhub-reactjs/" component={Home} />
          <Route path="/fictionhub-reactjs/aboutus" component={AboutUs} />
          <Route path="/fictionhub-reactjs/contactus" component={ContactUs} />
          <Route path="/fictionhub-reactjs/bestsellers" component={BestSellers} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
