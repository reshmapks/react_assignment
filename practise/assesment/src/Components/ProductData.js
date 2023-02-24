import React, { Component } from "react";
import Product from "./Product";
import {} from "./products.css";
export class ProductData extends Component {
  products = [
    {
      title: "Strawberry",
      type: "Fruits",
      description: "Fresh Strawberries are available",
      url: "https://th.bing.com/th/id/R.dc43b7dee1272ad259570a587de3709f?rik=wMVDd2KM4q02cg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-g9Uef-BHP_c%2fVYalRWnFYzI%2fAAAAAAAAABg%2fPoSAi4NqaH4%2fs1600%2fstrawberry-half-flat.jpg&ehk=Z%2f%2bu5Cxd4jpBOLLHC95GtKcu8PoWg5BFNtmTE%2f3swgc%3d&risl=&pid=ImgRaw&r=0",
      price: "$87.50",
      rating: 4,
    },
    {
      title: "Milk",
      type: "Dairy",
      description: "Homely Item",
      url: "https://tse1.mm.bing.net/th/id/OIP.2uw1ufzt3eqSZuf0tX_SNQHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      price: "$27.50",
      rating: 5,
    },
    {
      title: "SoftDrinks",
      type: "Drinks",
      description: "Instant Drink",
      url: "https://cdn.britannica.com/33/206333-050-598A0208/sodas-plastic-cups-ice-straws.jpg",
      price: "$27.50",
      rating: 5,
    },

    {
      title: "Brown eggs",
      type: "dairy",
      description: "Raw organic brown eggs in a basket",
      url: "https://s3.amazonaws.com/stockfreedom/wp-content/uploads/2018/03/13222538/sf01105500-1560x1040.jpg",
      price: "$28.00",
      rating: 5,
    },
  ];
  constructor() {
    super();
    this.state = {
      products: this.products,
    };
  }
  render() {
    return (
      <div>
        {this.state.products.map((element) => {
          return (
            <div className="features" key={element.price}>
              <Product
                title={element.title}
                price={element.price}
                description={element.description}
                imageUrl={element.url}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductData;
