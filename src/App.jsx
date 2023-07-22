import React from 'react';
import ExpensesProvider from './store/ExpensesProvider';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <ExpensesProvider>
      <div className="mx-auto flex h-full max-w-4xl flex-col px-2 py-3 md:px-6">
        <Header />
        <Main />
      </div>
    </ExpensesProvider>
  );
}

export default App;
