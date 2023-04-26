
import './App.css';
import Header from './Mycmpontes/Header';
import Captions from './Mycmpontes/Captions';
import About from './Mycmpontes/About';
import Services1 from './Mycmpontes/Services1';
import Gallery from './Mycmpontes/Gallery';
import Link from './Mycmpontes/Link';
import ContectUs from './Mycmpontes/ContectUs';
import Footer from './Mycmpontes/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/captions' component={Captions} />
          <Route path='/about' component={About} />
          <Route path='/services1' component={Services1} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/link' component={Link} />
          <Route path='/contectUs' component={ContectUs} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
