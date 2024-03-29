import "./styles.css";
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
import { StarsRaiting } from "../StarsRaiting";

const ProductCard = (props) => {
  return (
    <div className="productCardComponent">
      <img src={props.image} alt={"logo"} className="card-img" />
      <div className="card-text-section">
        <div>
          <NavLink className="product-title" to={`/details/${props.id}`}>
            {props.title}
          </NavLink>
        </div>
        <div className="price-rating-container">
          <b className="price">€{props.price}</b>
          {/* <b>{props.rating} ★★★☆☆</b> */}
          <div>
            <StarsRaiting />
          </div>
        </div>
        <div className="product-description">
          <p>{props.description.substring(0, 150)}... </p>
        </div>
        <div className="card-icons">
          <NavLink to="/favorites">
            <FiShoppingCart className="product-card-icon" />
          </NavLink>
          <NavLink to="/favorites">
            <FiHeart className="product-card-icon" />
          </NavLink>
          <NavLink to="/favorites">
            <FiSearch className="product-card-icon" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
