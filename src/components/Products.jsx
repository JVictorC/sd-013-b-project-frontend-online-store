import React from 'react';
import ProductCard from './ProductCard';

class Products extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <div className="products">
        {/* {console.log(`${ list.title } AAAAA`)} */}

        { list.map((element) => (
          <ProductCard
            title={ element.title }
            image={ element.thumbnail }
            price={ element.price }
            key={ element.id }
          />
        ))}
      </div>
    );
  }
}

export default Products;

