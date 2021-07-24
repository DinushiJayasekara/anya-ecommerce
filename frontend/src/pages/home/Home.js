import "./Home.css";
import Product from '../../components/products/Product';
import Navbar from "../../components/navbar/Navbar";
import { data } from "../../data/data";

const Home = () => {
    return (
        <div className="home">
            <div className="grid-container">
                <Navbar />
                <main className="main">
                    <div className="content">
                        <ul className="product-container">
                            {
                                data.products.map(product => (
                                    <li>
                                        <Product product={product} />
                                    </li>
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