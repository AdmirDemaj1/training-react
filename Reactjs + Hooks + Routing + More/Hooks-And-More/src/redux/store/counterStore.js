import {legacy_createStore} from 'redux';

export const INCREMENT = "increaseByTen";

//Create the reducer
//Duhet te amri si parametra: (action, currentState)
//Si parameter te apre vendosim state
//Duhet te bej return: (state te updateuar ne baze te actionit)

const numberReducer = (state = {number: 0, isDivShown: true}, action) => {
    //Authentication actions

    // Translation actions

    // Books actions


    console.log("action", action);
    if(action.type === INCREMENT){
        return {
            number: state.number + action.amount,
            isDivShown: state.isDivShown
        }
    }
    if (action.type === "increment"){
        return {
            number: state.number + 1,
            isDivShown: state.isDivShown
        }
    }

    if (action.type === "decrement"){
        return {
            number: state.number - 1,
            isDivShown: state.isDivShown
        }
    }

    if (action.type === "triggerDivVisibility"){
        return {
            number: state.number,
            isDivShown: !state.isDivShown
        }
    }

    return state;
}

// Create a new store
const store = legacy_createStore(numberReducer);

export default store;