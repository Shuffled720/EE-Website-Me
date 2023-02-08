import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage';
import DrawerAppBar from './components/Header/NewHeader';
import { Container } from '@mui/system';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutUsPage/>} />
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
