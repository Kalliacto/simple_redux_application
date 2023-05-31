import { createSlice } from '@reduxjs/toolkit';

//initial state
const initialState = {
    list: [],
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    extraReducers: {},
});

export const {} = pokemonSlice.actions;
export default pokemonSlice.reducer;
