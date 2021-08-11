import React from 'react';
import PropTypes from 'prop-types';
import CardItems from './CardItems';
import InputAndButton from './InputAndButton';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  async handleOnClick(param) {
    await getProductsFromCategoryAndQuery('', param).then((result) => {
      this.setState({ items: result.results });
    });
  }

  render() {
    const { items } = this.state;
    const { productsList } = this.props;
    return (
      <div>
        <InputAndButton func={ this.handleOnClick } />
        { items.length === 0 && <h5>Nenhum produto foi encontrado</h5> }
        { items
          .map((item) => (
            <CardItems key={ item.id } item={ item } />))}
        {
          productsList
            .map((product) => (
              <CardItems key={ product.id } item={ product } />
            ))
        }
      </div>
    );
  }
}

ListItems.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
