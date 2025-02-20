import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Newsletter from './pages/Newsletter';
import About from './pages/about';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/newsletter" element={<Newsletter />} />
            </Routes>
        </Router>
    );
}

export default App;
