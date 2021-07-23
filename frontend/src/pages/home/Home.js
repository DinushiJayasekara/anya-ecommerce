import "./Home.css";
import Product from '../../components/products/Product';
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
    return (
        <div className="home">
            <div className="grid-container">
                <Navbar />
                <main className="main">
                    <div className="content">
                        <ul className="product-container">
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </ul>
                    </div>
                </main>
                <footer className="footer">All rights reserved.</footer>
            </div>
        </div>
    );
}

export default Home;