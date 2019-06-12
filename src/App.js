import React from 'react';
import HexView from './HexView';
import './App.css';

function App() {
  const bytes = 'SwAAAAIAAAAAAAAAAAA7AUNhY2hlIE9iamVjdHMgVmVyc2lvbiAyMDE1LjEuNC44MDMgQ2FjaGUgeERCQyBTZXJ2ZXIgOC4wMQMEAQMEAQMEAwUBODkyAgQ=';
  return (
    <div className="App">
      <h1>hello</h1>
      <HexView data={bytes} />
    </div>
  );
}

export default App;
