import './App.css';
import Categories from './component/Categories';
import Food from './component/Food';
import HeadLineCard from './component/HeadLineCard';
import Hero from './component/Hero';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <HeadLineCard/>
     <Food/>
     <Categories/>
    </>
  );
}

export default App;
