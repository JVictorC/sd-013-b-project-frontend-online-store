import React from 'react';
import * as api from '../services/api';
import CategoryList from '../components/CategoryList';
import Products from '../components/Products';
import Search from '../components/Search';
import ShoppingCartButton from '../components/ShoppingCartButton';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryState: [],
      categoryId: '',
      query: '',
      productResults: [],
      productQuantity: 0,
    };
  }

  // FAZ A REQUISIÇÃO PRA LISTAR AS CATEGORIAS DISPONÍVEIS AO RENDERIZAR
  componentDidMount() {
    this.getCategoriesApi();
  }

  // MUDA A QUANTIDADE TOTAL DE PRODUTOS
  handleClick = () => {
    const product = JSON.parse(localStorage.getItem('product'));
    this.setState({
      productQuantity: product.reduce((acc, curr) => acc + curr.qts, 0),
    });
  }

  // CAPTURA O VALOR DO INPUT - CATEGORIA OU TERMO - NO ESTADO
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });

    if (event.target.name === 'categoryId') {
      this.getSearchApi(event.target.value, '');
    }
  }

  // ATIVADA NO ONCLICK DO BOTÃO DE BUSCA. ENVIA A CATEGORIA E TERMO DO ESTADO PARA API
  handleSearch = () => {
    const { categoryId, query } = this.state;

    this.getSearchApi(categoryId, query);
  }

  // REQUISIÇÃO PRA API - LISTA DE CATEGORIAS
  async getCategoriesApi() {
    const categoriesApi = await api.getCategories();

    this.setState({
      categoryState: categoriesApi,
    });
  }

  // REQUISIÇÃO PRA API - BUSCA
  async getSearchApi(categoryId, query) {
    const searchResult = await api.getProductsFromCategoryAndQuery(categoryId, query);
    const { results } = searchResult;

    this.setState({
      productResults: results,
    });
  }

  render() {
    const { categoryState, productResults, productQuantity } = this.state;

    return (
      <div className="product-list-page">
        <aside className="category-list">
          <CategoryList list={ categoryState } onChange={ this.handleChange } />
        </aside>

        <main className="main-product-list">
          <div className="search-and-cart-div">
            <Search onChange={ this.handleChange } onClick={ this.handleSearch } />

            <ShoppingCartButton />
            <h1 data-testid="shopping-cart-size">{ productQuantity }</h1>
          </div>

          <section>
            <Products onClick={ this.handleClick } list={ productResults } />
          </section>
        </main>

      </div>

    );
  }
}

export default HomePage;
