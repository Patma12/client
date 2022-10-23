import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './component/home/Home';
import About from './component/about/About';
import Store from './component/store/Store';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
}

export default App;
