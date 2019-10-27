import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Home from "./pages/HomePage"
import About from "./pages/AboutPage"
import Products from "./pages/ProductsPage"
import Contact from "./pages/ContactPage"
import SingleProduct from "./pages/SingleProductPage"
import CartPage from "./pages/CartPage"
import Default from "./pages/DefaultPage"


import {Route, Switch} from "react-router-dom"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import SideCart from "./components/SideCart"
import Footer from "./components/Footer"


class App extends Component {
  render (){
    return (
     <>
     {/*navbar, sidebar,cart,footer */}
     <Navbar />
     <Sidebar />
     <SideCart />
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/about" component={About} />
       <Route path="/contact" component={Contact} />
       <Route path="/products" exact component={Products} />
       <Route path="/products/:id" component={SingleProduct} />
       <Route path="/cart" component={CartPage} />
       <Route component={Default} />
     </Switch>
     <Footer />
     </>
    )
  }
}


export default App;
