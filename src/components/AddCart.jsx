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

  render() {
    return (
      this.displayItem()
    );
  }
}

AddCart.defaultProps = {
  query: PropTypes.shape({
    id: '',
    title: '',
    thumbnail: '',
    price: 0,
  }),
};

AddCart.propTypes = {
  query: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
  onClickAdd: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  totalItem: PropTypes.shape(PropTypes.object).isRequired,
};
