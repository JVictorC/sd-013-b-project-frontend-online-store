import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { Link } from 'react-router-dom';

class SearchByQuery extends React.Component {
  constructor() {
    super();

    this.state = {
      produtos: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const object = await getProductsFromCategoryAndQuery('', 'blusa');
    const products = object.results;
    this.setState({
      produtos: products,
    });
  }

  render() {
    const { produtos } = this.state;
    const link = `/InfoProducts/${produtos.id}`;
    return (
      produtos.map((produto) => (
        <div data-testid="product" key={ produto.id }>
          <h5>{produto.title}</h5>
          <Link data-testid="product-details-link" to={ link }>Detalhes</Link>
          <img src={ produto.thumbnail } alt={ produto.title } width="150px"/>
          <p>{`R$${produto.price}`}</p>
        </div>
      ))
    );
  }
}

export default SearchByQuery;
