import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EnterPage, Home } from './pages';
import { AllBeers, SingleBeers, AddBeer } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<EnterPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/all' element={<AllBeers />} />
        <Route path='/beers/:id' element={<SingleBeers />} />
        <Route path='/add' element={<AddBeer />} />
      </Routes>
    </Router>
  );
}

export default App;
