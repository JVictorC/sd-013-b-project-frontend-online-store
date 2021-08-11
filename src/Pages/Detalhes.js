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
      <div data-testid="product-detail-name" key={ product.id }>
        <h2>{ product.title }</h2>
        <img src={ product.thumbnail } alt="product_image" />
        <p>{ product.price }</p>
        <button type="button">AddCart</button>
      </div>
    );
  }
}

export default Detalhes;
