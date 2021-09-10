import './App.css';
import { Content } from './component/home/Content';
import Footer from './component/home/Footer';
import Navbar from './component/home/Nav';

function App() {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
