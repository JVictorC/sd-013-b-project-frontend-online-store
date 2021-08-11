import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { card: [] };
    this.getCardItem = this.getCardItem.bind(this);
    this.increaseQt = this.increaseQt.bind(this);
    this.decreaseQt = this.decreaseQt.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  getCardItem(newCard) {
    this.setState({ card: newCard });
  }

  increaseQt({ target }) {
    const { card } = this.state;
    const item = card.find((res) => res.id === target.id);
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
    const { card } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (
                <Home getCardItem={ this.getCardItem } />
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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
