import React, {useState, useEffect} from 'react'
import '../css/App.css';
import Compass from "./Compass"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <main className='App-main'>
        Main Container
        <Compass/>
      </main>
      <footer className="App-footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
