import React, { useState } from "react";

import "./productcard.css";
import "../../index.css";

function ProductCard(props) {
  const [count, setCount] = useState(0);

  const price = 450;

  const addCountHandler = () => {
    props.handleParentQtyPlus(price);
    setCount(count + 1);
  };

  const removeCountHandler = () => {
    if (count === 0) {
      return;
    }
    props.handleParentQtyMins(price);

    setCount(count - 1);
  };

  return (
    <div className="product-card">
      <div className="product-image-side">
        <img
          src={require(`../../${props.product.imageUrl}`)}
          alt={props.product.productName}
        />
        <h3>{props.product.offerText}</h3>
      </div>
      <div className="product-description-side">
        <h3 className="card-title">{props.product.brandName}</h3>
        <h3>{props.product.productName}</h3>
        <h5>{props.product.quantity}</h5>
        <div className="Price">
          <h3 id="our-price">{props.product.price}</h3>
          <h5 id="mrp-price"> {props.product.mrp}</h5>
        </div>
        <div>
          <button className="button add-to-cart-btn" onClick={addCountHandler}>
            ADD TO CART
          </button>
          <button className="button qty-btn" onClick={removeCountHandler}>
            -
          </button>
          <span id="qty">{count}</span>
          <button className="button qty-btn" onClick={addCountHandler}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
