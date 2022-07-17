import React from 'react';
import { useSelector } from 'react-redux';

const Income = () => {
  const income = useSelector((state) => state.budget.totals.income);

  return (
    <>
      <div className='budget__income clearfix'>
        <div className='budget__income--text'>Income</div>
        <div className='right'>
          <div className='budget__income--value'>{income}</div>
          <div className='budget__income--percentage'>&nbsp;</div>
        </div>
      </div>
    </>
  );
};
export default Income;
