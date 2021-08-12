import React from 'react';

class Detalhes extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
      email: '',
      message: '',
      rating: 0,
    };

    this.addToCartDetails = this.addToCartDetails.bind(this);
  }

  componentDidMount() {
    this.recoverLocal();
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  recoverLocal = () => {
    const item = localStorage.getItem('item');

    if (item) {
      this.setState({
        product: JSON.parse(item),
      });
    }
  }

  addToCartDetails() {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const itemDetails = JSON.parse(localStorage.getItem('item'));
    cartItems.push(JSON.stringify(itemDetails));
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }

  render() {
    const { product, email, rating, message } = this.state;
    return (
      <div>
        <button
          data-testid="shopping-cart-button"
          type="button"
          name="detailsSopButton"
        >
          shop
        </button>

        <div data-testid="product-detail-name" key={ product.id }>
          <h2 data-testid="shopping-cart-product-name">{ product.title }</h2>
          <img src={ product.thumbnail } alt="product_image" />
          <p>{ product.price }</p>
          <p data-testid="shopping-cart-product-quantity"> 1 </p>
          <button
            type="button"
            onClick={ this.addToCartDetails }
            data-testid="product-detail-add-to-cart"
          >
            AddCart
          </button>
          <div>
            <fieldset>
              <h3> Avaliação : </h3>
              <input
                type="text"
                name="email"
                value={ email }
                onChange={ this.handleInputChange }
                placeholder="Digite seu email"
              />
              <input
                type="number"
                name="rating"
                value={ rating }
                onChange={ this.handleInputChange }
                min={ 1 }
                max={ 5 }
              />
              <textarea
                type="text"
                name="message"
                data-testid="product-detail-evaluation"
                value={ message }
                onChange={ this.handleInputChange }
                placeholder="Deixe sua opnião sobre o produto"
              />
              <button type="button">Avaliar</button>
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

export default Detalhes;
