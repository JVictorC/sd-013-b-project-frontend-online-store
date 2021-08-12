import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Checkout extends Component {
  render() {
    return (
      <div className="checkout">
        <Link to="/">🏠</Link>

        <main className="container">
          <section>
            <h2>Revise seus Produtos</h2>
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
