import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import GlobalsStyles from './globalStyles';
import Menu from './components/menu/Navbar';

function App() {
  return (
    <>
      <GlobalsStyles />
      <Menu />
      <Footer/>
    </>
  );
}

export default App;
