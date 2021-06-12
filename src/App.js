import './App.css';
import Header from "./components/Header"
import Home from './pages/Home'
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Footer from "./components/Footer"
import BestSellers from './pages/BestSellers';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from './pages/LogIn';


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
          <Route path="/fictionhub-reactjs/signup" component={SignUp} />
          <Route path="/fictionhub-reactjs/login" component={LogIn} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
