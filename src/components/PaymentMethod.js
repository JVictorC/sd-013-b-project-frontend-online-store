import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faCreditCard } from '@fortawesome/free-solid-svg-icons';

export default class PaymentMethod extends React.Component {
  render() {
    return (
      <div>
        <h4>Método de Pagamento</h4>
        <label htmlFor="barcode">
          Boleto
          <input id="barcode" name="payment" type="radio" />
          <FontAwesomeIcon icon={ faBarcode } size="3x" />
        </label>
        <h5>Cartão de Crédito</h5>
        <label htmlFor="Visa">
          Visa
          <input id="Visa" name="payment" type="radio" />
          <FontAwesomeIcon icon={ faCreditCard } size="3x" />
        </label>
        <label htmlFor="MasterCard">
          MasterCard
          <input id="MasterCard" name="payment" type="radio" />
          <FontAwesomeIcon icon={ faCreditCard } size="3x" />
        </label>
        <label htmlFor="Elo">
          Elo
          <input id="Elo" name="payment" type="radio" />
          <FontAwesomeIcon icon={ faCreditCard } size="3x" />
        </label>
      </div>
    );
  }
}
