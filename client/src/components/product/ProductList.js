import React, { Component } from "react";
import ProductCard from "../card/ProductCard";
import CheckoutBar from "../footer/CheckoutBar";

import "../../index.css";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      productList: [],
      cartItems: [],
      qty: 0,
      total: 0,
    };
    this.handleParentQtyPlus = this.handleParentQtyPlus.bind(this);
    this.handleParentQtyMins = this.handleParentQtyMins.bind(this);
  }

  componentDidMount() {
    fetch("/api/data", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      response.json().then((data) => {
        this.setState({ productList: data, isLoaded: true });
      });
    });
  }

  handleParentQtyPlus(value) {
    this.setState((prevState) => ({
      qty: prevState.qty + 1,
      total: prevState.total + value,
    }));
  }

  handleParentQtyMins(value) {
    console.log("before" + this.state.total);
    this.setState((prevState) => ({
      qty: prevState.qty - 1,
      total: prevState.total - value,
    }));
    console.log("before" + this.state.total);
  }

  render() {
    return (
      <div>
        <div className="shopping-list">
          {this.state.isLoaded ? (
            <>
              {this.state.productList.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    handleParentQtyPlus={this.handleParentQtyPlus}
                    handleParentQtyMins={this.handleParentQtyMins}
                    product={product}
                  ></ProductCard>
                );
              })}
            </>
          ) : (
            <h1> Loading </h1>
          )}
        </div>
        <CheckoutBar qty={this.state.qty} total={this.state.total} />
      </div>
    );
  }
}

export default ProductList;
