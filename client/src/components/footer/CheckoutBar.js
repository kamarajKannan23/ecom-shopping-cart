import React, { Component } from "react";
import Modal from "../modal/Modal";
import "../../index.css";
import "./checkoutbar.css";

class CheckoutBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleModal = this.handleModal.bind(this);
  }
  handleModal() {
    if (this.props.total === 0) {
      return;
    }
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <div className="checkoutBar">
        <div className="checkoutBar-left-side">
          <h3>Qty : {this.props.qty}</h3>
          <h3>Total : {this.props.total}</h3>
        </div>
        <div className="checkoutBar-right-side">
          <button className="button" onClick={this.handleModal}>
            Checkout
          </button>
        </div>

        {this.state.isOpen === true && (
          <Modal handleModal={this.handleModal} total={this.props.total} />
        )}
      </div>
    );
  }
}

export default CheckoutBar;
