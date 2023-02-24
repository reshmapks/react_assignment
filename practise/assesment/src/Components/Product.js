import React, { Component } from "react";
import Button from "./Button";

import {} from "./products.css";
export class Product extends Component {
  render() {
    let { title, description, imageUrl, price } = this.props;
    return (
      <>
        <form>
          <div className="product_list">
            <img src={imageUrl} alt="..." height={200} width={300}></img>
            <h5 className="title">{title}</h5>
            <p className="description">{description}</p>
            <p className="price">{price}</p>
            <Button value="Like"></Button>
            <Button value="Share"></Button>
            <Button value="Purchase"></Button>
          </div>
        </form>
      </>
    );
  }
}

export default Product;
