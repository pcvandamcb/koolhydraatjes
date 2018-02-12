import React from 'react';
import { Link } from 'react-router-dom';

import products from '../data/products';

const ProductDetails = ({ match }) => {
  const productDetails = products.find(product => product.id === parseInt(match.params.id, 10));

  return (
    <div>
      <div>
        <Link to="/">Terug</Link>
      </div>
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
              {(productDetails.kh100gr / 100 * productDetails.serving).toLocaleString('nl-NL')} KH
            </span>
          </li>
        </ul>
      </div>
      <div className="product-notes">
        <h2>Notes</h2>
        <p>{productDetails.notes}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
