// const Product = () => {
//   return (
//     <div>
//       <p> is the first product Added</p>
//     </div>
//   );
// };

// export default Product;
import React from "react";

class Product extends React.Component {
  state = {
    products: [
      { title: "react", price: "99$" },
      { title: "node", price: "89$" },
      { title: "JS", price: "79$" },
    ],
    count: 0,
  };

  addCounterHandler = () => {
    this.setState((prevState) => {
      console.log();
      return { ...this.state, count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        {this.state.products.map((prd) => {
          return (
            <p>
              {prd.title} costs {prd.price}
            </p>
          );
        })}
        <p>{this.state.count}</p>
        <button onClick={this.addCounterHandler}>click to add</button>
      </div>
    );
  }
}

export default Product;
