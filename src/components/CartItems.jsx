import React from 'react';
import PropTypes from 'prop-types';

export default class CartItems extends React.Component {
  render() {
    const { quantity, sumQuantity, subtractQuantity } = this.props;

    return (
      <section>
        <div>
          {/* Botão de retirar o item do carrinho */}
          <button type="submit">Retirar</button>
          {/* Imagem do produto */}
          <img src="item" alt="item" />
          {/* Nome do produto */}
          <p>Nome do produto</p>
          {/* Botão para remover 1 item (Sem ficar negativo) */}
          <button
            type="submit"
            data-testid="product-decrease-quantity"
            onClick={ subtractQuantity }
          >
            -
          </button>
          {/* Quantidade de itens */}
          <span>{ quantity }</span>
          {/* Botão para adicionar 1 item */}
          <button type="submit" data-testid="product-increase-quantity" onClick={ sumQuantity }>+</button>
          {/* Preço do item */}
          <p>R$1000,00</p>
        </div>
        <div>
          <h2>
            Valor total da compra:
            <span>R$1000,00</span>
          </h2>
          <button type="submit">Finalizar compra</button>
        </div>
      </section>
    );
  }
}

CartItems.propTypes = {
  quantity: PropTypes.number.isRequired,
};
