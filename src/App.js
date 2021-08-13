import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Components/Home';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';
import Checkout from './Components/Checkout';

import './Style/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { card: [], productDetailsSelect: {} };
    this.getCardItem = this.getCardItem.bind(this);

    this.getDetailsProduct = this.getDetailsProduct.bind(this);

    this.increaseQt = this.increaseQt.bind(this);
    this.decreaseQt = this.decreaseQt.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getCardInLocal = this.getCardInLocal.bind(this);
  }

  componentDidMount() {
    const cardLocal = JSON.parse(localStorage.getItem('card'));
    if (cardLocal === null) {
      localStorage.setItem('card', JSON.stringify([]));
    }
    this.getCardInLocal();
  }

  getCardInLocal() {
    const cardLocal = JSON.parse(localStorage.getItem('card'));
    this.setState({ card: cardLocal });
  }

  getDetailsProduct(newProduct) {
    this.setState({ productDetailsSelect: newProduct });
  }

  getCardItem(newCard, productDetails = false) {
    if (productDetails) {
      this.setState((prevState) => ({ card: [...prevState.card, newCard] }));
      return null;
    }
    this.setState((prevState) => ({
      card: [...prevState.card, newCard],
    }));
  }

  increaseQt({ target }) {
    console.log(target);
    const { card } = this.state;
    const item = card.find((res) => res.id === target.id);
    console.log(item);
    item.quantity += 1;
    this.setState([...card]);
  }

  decreaseQt({ target }) {
    const { card } = this.state;
    const item = card.find((res) => res.id === target.id);
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
    this.setState([...card]);
  }

  deleteItem({ target }) {
    const { card } = this.state;
    const filtered = card.filter((res) => res.id !== target.id);
    this.setState({ card: filtered });
  }

  render() {
    const { card, productDetailsSelect } = this.state;
    return (
      <BrowserRouter>
        <>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (
                <Home
                  getCardItem={ this.getCardItem }
                  getDetailsProduct={ this.getDetailsProduct }
                  QuantityItemCard={ card.length }
                  card={ card }
                />
              ) }
            />
            <Route
              path="/cart"
              render={ () => (
                <Cart
                  card={ card }
                  increase={ this.increaseQt }
                  decrease={ this.decreaseQt }
                  del={ this.deleteItem }
                />
              ) }
            />
            <Route
              path="/checkout"
              component={ Checkout }
            />
          </Switch>
          <Route
            path="/productDetails/:id"
            render={ () => (
              <ProductDetails
                productDetailsSelect={ productDetailsSelect }
                getCardItem={ this.getCardItem }
                QuantityItemCard={ card.length }
              />
            ) }
          />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
