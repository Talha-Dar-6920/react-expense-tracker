import React from 'react';
import Header from './components/header/Header';
import InputForm from './components/form/InputForm';
import List from './components/list/List';
import Provider from './app/Provider';

import './App.css';

function App() {
  return (
    <>
      <Provider>
        <Header />
        <InputForm />
        <List />
      </Provider>
    </>
  );
}

export default App;
