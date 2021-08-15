import React from 'react';

class CheckoutPayment extends React.Component {
  render() {
    return (
      <div className="payment">

        <h3>Método de Pagamento</h3>

        <label htmlFor="boleto">
          Boleto
          <input
            type="radio"
            name="boleto"
          />
        </label>

        <p>Cartão de crédito</p>

        <label htmlFor="visa">
          Visa
          <input
            type="radio"
            name="visa"
          />
        </label>

        <label htmlFor="MasterCard">
          MasterCard
          <input
            type="radio"
            name="MasterCard"
          />
        </label>

        <label htmlFor="Elo">
          Elo
          <input
            type="radio"
            name="Elo"
          />
        </label>
      </div>
    );
  }
}

export default CheckoutPayment;
