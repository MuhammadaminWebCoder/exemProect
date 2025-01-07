import './App.css';
import React, { useState } from "react";
import ListForm from './components/ListForm';
import ListCategory from './components/ListCategory'
function App() {
  const [state, setState] = useState(() => {
    try {
      return localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
    } catch (error) {
      console.error("LocalStorage xato kelmoqda:", error);
      return [];
    }
  });
  localStorage.setItem('data',JSON.stringify(state))
  return (
    <div className='w-[500px] mx-auto mt-5'>
      <ListForm state={state} setState={setState} />
      <ListCategory state={state} setState={setState}/>
    </div>
  );
}

export default App;