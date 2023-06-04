import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './Routes/PublicRoutes'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
        <BrowserRouter>
            <Provider store={ store }>
                <Header />
                <MainRoutes />
                <Footer />
            </Provider>
        </BrowserRouter>
    </>
  );
}

export default App;
