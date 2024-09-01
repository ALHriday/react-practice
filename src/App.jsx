
import './App.css'
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Time from './components/Time';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className='bg-slate-800'>
      <Navbar />
      <Time />
      <Counter />
      <Header />
      <Cards />
      <Footer />
      
    </div>
  )
}

export default App
