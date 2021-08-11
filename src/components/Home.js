import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesAside from './CategoriesAside';
import SearchBar from './SearchBar';
import RenderProducts from './RenderProducts';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      categoryId: '',
      submit: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.renderMain = this.renderMain.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.setState({
      submit: true,
      categoryId: '',
    });
  }

  handleCategory({ target }) {
    const { id } = target;

    this.setState({
      categoryId: id,
      submit: false,
    });
  }

  renderMain() {
    const { query, categoryId } = this.state;
    return (
      <RenderProducts query={ query } categoryId={ categoryId } />
    );
  }

  render() {
    const { query, categoryId, submit } = this.state;
    const message = (
      <p
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>);

    return (
      <div>
        <div>
          <SearchBar
            query={ query }
            handleChange={ this.handleChange }
            handleClick={ this.handleClick }
          />
        </div>
        <div>
          {!submit && categoryId === '' ? message : this.renderMain()}
        </div>

        <Link to="/shopping-cart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Carrinho de Compras
          </button>
        </Link>
        <aside>
          <CategoriesAside handleCategory={ this.handleCategory } />
        </aside>
      </div>
    );
  }
}

export default Home;
