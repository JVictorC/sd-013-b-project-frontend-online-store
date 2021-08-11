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

  render() {
    const { product, email, rating, message } = this.state;
    return (
      <div
        data-testid="product-detail-name"
        key={ product.id }
        className="productDetails"
      >
        <h2
          className="productDetailsTitle"
        >
          { product.title }
        </h2>
        <img
          src={ product.thumbnail }
          alt="product_image"
          className="productDetailsImage"
        />
        <p
          className="productDetailsPrice"
        >
          { `R$ ${product.price}` }
        </p>
        <button
          type="button"
          className="productDetailsButton"
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
    );
  }
}

export default Detalhes;
