import { createSlice } from '@reduxjs/toolkit';

//initial state
const initialState = {
    value: 0,
};

//----------------

//async actions

//----------------

//create Slice - кусочек работающий с сотоянием

const counterSlice = createSlice({
    name: 'counterToolKit',
    initialState: initialState,
    //В reducers находятся все Actions для не ассинхронных операций
    reducers: {
        increment(state, action) {
            state.value += action.payload;
        },
        decrement(state, action) {
            if (state.value <= 0) {
                return alert('Чтобы убавить нужно иметь что-то больше 0!');
            } else {
                state.value -= action.payload;
            }
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

//----------------
