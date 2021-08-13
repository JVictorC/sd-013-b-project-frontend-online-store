import React from 'react';
import CartList from '../components/CartList';

class CarrinhoDeCompra extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props,
      mensagem: true,
      purchaseAmount: 0,
    };

    this.incrementVelueu = this.incrementVelueu.bind(this);
    this.decrementVelueu = this.decrementVelueu.bind(this);
  }

  componentDidMount() {
    this.valeuList();
  }

  valeuList() {
    const { products } = this.state;
    const box = products;
    const total = { total: 0 };
    box.forEach((element) => {
      total.total += element.valueTotal;
    });
    if (products.length > 0) {
      this.setState({
        products,
        mensagem: false,
        purchaseAmount: total.total,
      });
    }
  }

  incrementVelueu(obj) {
    const { products, purchaseAmount } = this.state;
    const value = { value: purchaseAmount };
    const box = products;
    const resultado = box.find(({ id }) => id === obj.id);
    box.forEach((elemento) => {
      if (resultado === elemento) {
        elemento.quantidade += 1;
        elemento.valueTotal = elemento.price * elemento.quantidade;
        value.value += elemento.valueTotal;
        this.setState({
          products: box,
          purchaseAmount: value.value,
        });
      }
    });
  }

  decrementVelueu(obj) {
    const { products, purchaseAmount } = this.state;
    const value = { value: purchaseAmount };
    const box = products;
    const resultado = box.find(({ id }) => id === obj.id);
    box.forEach((elemento) => {
      if (resultado === elemento && elemento.quantidade > 0) {
        elemento.quantidade -= 1;
        elemento.valueTotal = elemento.price * elemento.quantidade;
        value.value -= elemento.valueTotal;
        this.setState({
          products: box,
          purchaseAmount: value.value,
        });
      }
    });
  }

  render() {
    const { mensagem, products, purchaseAmount } = this.state;
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
        <div>
          {products.map((obj) => (
            <CartList
              increment={ this.incrementVelueu }
              decrement={ this.decrementVelueu }
              key={ obj.id }
              obj={ obj }
            />
          ))}
        </div>
        <div>
          <p>
            Valor Total:
            { purchaseAmount }
          </p>
        </div>
      </section>
    );
  }
}

export default CarrinhoDeCompra;
