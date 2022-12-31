import { useState } from "react";
import './App.css';
import Header from './components/header/Header'
import Hero from './components/hero/Hero';
import Pdf from './components/pdf/Pdf'
import Products from './components/products/Products'
import Footer from './components/footer/Footer'

let image = ["uno","dos"];






function App() {
  return (
    <>
      <Header/>
      <Hero/>
     <Pdf/>
     <Products/>
      <Footer/>
    </>
  );
}

export default App;
