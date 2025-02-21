import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Newsletter from './pages/Newsletter';
import About from './pages/about';
import Home from './pages/Home';
import ProductDetails from "./pages/ProductDetails"
import Page404 from './pages/Page404';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path='product/:id' element={<ProductDetails/>}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
        </Router>
    );
}

export default App;
