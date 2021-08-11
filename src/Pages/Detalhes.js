import React from 'react';

class Detalhes extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.recoverLocal();
  }

  recoverLocal = () => {
    const item = localStorage.getItem('item');

    if (item) {
      this.setState({
        product: JSON.parse(item),
      });
    }
  }

  render() {
    const { product } = this.state;
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
      </div>
    );
  }
}

export default Detalhes;
