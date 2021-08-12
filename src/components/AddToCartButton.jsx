import React from 'react';

class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      price: '',
      qts: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { product } = this.props;

    this.setState({
      title: product.title,
      image: product.thumbnail,
      price: product.price,
    });
  }

  handleClick() {
    let product = [];

    // REFERÊNCIA - https://abre.ai/c9iQ
    // Object.prototype.hasOwnProperty.call - VERIFICA SE JÁ EXISTE A PROPRIEDADE NO LOCAL STORAGE
    if (Object.prototype.hasOwnProperty.call(localStorage, 'product')) {
      product = JSON.parse(localStorage.getItem('product'));
    }
    product.push(this.state);

    localStorage.setItem('product', JSON.stringify(product));

    JSON.parse(localStorage.getItem('product')).forEach((item) => {
      console.log(item.title);
    });
  }

  render() {
    const { testid } = this.props;

    return (
      <div>
        <button
          data-testid={ testid }
          onClick={ this.handleClick }
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default AddToCartButton;
