import React from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

class App extends React.Component {
  state = {
    title: 'Sanctum vitae et Programming',
    headerLinks: [
      {
        title: 'Home', path: '/'
      },
      {
        title: 'About', path: '/about'
      },
      {
        title: 'Contact', path: '/contact'
      }
    ],
    home: {
      title: 'Be Relentless',
      subTitle: 'Projects that make a difference',
      text: 'checkout my project below'
    },
    About: {
      title: 'About Me',
    },
    Contact: {
      title: 'Lets talk',
    }
  }
  render() {
    const { title } = this.state;
    return(
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
