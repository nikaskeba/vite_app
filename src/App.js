import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;