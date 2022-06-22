import Header from './components/Header/header';
import PetCard from './components/petList/petCard';

function App() {
  return (
    <div className="App">
      <Header />
      <PetCard key={1} imgUrl="none" name="cat" />
    </div>
  );
}

export default App;
