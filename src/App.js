import './App.css';
import Home from './components/Home';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Home />
      <Tools />
      <Projects />
    </div>
  );
}

export default App;