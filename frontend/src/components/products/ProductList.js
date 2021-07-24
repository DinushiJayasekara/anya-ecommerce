import "./ProductList.css";
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <li className="product">
            <Link to={`/product/${product.id}`}>
                <img
                    src={product.image}
                    alt=""
                    className="product-image"
                />
                <div className="product-name">{product.name}</div>
                <div className="product-price">LKR {product.price}</div>
            </Link>
        </li>
    );
}

export default Product;