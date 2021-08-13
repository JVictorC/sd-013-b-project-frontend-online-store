import React from 'react';
import CartList from '../components/CartList';

class CarrinhoDeCompra extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products,
      mensagem: true,
      value: {},
    };
  }

  componentDidMount() {
    this.valeuList();
  }

  valeuList() {
    const { products } = this.state;
    if (products.length > 0) {
      this.setState({
        products,
        mensagem: false,
      })
    }
  }

  

  render() {
    const { mensagem, products } = this.state;
    if (mensagem) {
      return (
        <div>
          <h1>Carrinho De Compra</h1>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }

    return (
      <section>
        <div>
          <h1>Carrinho De Compra</h1>
        </div>
      {products.map((obj) => (
        <CartList key={ obj.id } obj={ obj } />
      ))}
      </section>
    );
  }
}

export default CarrinhoDeCompra;
