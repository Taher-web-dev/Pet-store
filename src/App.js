import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import avPetsThunk from './Redux/Pets/thunk';
import HomePage from './components/Homepage/homepage';
import Pet from './components/PetObject/pet';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(avPetsThunk('available')), []);
  useEffect(() => dispatch(avPetsThunk('pending')), []);
  useEffect(() => dispatch(avPetsThunk('sold')), []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<Pet />} />
        <Route path="/update" element={<Pet />} />
      </Routes>
    </Router>
  );
}

export default App;
