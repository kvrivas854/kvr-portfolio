
import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Home from "./components/Home/index";
import About from "./components/pages/About";
import Project from "./components/Project/index";
import Contact from "./components/Contact/index";
import Experience from "./components/Experience/index";
import Footer from "./components/Footer/index";



class App extends Component {
render() {
  return (
    <div>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/experience" component={Experience} />
        <Footer />
      </div>
    </Router>
    
    </div>
    
  );
}
    }
export default App;
