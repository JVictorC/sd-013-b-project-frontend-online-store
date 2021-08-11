import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

export default class CartRender extends React.Component {
  render() {
    const { items, onClick } = this.props;

    return (
      <section>
        {items.map((item) => (<CartItem
          title={ item.title }
          thumbnail={ item.thumbnail }
          quantity={ item.quantity }
          price={ item.price }
          key={ item.id }
          onClick={ onClick }
        />))}
        <div className="total-price">
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

CartRender.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
