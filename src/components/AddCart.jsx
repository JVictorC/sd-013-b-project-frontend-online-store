import React from 'react';
import PropTypes from 'prop-types';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

export default class AddCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [],
    };

    this.displayItem = this.displayItem.bind(this);
    this.setItem = this.setItem.bind(this);
    this.cartEmpty = this.cartEmpty.bind(this);
  }

  componentDidMount() {
    this.setItem();
  }

  setItem() {
    const { query } = this.props;
    this.setState({ item: query });
  }

  displayItem() {
    const { item } = this.state;
    const { totalItem, onClickAdd, onClickRemove } = this.props;
    return (
      <div>
        {item.map(({ id, title, thumbnail, price, available_quantity: qtty }) => (
          <div key={ id } data-testid="product">
            <h3 data-testid="shopping-cart-product-name">{ title }</h3>
            <img src={ thumbnail } alt="Produto" />
            <p>{ `R$: ${price}` }</p>
            <p
              data-testid="shopping-cart-product-quantity"
            >
              {totalItem[id]}
            </p>
            <p>{`Quantidade em estoque: ${qtty}`}</p>
            <button
              data-testid="product-increase-quantity"
              type="button"
              onClick={ () => onClickAdd(id) }
              name={ id }
            >
              <AddCircleOutlineIcon />
            </button>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={ () => onClickRemove(id) }
              name={ id }
            >
              <RemoveCircleOutlineIcon />
            </button>
          </div>
        ))}
      </div>
    );
  }

  cartEmpty() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }

  render() {
    const { item } = this.state;
    return (
      // this.displayItem()
      <div>
        {item.length !== 0 ? this.displayItem() : this.cartEmpty()}
      </div>
    );
  }
}

AddCart.defaultProps = {
  totalItem: {},
};

// AddCart.propTypes = {
//   query: PropTypes.shape({
//     id: PropTypes.string,
//     title: PropTypes.string,
//     thumbnail: PropTypes.string,
//     price: PropTypes.number,
//   }),
// };

AddCart.propTypes = {
  query: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.string,
  ]).isRequired,
  onClickAdd: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  totalItem: PropTypes.objectOf(PropTypes.number),
};
