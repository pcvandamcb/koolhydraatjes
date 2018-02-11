import React from 'react';

import products from '../data/products';

const ProductDetails = ({ match }) => {
  const productDetails = products.find(product => product.id === parseInt(match.params.id, 10));

  return (
    <div>
      <h1>
        {productDetails.name}, {productDetails.brand}
      </h1>
      <ul>
        <li>
          <h2>Voedingswaarde</h2>
          100gram <span className="kh100gr">{productDetails.kh100gr}</span>
        </li>
        <li>
          <h2>Portie</h2>
          {productDetails.serving}gr
          <span className="kh100gr">
            {(productDetails.kh100gr / 100 * productDetails.serving).toLocaleString('nl-NL')}
          </span>
        </li>
      </ul>
      <p>{productDetails.notes}</p>
    </div>
  );
};

export default ProductDetails;
