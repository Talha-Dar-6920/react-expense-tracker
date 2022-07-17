import React from 'react';
import { useSelector } from 'react-redux';
import Expense from '../expense/Expense';
import Income from '../income/Income';
import './header.css';

const Header = () => {
  const budget = useSelector((state) => state.budget.budget);

  return (
    <div className='top'>
      <div className='budget'>
        <div className='budget__value'>
          <span>{budget}</span>
          <Income />
          <Expense />
        </div>
      </div>
    </div>
  );
};

export default Header;
