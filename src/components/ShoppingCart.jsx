import React from 'react';
import ShoppingCartCard from './ShoppingCartCard';

export default class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      local: [],
    };
  }

  componentDidMount() {
    this.updateCart();
  }

  updateCart = () => {
    const items = localStorage.getItem('cart');
    const parsing = JSON.parse(items);
    this.setState({
      local: [...parsing] });
  }

  render() {
    const { local } = this.state;
    return (
      <div>
        {local.map((item) => (
          <ShoppingCartCard
            key={ item.id }
            title={ item.title }
            quantity={ item.quantity }
          />
        ))}
      </div>
    );
  }
}
