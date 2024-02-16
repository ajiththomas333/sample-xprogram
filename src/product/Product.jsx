import Card from "./Card";
import "./Product.css"
function Product() {
  return (
    <div className="product">
      <div>
        <h3 className="store">suggested for you</h3>
      </div>
      <div className="row">
        <Card/>
       
        </div>

      </div>
      );
  }

      export default Product;