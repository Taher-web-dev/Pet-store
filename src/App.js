import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header/header';
import ListContainer from './components/petList/listContainer';
import avPetsThunk from './Redux/AvailablePet/thunk';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(avPetsThunk()), []);
  return (
    <div className="App">
      <Header />
      <ListContainer />
    </div>
  );
}

export default App;
