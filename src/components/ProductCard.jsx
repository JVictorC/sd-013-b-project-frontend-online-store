import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { title, image, price } = this.props;
    return (
      <div
        data-testid="product"
        className="card"
      >
        <div className="card-title">
          <h4>{ title }</h4>
        </div>

        <div className="card-body">
          <div className="card-image-div">
            <img src={ image } alt={ title } />
          </div>
          <span>{ price }</span>
        </div>
      </div>
    );
  }
}

export default ProductCard;
