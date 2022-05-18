import { createSlice } from '@reduxjs/toolkit'
const initialState = 0;
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        return state += 1
      },
      decrement: (state) => {
        return state -= 1
      },
      incrementByAmount: (state, action) => {
        state += action.payload
      },
    },
  })

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer