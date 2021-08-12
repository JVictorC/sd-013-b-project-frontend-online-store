import React from 'react';
// import PropTypes from 'prop-types';
// import * as api from '../services/api';
import { Link } from 'react-router-dom';
// import Quantidade from '../components/Quantidade';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      cart: [],
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  // async getProducts() {
  //   const { match: { params: { id } } } = this.props;
  //   const product = await api.getItem(id);
  //   this.setState({
  //     product,
  //   });
  // }

  getProduct = () => {
    const productStr = localStorage.getItem('product');
    const product = JSON.parse(productStr);
    this.setState({
      product,
    });
  }

  addCart = () => {
    const { cart, product: { title, thumbnail, price, id } } = this.state;
    const cartItem = {
      title,
      thumbnail,
      price,
      id,
    };
    this.setState((prevState) => ({
      cart: [...prevState.cart, cartItem],
    }));
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  render() {
    const { product: { title, thumbnail, price } } = this.state;
    // const { title, thumbnail, price, id, attributes } = product;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/shoppingcart"
        >
          Carrinho
        </Link>
        <div className="card">
          <p data-testid="product-detail-name">
            { title }
          </p>
          <img
            src={ thumbnail }
            alt={ title }
          />
          {/* <h3>Descrição:</h3>
          {attributes.map((attribute) => (
          <div key={ attribute.name }>
            <p>
              {`${attribute.name}: ${attribute.value_name}`}
            </p>
          </div>
        ))} */}
          <p>{ `Valor: R$${price}` }</p>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ this.addCart }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
