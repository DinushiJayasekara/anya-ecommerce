import "./Product.css";
import { useParams } from 'react-router-dom'
// import { data } from '../../data/data';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { detailsProduct } from "../../actions/ProductActions";

const Product = () => {
    const { id } = useParams();
    // const product = data.products.find(product => product.id === id);

    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(id));
        return () => { };
    }, [dispatch, id])

    console.log(product);

    return (
        <div className="product" >
            {loading ? <div>Loading...</div> : error ? <div>{error}</div> :
                <div className="product-details">
                    <div className="product-details-image">
                        <img src={product.image} alt="Product" />
                    </div>
                    <div className="product-details-info">
                        <h1>{product.name}</h1>
                        <h3>{product.collection} Collection</h3>
                        <b>LKR {product.price}</b>
                        <h3>Quantity:
                            <input type="number" />
                        </h3>
                        <h5 className="product-details-category">
                            Category: {product.category}
                        </h5>
                        <div className="product-details-info-buy">
                            <button>Buy Now</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    <div className="product-details-properties">
                        <div className="product-details-delivery-options">
                            <h3>Delivery Options</h3>
                            <div className="product-details-delivery-options-home">
                                <span><b>Home Delivery</b></span><br />
                                <span>2 - 3 days <span>LKR 150 Postal Fee</span></span>
                            </div>
                            <p>Cash on Delivery Available</p>
                        </div>
                        <div className="product-details-return-options">
                            <h3>Return and Warranty</h3>
                            <div className="product-details-return-options-moneyback">
                                <span><b>5 Days Return Policy</b></span><br />
                                <span>100% money back guarantee</span> <br />
                                <span>Change of mind is not applicable</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </ div >
    );
}

export default Product;