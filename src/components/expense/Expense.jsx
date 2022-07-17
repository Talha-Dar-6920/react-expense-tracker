import React from 'react';
import { useSelector } from 'react-redux';

const Expense = () => {
  const expenses = useSelector((state) => state.budget.totals.expenses);
  const percentage = useSelector((state) => state.budget.percent);

  return (
    <>
      <div className='budget__expenses clearfix'>
        <div className='budget__expenses--text'>Expenses</div>
        <div className='right clearfix'>
          <div className='budget__expenses--value'>{expenses}</div>
          <div className='budget__expenses--percentage'>{percentage}%</div>
        </div>
      </div>
    </>
  );
};
export default Expense;
