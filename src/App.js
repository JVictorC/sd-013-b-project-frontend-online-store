import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { card: [], productDetailsSelect: {} };
    this.getCardItem = this.getCardItem.bind(this);
    this.getDetailsProduct = this.getDetailsProduct.bind(this);
  }

  getDetailsProduct(newProduct) {
    this.setState({ productDetailsSelect: newProduct });
  }

  getCardItem(newCard) {
    this.setState({ card: newCard });
  }

  render() {
    const { card, productDetailsSelect } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (
                <Home
                  getCardItem={ this.getCardItem }
                  getDetailsProduct={ this.getDetailsProduct }
                />
              ) }
            />
            <Route path="/cart" render={ () => <Cart card={ card } /> } />
          </Switch>
        </div>
        <Route
          path="/productDetails/:id"
          render={ () => (
            <ProductDetails productDetailsSelect={ productDetailsSelect } />
          ) }
        />
      </BrowserRouter>
    );
  }
}

export default App;
