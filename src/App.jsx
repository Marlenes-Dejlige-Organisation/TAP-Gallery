import React from 'react';
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
      </Main>
      <Footer />
    </>
  );
}

export default App;

