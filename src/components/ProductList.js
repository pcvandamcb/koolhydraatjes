import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import products from '../data/products';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  getProductList() {
    const productList = this.state.search
      ? products.filter(product =>
          `${product.name} ${product.brand}`.toLowerCase().includes(this.state.search.toLowerCase())
        )
      : products;

    return productList.sort((a, b) => {
      const valA = `${a.name}, ${a.brand}`.toLowerCase();
      const valB = `${b.name}, ${b.brand}`.toLowerCase();

      if (valA < valB) return -1;
      if (valA > valB) return 1;
      return 0;
    });
  }

  handleChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  render() {
    const productList = this.getProductList();

    return (
      <div>
        <div className="search">
          <input type="search" placeholder="Zoeken..." onChange={this.handleChange} />
        </div>
        <div className="search-results">
          <ul>
            {productList.map(product => (
              <li key={product.id}>
                <Link to={`/product/${product.id}`}>
                  {product.name}, {product.brand}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default ProductList;
