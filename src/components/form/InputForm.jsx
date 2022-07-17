import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, calculateBudget, calculateTotals } from '../../app/globalState';

import './inputForm.css';

const InputForm = () => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('income');
  const dispatch = useDispatch();

  const itemsAddHandler = () => {
    if (description.trim() === '') return alert("Description can't be empty.");
    if (value === 0) return alert('Value should be greater than zero.');

    dispatch(addItem({ desc: description, value, type }));
    dispatch(calculateTotals(type));
    dispatch(calculateBudget());

    setDescription('');
    setValue(0);
  };

  return (
    <div className='bottom'>
      <div className='add'>
        <div className='add__container'>
          <select className='add__type' onChange={(e) => setType(e.target.value)}>
            <option value={'income'}>Income</option>
            <option value={'expenses'}>Expense</option>
          </select>
          <input
            type='text'
            className='add__description'
            placeholder='Add description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type='number'
            className='add__value'
            placeholder='Value'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className='add__btn' onClick={itemsAddHandler}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
