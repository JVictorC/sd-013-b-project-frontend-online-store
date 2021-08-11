import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InfoProducts extends Component {
  constructor() {
    super();

    this.state = {
      produto: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.infoProduct();
  }

  infoProduct = () => {
    const { match: { params: { Name } } } = this.props;
    fetch(`https://api.mercadolibre.com//items?ids=${Name}`).then((object) =>
    object.json()).then((result) => this.setState(
      { produto: result, loading: true },
    ));
  }

  info = (produto) => produto.map(({ body: { title, thumbnail, id, attributes } }) => (
    <div key={ id }>
      <img src={ thumbnail } alt={ title } />
      <h3 data-testid="product-details-name">{ title }</h3>
      { attributes.map((item) => <li key={ item.id }>{ item.name }</li>) }
    </div>
  ))

  render() {
    const { produto, loading } = this.state;
    return (
      <div>
        { loading && this.info(produto) }
      </div>
    )
  }
}

InfoProducts.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

info.defaultProps = {
  match: {
    params: {
      name: '',
    },
  },
};

export default InfoProducts;