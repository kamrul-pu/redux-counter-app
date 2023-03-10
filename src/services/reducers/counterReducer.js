import { INCREMENT, DECREMENT, RESET } from '../constants/counterConstants';

const intialCounter = {
    count: 0,
    numOfStudent: 2,
}

const counterReducer = (state = intialCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        default:
            return state;
    }
}

export default counterReducer;