import React from 'react';
import * as api from '../services/api';
import CategoryList from '../components/CategoryList';
import Products from '../components/Products';
import Search from '../components/Search';
import ShoppingCartButton from '../components/ShoppingCartButton';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryState: [],
      categoryId: '',
      query: '',
      productResults: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  // FAZ A REQUISIÇÃO PRA LISTAR AS CATEGORIAS DISPONÍVEIS AO RENDERIZAR
  componentDidMount() {
    this.getCategoriesApi();
  }

  // CAPTURA O VALOR DO INPUT NO ESTADO
  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  // ATIVADA NO ONCLICK BOTÃO DE BUSCA. ENVIA A CATEGORIA E TERMO DO ESTADO PARA API
  handleSearch() {
    const { categoryId, query } = this.state;

    this.getSearchApi(categoryId, query);
    console.log('AAAA');
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
    const { categoryState, productResults } = this.state;
    return (
      <div className="product-list-page">
        <aside className="category-list">
          <CategoryList list={ categoryState } />
        </aside>

        <main className="main-product-list">
          <div className="search-and-cart-div">
            <Search onChange={ this.handleChange } onClick={ this.handleSearch } />

            <ShoppingCartButton />
          </div>

          <section>
            <Products list={ productResults } />
          </section>
        </main>

      </div>

    );
  }
}

export default ProductList;
