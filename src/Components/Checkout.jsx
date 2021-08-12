import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Checkout extends Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('card'));
    return (
      <div className="checkout">
        <Link to="/">🏠</Link>

        <main className="container">
          <section>
            <h2>Revise seus Produtos</h2>
            <ol>
              {cartItems.map((item) => (
                <li key={ item.id }>
                  <h3>{item.title}</h3>
                  <img src={ item.thumbnail } alt="produto" />
                  <h3>
                    <strong>{item.price}</strong>
                  </h3>
                </li>
              ))}
            </ol>
            <h2>
              Total a pagar:
              {' '}
              {`R$ ${cartItems
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}`}
            </h2>
          </section>
          <section>
            <h2>Informações do Comprador</h2>
          </section>
          <section>
            <h2>Métodos de Pagamento</h2>
          </section>
        </main>
      </div>
    );
  }
}

export default Checkout;
