import ReactDOM from 'react-dom/client';
import './assets/style/style.scss'
import { App } from './App';
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import { NavBasket } from './components/NavBasket/NavBasket'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer/Footer';
import { MenuPage } from './pages/Menu/MenuPage';
import { Provider } from 'react-redux'
import store from './reducers'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Header/>
        <NavBar/>
        <NavBasket/>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/menu/*' element={<MenuPage/>}/>
        </Routes>
        <Footer/>
      </Provider>
    </BrowserRouter>
  </>
);

