import React from 'react';

class CheckForm extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          id="NomeCompleto"
          placeholder="Nome Completo"
          data-testid="checkout-fullname"
        />
        <input
          type="email"
          id="Email"
          placeholder="Email"
          data-testid="checkout-email"
        />
        <input
          type="text"
          id="CPF"
          placeholder="CPF"
          data-testid="checkout-cpf"
        />
        <input
          type="text"
          id="Telefone"
          placeholder="Telefone"
          data-testid="checkout-phone"
        />
        <input
          type="text"
          id="CEP"
          placeholder="CEP"
          data-testid="checkout-cep"
        />
        <input
          type="text"
          id="Endereço"
          placeholder="Endereço"
          data-testid="checkout-address"
        />
      </form>
    );
  }
}

export default CheckForm;
