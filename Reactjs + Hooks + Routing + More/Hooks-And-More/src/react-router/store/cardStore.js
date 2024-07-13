import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cardReducer';

const store = configureStore({reducer: cartSlice.reducer})

export default store;