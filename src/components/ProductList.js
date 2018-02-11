import React, { Component } from 'react';

import products from '../data/products';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  render() {
    const productList = this.state.search
      ? products.filter(product =>
          `${product.name} ${product.brand}`.toLowerCase().includes(this.state.search)
        )
      : products;

    return (
      <div>
        <input type="search" onChange={this.handleChange} />
        <ul>
          {productList.map(product => (
            <li>
              {product.name}, {product.brand}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ProductList;
