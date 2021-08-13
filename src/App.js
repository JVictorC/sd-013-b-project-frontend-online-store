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
    this.totalCart = this.totalCart.bind(this);
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
    } else {
      const cardLocal = JSON.parse(localStorage.getItem('card'));
      this.setState({ card: cardLocal });
    }
    // if (card.some(({ id }) => id === newCard.id)) {
    //   const teste = card.map((obj) => {
    //     if (obj.id === newCard.id) {
    //       obj.quantity += 1;
    //     }
    //     return obj;
    //   });
    //   this.setState({
    //     card: teste,
    //   });
    // } else {
    //   this.setState((prevState) => ({
    //     card: [...prevState.card, newCard],
    //   }));
    // }
  }

  increaseQt({ target }) {
    const { card } = this.state;
    const item = card.find((res) => res.id === target.id);
    if (item.availableQtd > item.quantity) {
      item.quantity += 1;
      this.setState([...card]);
    }
    localStorage.setItem('card',
      JSON.stringify(card));
  }

  decreaseQt({ target }) {
    const { card } = this.state;
    const item = card.find((res) => res.id === target.id);
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.setState([...card]);
    }
    localStorage.setItem('card',
      JSON.stringify(card));
  }

  deleteItem({ target }) {
    const { card } = this.state;
    const filtered = card.filter((res) => res.id !== target.id);
    this.setState({ card: filtered });
  }

  totalCart(card) {
    if (card) {
      let total = 0;
      card.forEach((item) => {
        total += item.quantity;
      });
      return total;
    }
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
                  QuantityItemCard={ this.totalCart(card) }
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
