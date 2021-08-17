import React from 'react';
import statesData from '../statesData';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      complement: '',
      number: '',
      city: '',
      states: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // ARMAZENA OS DADOS DO FORMS NO LOCAL STORAGE
  handleSubmit = (event) => {
    event.preventDefault();
    let registerUser = [];

    // REFERÊNCIA - https://abre.ai/c9iQ
    // Object.prototype.hasOwnProperty.call - VERIFICA SE JÁ EXISTE A PROPRIEDADE NO LOCAL STORAGE
    if (Object.prototype.hasOwnProperty.call(localStorage, 'registerUser')) {
      registerUser = JSON.parse(localStorage.getItem('registerUser'));
    }

    registerUser.push(this.state);
    localStorage.setItem('registerUser', JSON.stringify(registerUser));
  }

  renderFullName = () => {
    const { name } = this.state;
    return (
      <label htmlFor="name">
        <input
          required
          value={ name }
          placeholder="Nome completo"
          data-testid="checkout-fullname"
          id="name"
          name="name"
          type="text"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCPF = () => {
    const { cpf } = this.state;
    return (
      <label htmlFor="cpf">
        <input
          value={ cpf }
          maxLength="11"
          placeholder="CPF"
          data-testid="checkout-cpf"
          id="cpf"
          name="cpf"
          type="text"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderEmail = () => {
    const { email } = this.state;
    return (
      <label htmlFor="email">
        <input
          value={ email }
          placeholder="Email"
          data-testid="checkout-email"
          id="email"
          name="email"
          type="email"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderPhone = () => {
    const { phone } = this.state;
    return (
      <label htmlFor="phone">
        <input
          value={ phone }
          maxLength="12"
          placeholder="Telefone"
          data-testid="checkout-phone"
          id="phone"
          name="phone"
          type="text"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCEP = () => {
    const { cep } = this.state;
    return (
      <label htmlFor="cep">
        <input
          value={ cep }
          maxLength="8"
          placeholder="CEP"
          data-testid="checkout-cep"
          id="cep"
          name="cep"
          type="text"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderAddress = () => {
    const { address } = this.state;
    return (
      <label htmlFor="address">
        <input
          value={ address }
          placeholder="Endereço"
          data-testid="checkout-address"
          id="address"
          name="address"
          type="text"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderComplement = () => {
    const { complement } = this.state;
    return (
      <label htmlFor="complement">
        <input
          value={ complement }
          placeholder="Complemento"
          id="complement"
          name="complement"
          type="text"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderNumber = () => {
    const { number } = this.state;
    return (
      <label htmlFor="number">
        <input
          value={ number }
          placeholder="Número"
          id="number"
          name="number"
          type="text"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCity = () => {
    const { city } = this.state;
    return (
      <label htmlFor="city">
        <input
          value={ city }
          placeholder="Cidade"
          id="city"
          name="city"
          type="text"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderStates = () => {
    const states = (
      <label htmlFor="states">
        <select id="states" name="states" onChange={ this.handleChange }>
          {statesData.map((state) => (
            <option key={ state.value } value={ state.value }>{state.label}</option>
          ))}
        </select>
      </label>
    );
    return states;
  }

  render() {
    const products = JSON.parse(localStorage.getItem('product'));
    if (products !== null) {
      return (
        <div>
          <fieldset>
            <h3>Revise seus Produto</h3>
            <ul>
              {products.map((product) => (
                <li key={ product.itemId }>
                  <span>{product.qts}</span>
                  <span>{product.title}</span>
                  <span>{product.amount}</span>
                </li>
              ))}
            </ul>
            <span>{`Total ${products.reduce((acc, curr) => acc + curr.amount, 0)}`}</span>
          </fieldset>
          <fieldset>
            <form onSubmit={ this.handleSubmit }>
              <h3>Informações do comprador</h3>
              { this.renderFullName() }
              { this.renderCPF() }
              { this.renderEmail() }
              { this.renderPhone() }
              { this.renderCEP() }
              { this.renderAddress() }
              { this.renderComplement() }
              { this.renderNumber() }
              { this.renderCity() }
              { this.renderStates() }
              <button type="submit">Avaliar</button>
            </form>
          </fieldset>
        </div>
      );
    } return (
      <h1>Seu carrinho está vazio</h1>
    );
  }
}

export default Checkout;
