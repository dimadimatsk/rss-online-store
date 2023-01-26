import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Mailing } from './components/Mailing/Mailing';
import { Navbar } from './components/Navbar/Navbar';
import { Main } from './pages/Main';
import { ItemsPage } from './pages/ProductsPage';

function App() {
  return (
    <div className="container">
      <Navbar />
      {/* <Main /> */}
      <ItemsPage />
      <Mailing />
      <Footer />
    </div>
  );
}

export default App;
