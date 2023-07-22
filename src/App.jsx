import React from 'react';
import ExpensesProvider from './store/ExpensesProvider';
import Wrapper from './components/UI/Wrapper';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <ExpensesProvider>
      <Wrapper className="h-full flex-col py-3">
        <Header />
        <Main />
      </Wrapper>
    </ExpensesProvider>
  );
}

export default App;
