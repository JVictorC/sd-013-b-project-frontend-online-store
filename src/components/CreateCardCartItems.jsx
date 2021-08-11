import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

export default class CreateCardCartItems extends React.Component {
  render() {
    const { cartItems, onClickAdd, onClickRemove } = this.props;
    return (
      <div>
        {cartItems.map(({ id, title, thumbnail, price }) => (
          <div key={ id }>
            <Link data-testid="product-detail-link" to={ `/product-details/${title}` }>
              <div data-testid="product">
                <h3>{ title }</h3>
                <img src={ thumbnail } alt="Produto" />
                <p>{ `R$: ${price}` }</p>
              </div>
            </Link>
            <button type="button" onClick={ onClickAdd }>
              <AddCircleOutlineIcon />
            </button>
            <button type="button" onClick={ onClickRemove }>
              <RemoveCircleOutlineIcon />
            </button>
          </div>
        ))}
      </div>
    );
  }
}

CreateCardCartItems.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickAdd: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};
