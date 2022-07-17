import { createSlice } from '@reduxjs/toolkit';

const globalState = createSlice({
  name: 'budget',
  initialState: {
    items: {
      expenses: [],
      income: [],
    },
    totals: {
      expenses: 0,
      income: 0,
    },
    budget: 0,
    percent: -1,
  },
  reducers: {
    addItem: (state, payload) => {
      const id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
      const { desc, value, type } = payload.payload;

      state.items[type].push({ desc, value, id, type });
    },
    deleteItem: (state, payload) => {
      const { id, type } = payload.payload;

      state.items[type] = state.items[type].filter((e) => e.id !== id);
    },
    calculateTotals: (state, payload) => {
      const type = payload.payload;

      state.totals[type] = state.items[type].reduce((p, c) => p + parseFloat(c.value), 0);
    },
    calculateBudget: (state) => {
      state.budget = state.totals.income - state.totals.expenses;
      state.percent =
        state.budget !== 0 ? Math.round((state.totals.expenses / state.totals.income) * 100) : 0;
    },
  },
});

export const { addItem, deleteItem, calculateTotals, calculateBudget } = globalState.actions;

export default globalState;
