import React from 'react';
import SelectState from './SelectState';

export default class BuyerInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      fullname: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      complemento: '',
      number: '',
      city: '',
      state: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value });
  }

  render() {
    const { fullname,
      cpf,
      email,
      phone,
      cep,
      address,
      complemento,
      number,
      city,
      state,
    } = this.state;
    return (
      <div>
        <h4>Informações do Comprador</h4>
        <div>
          <form>
            <div>
              <input
                type="text"
                name="fullname"
                data-testid="checkout-fullname"
                value={ fullname }
                onChange={ this.handleChange }
                placeholder="Nome Completo"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="cpf"
                data-testid="checkout-cpf"
                value={ cpf }
                onChange={ this.handleChange }
                placeholder="CPF"
                maxLength="11"
                minLength="11"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                data-testid="checkout-email"
                value={ email }
                onChange={ this.handleChange }
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                data-testid="checkout-phone"
                value={ phone }
                onChange={ this.handleChange }
                placeholder="Telefone"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="cep"
                data-testid="checkout-cep"
                value={ cep }
                onChange={ this.handleChange }
                placeholder="CEP"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                data-testid="checkout-address"
                value={ address }
                onChange={ this.handleChange }
                placeholder="Endereço"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="complemento"
                value={ complemento }
                onChange={ this.handleChange }
                placeholder="Complemento"
              />
            </div>
            <div>
              <input
                type="number"
                name="number"
                value={ number }
                onChange={ this.handleChange }
                placeholder="Número"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="city"
                value={ city }
                onChange={ this.handleChange }
                placeholder="Cidade"
                required
              />
            </div>
            <div>
              <SelectState
                value={ state }
                onChange={ this.handleChange }
                required
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
