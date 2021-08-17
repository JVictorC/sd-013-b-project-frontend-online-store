import React from 'react';
import { Link } from 'react-router-dom';
import CheckForm from './CheckForm';

class Checkout extends React.Component {
  render() {
    let total = 0;
    const parse = JSON.parse(localStorage.getItem('cart'));
    return (
      <div className="product-in-cart">
        <Link to="/">Voltar</Link>
        {parse.map((product) => {
          total += product.price;
          return (
            <div key={ product.id }>
              <h4>{ product.title }</h4>
              <p>{ product.price }</p>
            </div>
          );
        })}
        <p className="checkout-value">{ `Total: R$${total}` }</p>
        <CheckForm />
      </div>
    );
  }
}

export default Checkout;
