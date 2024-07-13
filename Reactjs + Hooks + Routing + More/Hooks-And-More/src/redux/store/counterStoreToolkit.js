import {configureStore, createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: "counter",
    initialState: {number: 0, isDivShown: true},
    reducers: {
        increment(state) {
            state.number++;
        },
        decrement(state) {
            state.number--;
        },
        increaseByTen(state, action) {
            console.log("action",action)
            state.number = state.number + action.payload;
        },
        triggerDivVisibility(state) {
            state.isDivShown = !state.isDivShown;
        }
    }
})


const authenticationSlice = createSlice({
    name: "authentication",
    initialState: {isAuthenticated: false},
    reducers: {
        login(state) {
            state.isAuthenticated = !state.isAuthenticated;
        },
        logout(state) {
            state.isAuthenticated = !state.isAuthenticated;
        },
    }
})

// In cases when you have multiple slices
 const store = configureStore({reducer: {counter: counterSlice.reducer, authentication: authenticationSlice.reducer}})


// In cases when you have only one slice
// const store = configureStore({reducer: counterSlice.reducer});
export const authActions = authenticationSlice.actions;
export const counterActions = counterSlice.actions;
export default store;