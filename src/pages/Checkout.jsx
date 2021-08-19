import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Payment from '../components/Payment';
import ReviewProduct from '../components/ReviewProduct';

export default class Checkout extends Component {
  constructor() {
    super();
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
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitButton = () => {
    this.setState({
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    });
  };

  render() {
    const { fullname, email, cpf, phone, cep, address } = this.state;
    const { cartItems } = this.props;
    return (
      <div className="form-buy">
        <div>
          <Form>
            <FormGroup tag="fieldset">
              <Label htmlFor="checkout-fullname">
                Nome Completo
                <Input
                  type="text"
                  data-testid="checkout-fullname"
                  name="fullname"
                  value={ fullname }
                  onChange={ this.handleChange }
                  required
                />
              </Label>
              <Label htmlFor="checkout-email">
                Email
                <Input
                  type="email"
                  data-testid="checkout-email"
                  name="email"
                  value={ email }
                  onChange={ this.handleChange }
                  required
                />
              </Label>
              <Label htmlFor="checkout-cpf">
                CPF
                <Input
                  type="text"
                  data-testid="checkout-cpf"
                  name="cpf"
                  value={ cpf }
                  onChange={ this.handleChange }
                  required
                />
              </Label>
              <Label htmlFor="checkout-phone">
                Telefone
                <Input
                  type="text"
                  data-testid="checkout-phone"
                  name="phone"
                  value={ phone }
                  onChange={ this.handleChange }
                  required
                />
              </Label>
              <Label htmlFor="checkout-cep">
                CEP
                <Input
                  type="text"
                  data-testid="checkout-cep"
                  name="cep"
                  value={ cep }
                  onChange={ this.handleChange }
                  required
                />
              </Label>
              <Label htmlFor="checkout-address">
                Endereço
                <Input
                  type="text"
                  data-testid="checkout-address"
                  name="address"
                  value={ address }
                  onChange={ this.handleChange }
                  required
                />
              </Label>
            </FormGroup>
          </Form>
          <Payment />
          <Button
            type="submit"
            data-testid="shopping-cart-button"
            onClick={ this.submitButton }
          >
            COMPRAR
          </Button>
        </div>
        <div>
          <ReviewProduct cartItems={ cartItems } />
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
