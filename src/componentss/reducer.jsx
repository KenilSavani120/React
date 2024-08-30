import { ADD, SUBTRACT, MULTIPLY, DIVIDE, CLEAR } from './actions';

const initialState = {
    result: 0,
};

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, result: state.result + action.payload };
        case SUBTRACT:
            return { ...state, result: state.result - action.payload };
        case MULTIPLY:
            return { ...state, result: state.result * action.payload };
        case DIVIDE:
            return { ...state, result: state.result / action.payload };
        case CLEAR:
            return { ...state, result: 0 };
        default:
            return state;
    }
};


export default calculatorReducer;
