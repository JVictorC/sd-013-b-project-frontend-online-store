import React from 'react';
import PropTypes from 'prop-types';

import CartItems from './CartItems';
import CheckoutForm from './CheckoutForm';
import CheckoutPayment from './CheckoutPayment';
import CheckoutButton from './CheckoutButton';

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: props.list,
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
    const { list, finalPrice } = this.state;
    return (
      <div className="checkout-page">
        <section>
          <div>
            <h3>Lista de compras:</h3>
            <ul>
              { list.map((product) => <CartItems item={ product } key={ product.id } />) }
            </ul>
            <p>
              { `R$${finalPrice}` }
            </p>
          </div>
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

CheckoutPage.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CheckoutPage;
