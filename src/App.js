import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage';

////data
import researchDATA from './DATA/researchDATA';
import laboratoryDATA from './DATA/laboratoryDATA';
import CommonTamplate from './components/CommonTamplate';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutUsPage/>} />
            <Route path='/research' element={<CommonTamplate Data={researchDATA} />} />
            <Route path='/labs' element={<CommonTamplate Data={laboratoryDATA}/>} />
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
