import "./Product.css";
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div className="product">
            <Link to="#">
                <li>
                    <img
                        src="./assets/products/Product1.jpg"
                        alt=""
                        className="product-image"
                    />
                    <div className="product-name">Half Moon Earrings</div>
                    <div className="product-price">LKR 490.00</div>
                </li>
            </Link>
        </div>
    );
}

export default Product;