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
          <input id="barcode" type="radio" />
          <FontAwesomeIcon icon={ faBarcode } size="3x" />
        </label>
        <h5>Cartão de Crédito</h5>
        <label htmlFor="visa">
          Visa
          <input id="visa" type="radio" />
          <FontAwesomeIcon icon={ faCreditCard } size="3x" />
        </label>
        <label htmlFor="mastercard">
          MasterCard
          <input id="mastercard" type="radio" />
          <FontAwesomeIcon icon={ faCreditCard } size="3x" />
        </label>
        <label htmlFor="elo">
          Elo
          <input id="elo" type="radio" />
          <FontAwesomeIcon icon={ faCreditCard } size="3x" />
        </label>
      </div>
    );
  }
}
