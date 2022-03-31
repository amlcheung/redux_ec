const initialState = 100;


export default function sumReducer(state = initialState, action) {
    return {
        state: state + action.decrementAmount
    }

    return state;
}