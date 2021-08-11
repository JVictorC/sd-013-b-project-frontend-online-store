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
      category: '',
      submit: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    });
  }

  render() {
    const { query, category, submit } = this.state;
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

        {(query !== '' && submit) ? <RenderProducts query={ query } /> : message}

        <Link to="/shopping-cart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Carrinho de Compras
          </button>
        </Link>
        <aside>
          <CategoriesAside value={ category } handleChange={ this.handleChange } />
        </aside>
      </div>
    );
  }
}

export default Home;
