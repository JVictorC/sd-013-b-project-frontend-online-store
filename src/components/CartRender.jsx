import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

export default class CartRender extends React.Component {
  render() {
    const { items, onClick, sum } = this.props;

    return (
      <section>
        {items.map((item) => (<CartItem
          id={ item.id }
          title={ item.title }
          thumbnail={ item.thumbnail }
          quantity={ item.quantity }
          price={ item.price }
          key={ item.id }
          onClick={ onClick }
          buttonId="product-detail-add-to-cart"
        />))}
        <div className="total-price">
          <h2>
            <span>{ `Preço total da compra: R$${Math.round(sum)}` }</span>
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
  sum: PropTypes.func.isRequired,
};
