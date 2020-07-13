import React from 'react';
import Body from './components/body'
import Header from './components/header'
import Footer from './components/footer'
import './styles.scss'

function App() {
  return (
    <div class="app">
      <section>
        {/* Left Ad Space */}
        <div class="item ads"></div>
        {/* Main */}
        <div class="item body">
            <Header />
            <Body />
            <Footer />
        </div>
        {/* Right Ad Space */}
        <div class="item ads"></div>
      </section>
    </div>
  );
}

export default App;
