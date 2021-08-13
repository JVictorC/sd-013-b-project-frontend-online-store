import React from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  handleProduct = () => {
    const productStr = localStorage.getItem('product');
    const product = JSON.parse(productStr);
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', `[${JSON.stringify(product)}]`);
    } else {
      const cart = JSON.parse(localStorage.getItem('cart'));
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  render() {
    const productStr = localStorage.getItem('product');
    const product = JSON.parse(productStr);
    return (
      <div>
        <div>
          <Link
            data-testid="shopping-cart-button"
            to="/shoppingcart"
          >
            Carrinho
          </Link>
        </div>
        <div className="card">
          <h2 data-testid="product-detail-name">
            { product.title }
          </h2>
          <div>
            <img
              src={ product.thumbnail }
              alt={ product.title }
            />
          </div>
          <div>
            <h3>Descrição:</h3>
            {product.attributes.map((attribute) => (
              <div key={ attribute.name }>
                <p>
                  {`${attribute.name}: ${attribute.value_name}`}
                </p>
              </div>
            ))}
          </div>
          <p>{ `Valor: R$${product.price}` }</p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.handleProduct }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
