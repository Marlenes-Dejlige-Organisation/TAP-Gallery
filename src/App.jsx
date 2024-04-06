import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Products } from './pages/Products/Products';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/test" element={<div>Test Page</div>} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;

