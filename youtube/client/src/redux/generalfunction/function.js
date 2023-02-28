import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: false

}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value =! state.value
      
    },

  },
})

// Action creators are generated for each case reducer function
export const {toggle,decrement} = counterSlice.actions


export default counterSlice.reducer