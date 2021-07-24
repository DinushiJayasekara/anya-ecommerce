import "./Home.css";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductList from '../../components/products/ProductList';
import { listProducts } from '../../actions/ProductActions';

const Home = () => {

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => { };
    }, [dispatch]);

    // loading ? (<div>Loading ...</div>) : error ? (<div>{error}</div>) :

    return loading ? (<div>Loading ...</div>) : error ? (<div>{error}</div>) : (
        <div className="home" >
            <div className="grid-container">
                <main className="main">
                    <div className="content">
                        <ul className="product-container">
                            {
                                products.map(product => (
                                    <ProductList product={product} key={product.id} />
                                ))
                            }
                        </ul>
                    </div>
                </main>
                <footer className="footer">All rights reserved.</footer>
            </div>
        </div>
    );
}

export default Home;