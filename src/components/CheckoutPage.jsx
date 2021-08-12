import React from 'react';
import CheckoutForm from './CheckoutForm';
import CheckoutPayment from './CheckoutPayment';
import CheckoutButton from './CheckoutButton';

class CheckoutPage extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      adress: '',
    };
  }

  handleOnChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  handleClick = () => {
    const { name, email, cpf, phone, cep, adress } = this.state;
    if (
      name.length > 0
      || email.length > 0
      || cpf.length > 0
      || phone.length > 0
      || cep.length > 0
      || adress.length > 0
    ) {
      this.setState({
        name: '',
        email: '',
        cpf: '',
        phone: '',
        cep: '',
        adress: '',
      });
    }
  }

  render() {
    return (
      <div className="checkout-page">
        <section>
          <h1>CHECKOUT ITEMS</h1>
        </section>
        <section>
          <CheckoutForm handleOnChange={ this.handleOnChange } />
        </section>
        <section>
          <CheckoutPayment />
        </section>
        <CheckoutButton handleClick={ this.handleClick } />
      </div>
    );
  }
}

export default CheckoutPage;
