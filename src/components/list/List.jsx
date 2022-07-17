import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateBudget, calculateTotals, deleteItem } from '../../app/globalState';

import './list.css';

const List = () => {
  const { income, expenses } = useSelector((state) => state.budget.items);
  const dispatch = useDispatch();

  const deleteItemHandler = (e) => {
    const item = e.target.dataset.item.split('-');
    const id = item.pop();
    const type = item[0];

    dispatch(deleteItem({ id, type }));
    dispatch(calculateTotals(type));
    dispatch(calculateBudget());
  };

  const renderItems = (items) =>
    items.map((item) => (
      <div className='item clearfix' id={`${item.type}-${item.id}`} key={item.id}>
        <div className='item__description'>{item.desc}</div>
        <div className='right clearfix'>
          <div className='item__value' data-value={item.value}>
            {item.value}
          </div>
          {/* {item.type === 'expenses' ? <div className='item__percentage'>0%</div> : ''} */}
          <div className='item__delete'>
            <button className='item__delete--btn'>
              <i
                className='ion-ios-close-outline'
                data-item={`${item.type}-${item.id}`}
                onClick={deleteItemHandler}></i>
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <div className='bottom'>
        <div className='add'>
          <div className='container clearfix'>
            <div className='income'>
              <h2 className='income__title'>Income</h2>

              <div className='income__list'>{renderItems(income)}</div>
            </div>

            <div className='expenses'>
              <h2 className='expenses__title'>Expenses</h2>

              <div className='expenses__list'>{renderItems(expenses)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
