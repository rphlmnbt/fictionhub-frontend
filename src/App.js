import './App.css';
import Header from "./components/Header"
import Home from './pages/Home'
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Footer from "./components/Footer"
import BestSellers from './pages/BestSellers';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




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
