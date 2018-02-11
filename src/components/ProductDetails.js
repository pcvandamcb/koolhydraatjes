import React from 'react';

import products from '../data/products';

const ProductDetails = ({ match }) => {
  const productDetails = products.find(product => product.id === parseInt(match.params.id, 10));

  return (
    <div className="product-detail">
      <h1>
        {productDetails.name}, {productDetails.brand}
      </h1>
      <ul>
        <li>
          <h2>Voedingswaarde</h2>
          100gram <span className="kh100gr">{productDetails.kh100gr} KH</span>
        </li>
        <li>
          <h2>Portie</h2>
          {productDetails.serving}gr
          <span className="kh100gr">
            {(productDetails.kh100gr / 100 * productDetails.serving).toLocaleString('nl-NL')} KH
          </span>
        </li>
      </ul>
      <div className="product-notes">
        <h2>Notes</h2>
        <p>{productDetails.notes}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
