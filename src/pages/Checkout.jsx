import React from 'react';

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { fullname, email, cpf, phone, cep, address } = this.state;
    const cart = JSON.parse(localStorage.getItem('cart'));

    return (
      <div>
        { cart.map((item, index) => (
          <div key={ index }>
            <p>
              { item.title }
            </p>
          </div>
        )) }
        <input
          type="text"
          value={ fullname }
          name="fullname"
          onChange={ this.handleChange }
          data-testid="checkout-fullname"
        />
        <input
          type="text"
          value={ email }
          name="email"
          onChange={ this.handleChange }
          data-testid="checkout-email"
        />
        <input
          type="text"
          value={ cpf }
          name="cpf"
          onChange={ this.handleChange }
          data-testid="checkout-cpf"
        />
        <input
          type="text"
          value={ phone }
          name="phone"
          onChange={ this.handleChange }
          data-testid="checkout-phone"
        />
        <input
          type="text"
          value={ cep }
          name="cep"
          onChange={ this.handleChange }
          data-testid="checkout-cep"
        />
        <input
          type="text"
          value={ address }
          name="address"
          onChange={ this.handleChange }
          data-testid="checkout-address"
        />
      </div>
    );
  }
}

export default Checkout;
