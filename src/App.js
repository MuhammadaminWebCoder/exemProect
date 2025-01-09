import React, { useState } from "react";
import ListForm from './components/ListForm';
import ListCategory from './components/ListCategory';
import '../src/App.css'

function App() {
  const [value, setValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [state, setState] = useState(() => {
    try {
      return localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
    } catch (error) {
      console.error("LocalStorage xato kelmoqda:", error);
      return [];
    }
  });

  const handleEdit = (index) => {
    setEditIndex(index);
    setValue(state[index].value);
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedState = [...state];
      updatedState[editIndex].value = value;
      setState(updatedState);
      setEditIndex(null);
      setValue('');
    }
  };

  localStorage.setItem('data', JSON.stringify(state));

  return (
    <div className="w-[500px] mx-auto mt-5">
      <ListForm state={state} setState={setState} value={value} setValue={setValue} onSave={handleSave} editIndex={editIndex}/>
      <ListCategory state={state} setState={setState} onEdit={handleEdit} />
    </div>
  );
}

export default App;
