import React from 'react';
import DataView from './DataView';
import './App.css';

function App() {
  const bytes = 'SwAAAAIAAAAAAAAAAAA7AUNhY2hlIE9iamVjdHMgVmVyc2lvbiAyMDE1LjEuNC44MDMgQ2FjaGUgeERCQyBTZXJ2ZXIgOC4wMQMEAQMEAQMEAwUBODkyAgQ=';
  return (
    <div className="App">
      <h1>hello</h1>
      <DataView data={bytes} />
    </div>
  );
}

export default App;
