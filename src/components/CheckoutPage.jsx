import React from 'react';
import PropTypes from 'prop-types';
import BuyerInfo from './BuyerInfo';
import Payment from './Payment';

export default class CheckoutPage extends React.Component {
  render() {
    const { query } = this.props;
    return (
      <div>
        { query.map(({ id, title, thumbnail, price }) => (
          <div key={ id }>
            <h3>{ title }</h3>
            <img src={ thumbnail } alt="Produto" />
            <p>{ `R$: ${price}` }</p>
          </div>
        ))}

        <BuyerInfo />
        <Payment />
        <button type="submit">Comprar</button>
      </div>
    );
  }
}

CheckoutPage.propTypes = {
  query: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.string,
  ]).isRequired,
};
