import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="flex h-full flex-col px-2 py-3">
      <Header />
      <Main />
    </div>
  );
}

export default App;
