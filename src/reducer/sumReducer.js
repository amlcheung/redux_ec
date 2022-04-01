const initialState = {
    value: 100
}

// handles the decrementing action, but does not handle displaying
// the current count on the screen. need another component to handle that.
export default function sumReducer(state = initialState, action) {
    if (action.type === 'DECREMENT') {
        return {
            value: state.value - action.decrementAmount,
        
        }
    }

    return state;
}