import { Route, Routes } from "react-router-dom";
import products from "./data/products.json";
import AuthRoute from "./AuthRoute";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import Cart from "./Components/Cart/Cart";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<Home products={products} />} />
                <Route replace element={<AuthRoute />}>
                    <Route path="/cart" element={<Cart />} />
                </Route>
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </div>
    );
}

export default App;
