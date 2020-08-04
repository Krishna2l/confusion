import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  
render() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
           <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
=======
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {

  render() {
    return (
    	<BrowserRouter>
      <div>
         <Main />
      </div></BrowserRouter>
    );
  }
>>>>>>> temp-branch
}
}

export default App;
