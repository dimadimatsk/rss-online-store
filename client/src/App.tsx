import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Mailing } from './components/Mailing/Mailing';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Main';
import { ItemsPage } from './pages/ProductsPage';

function App() {
  return <Home />;
  // return (
  //   <>
  //     <Navbar />
  //     <ItemsPage />
  //     <Mailing />
  //     <Footer />
  //   </>
  // );
}

export default App;
