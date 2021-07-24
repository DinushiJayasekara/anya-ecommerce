import "./Home.css";
import ProductList from '../../components/products/ProductList';
import { data } from "../../data/data";

const Home = () => {
    return (
        <div className="home">
            <div className="grid-container">
                <main className="main">
                    <div className="content">
                        <ul className="product-container">
                            {
                                data.products.map(product => (
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