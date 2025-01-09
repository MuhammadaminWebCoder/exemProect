import React from 'react';
import Button from './Button';

const ListForm = ({ state, setState, value, setValue, onSave, editIndex }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      onSave();
    } else {
      const newItem = {
        id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
        value: e.target.input.value,
      };
      if (newItem.value) {
        setState([...state, newItem]);
      }
    }
    e.target.reset();
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-2">
      <input
        name="input"
        className="p-2 outline-none border border-gray-300 rounded-md me-2 flex-grow"
        placeholder="Add a new name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        type={'submit'}
        title={editIndex !== null ? 'Save' : 'Add User'}
        extraClass={'text-white bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2'}
      />
    </form>
  );
};

export default ListForm;
    