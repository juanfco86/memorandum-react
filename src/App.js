import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './Routes/PublicRoutes'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <MainRoutes />
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
