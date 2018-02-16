import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import products from '../data/products';

const calcKH = (kh100gr, serving) =>
  (Math.round(kh100gr / 100 * parseInt(serving, 10) * 10) / 10).toLocaleString('nl-NL');

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customServing: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      customServing: event.target.value
    });
  }

  render() {
    const { match } = this.props;
    const { customServing } = this.state;
    const productDetails = products.find(product => product.id === parseInt(match.params.id, 10));

    return (
      <div className="app-wrapper">
        <div className="navigation-bar">
          <div className="back-button">
            <Link to="/">
              <i className="fas fa-angle-left" />
              <span>Terug</span>
            </Link>
          </div>
        </div>
        <div className="app-content">
          <div className="product-detail">
            <div className="product-name">
              <h1>{productDetails.name}</h1>
              <span>{productDetails.brand}</span>
            </div>
            <div className="product-details">
              <ul>
                <li>
                  <h2>Voedingswaarde</h2>
                  100 gram <span className="kh">{productDetails.kh100gr} KH</span>
                </li>
                <li>
                  <h2>Portie</h2>
                  {productDetails.serving} gram
                  <span className="kh">
                    {calcKH(productDetails.kh100gr, productDetails.serving)} KH
                  </span>
                </li>
                <li>
                  <h2>Eigen hoeveelheid</h2>
                  <input type="text" onChange={this.handleChange} /> gram
                  {parseInt(customServing, 10) > 0 && (
                    <span className="kh">{calcKH(productDetails.kh100gr, customServing)} KH</span>
                  )}
                </li>
              </ul>
            </div>
            {productDetails.notes && (
              <div className="product-notes">
                <h2>Notes</h2>
                <p>{productDetails.notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
