import {legacy_createStore} from 'redux';


//Create the reducer
//Duhet te amri si parametra: (action, currentState)
//Si parameter te apre vendosim state
//Duhet te bej return: (state te updateuar ne baze te actionit)
const numberReducer = (state = {number: 0}, action) => {

    console.log("action", action);
    if(action.type === "increaseByTen"){
        return {
            number: state.number + action.amount
        }

    }
    if (action.type === "increment"){
        return {
            number: state.number + 1
        }
    }

    if (action.type === "decrement"){
        return {
            number: state.number - 1,
        }
    }

    return state;
}

// Create a new store
const store = legacy_createStore(numberReducer);

export default store;