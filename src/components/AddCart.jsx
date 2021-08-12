import React from 'react';
import PropTypes from 'prop-types';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import SetTotalItems from './SetTotalItems';

export default class AddCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [],
      count: 0,
    };

    this.displayItem = this.displayItem.bind(this);
    this.setItem = this.setItem.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  componentDidMount() {
    this.setItem();
  }

  handleAddClick(id) {
    const { totalItem } = this.props;
    this.setState(({ count }) => ({
      count: count + totalItem[id],
    }));
  }

  handleRemoveClick(id) {
    const { count } = this.state;
    const { totalItem } = this.props;
    this.setState(() => ({
      count: count - totalItem[id],
    }));
    if (count === 0) {
      this.setState({
        count: 0,
      });
    }
  }

  setItem() {
    const { query } = this.props;
    this.setState({ item: query });
  }

  displayItem() {
    const { item } = this.state;
    const { totalItem } = this.props;
    return (
      <div>
        {item.map(({ id, title, thumbnail, price, available_quantity: qtty }, index) => (
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
              onClick={ this.handleAddClick(id) }
            >
              <AddCircleOutlineIcon />
            </button>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={ this.handleRemoveClick(id) }
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
};
