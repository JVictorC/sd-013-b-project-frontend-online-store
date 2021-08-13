import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shoppingCart from '../images/shopping-cart-svgrepo-com.svg';
import FormsDetails from './FormsDetails';
import Reviews from './Reviews';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: null,
    };
    this.countProductsCart = this.countProductsCart.bind(this);
  }

  componentDidMount() {
    this.countProductsCart();
  }

  onClick = () => {
    const { location } = this.props;
    const { state: product } = location;

    if (localStorage.getItem('cart')) {
      const parse = JSON.parse(localStorage.getItem('cart'));
      parse.push({ ...product, quantidade: 1 });
      localStorage.setItem('cart', JSON.stringify(parse));
    } else {
      localStorage.setItem('cart', JSON.stringify([{ ...product, quantidade: 1 }]));
    }
  }

  countProductsCart() {
    const storage = JSON.parse(localStorage.getItem('cart'));
    if (storage) {
      this.setState({
        count: (storage.length),
      });
    }
  }

  render() {
    const { location } = this.props;
    const { state: productDetail } = location;
    const { count } = this.state;

    return (
      <div>
        <div className="product-header">
          <Link to="/">Voltar</Link>
          <Link
            className="shopping-cart-button"
            to={ {
              pathname: '/cart',
              state: location.state,
            } }
            data-testid="shopping-cart-button"
          >
            <div data-testid="shopping-cart-size">{count}</div>
            <img className="cart-icon" src={ shoppingCart } alt="cart icon" />
          </Link>
        </div>
        <div className="product-name-price">
          <h3 data-testid="product-detail-name">
            {productDetail.title}
          </h3>
          <h3>
            {`R$ ${productDetail.price}`}
          </h3>
        </div>
        <div className="product-detais">
          <div className="image-product-detais">image</div>
          <div className="espec-product">
            <div className="title-specs">especificações técnicas</div>
            <div className="every-spec">
              { productDetail
                .attributes.map((spec) => <p key={ spec.id }>{spec.name}</p>)}
            </div>
          </div>
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.onClick }
        >
          Adicionar ao carrinho
        </button>
        <FormsDetails productId={ productDetail.id } />
        <Reviews productId={ productDetail.id } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,

  location: PropTypes.shape({
    state: PropTypes.shape({
      category_id: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductDetails;
