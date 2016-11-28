import React from 'react';
import Footer from './shared/footer';
import Header from './shared/header';

const App = ({ children }) => (
  <div className="app">
    <Header />
      {children}
    <Footer />
  </div>
);

export default App;
