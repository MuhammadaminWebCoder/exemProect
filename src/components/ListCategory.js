import React from 'react';
import Button from './Button';

const ListCategory = ({ state, setState, onEdit }) => {
  const deleteItem = (index) => {
    const updatedState = [...state];
    updatedState.splice(index, 1);
    setState(updatedState);
  };

  return (
    <ul className="w-full space-y-2">
      {state.map((item, index) => (
        <li key={index} className="flex justify-between items-center text-white bg-green-500 p-2 rounded-md">
          <div>
            <span>{index + 1}</span>. {item.value}
          </div>
          <div className="flex gap-2">
            <Button title={'Edit'} onClick={() => onEdit(index)} extraClass={'!h-[30px] bg-yellow-300 hover:bg-yellow-400 text-black rounded-md px-4'}
            />
            <Button title={'Delete'} onClick={() => deleteItem(index)} extraClass={'!h-[30px] bg-red-500 hover:bg-red-600 text-white rounded-md px-4'}/>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListCategory;
