import { createSlice} from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: "cart",
    initialState: {items:[], totalQuantity : 0 },
    reducers: {
        addItemToCart(state, action){
            console.log("action", action)
            const newItemData = action.payload;
            // Check if book exists in store
            // If it exists update only the quatity
            // If it doesnt push a new item into the items
            const existingItem = state.items.find((item) => item.bookId === newItemData.bookId);
            state.totalQuantity++;
            if(!existingItem) {
                // console.log("inside the push")
                state.items.push(
                    {
                        bookId: newItemData.bookId,
                        bookPrice: newItemData.bookPrice,
                        quantity: 1,
                    }
                );
                console.log("state.items",state.totalQuantity)
            } else {
                existingItem.quantity++;
                console.log("state.items",state.totalQuantity)
            }
        },
        removeItemFromCart(state, action){
            const newItemData = action.payload;
            // Check if book exists in store
            // If it exists and the quantity is 1 remove it from the list
            // If quantity is larger than 1 just decrease the qunatity
            const existingItem = state.items.find((item) => item.bookId === newItemData.bookId);
            state.totalQuantity--;
            if(existingItem.quantity === 1) {
               state.items = state.items.filter((item) => item.bookId = newItemData.bookId );
            } else if (existingItem.quantity > 1) {
                existingItem.quantity--;
            }
        }
    }
});

export const cardActions = cartSlice.actions;

export default cartSlice;