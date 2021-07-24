import "./Product.css";
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <div className="product">
            <Link to="#">
                <img
                    src={product.image}
                    alt=""
                    className="product-image"
                />
                <div className="product-name">{product.name}</div>
                <div className="product-price">LKR {product.price}</div>
            </Link>
        </div>
    );
}

export default Product;