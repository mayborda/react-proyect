import React from "react";
import { CartContextProvider } from "../src/context/CartContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "../src/components/containers/ItemListContainer";
import ItemDetailContainer from "../src/components/containers/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import './App.css'
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <NavBar />
          <div className="block z-0 h-full bg-gray-100">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/category/:category">
                <ItemListContainer />
              </Route>
              <Route exact path="/details/:id">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
            </Switch>
          </div>
        <Footer />
      </Router>{""}
    </CartContextProvider>
  );
};

export default App;
