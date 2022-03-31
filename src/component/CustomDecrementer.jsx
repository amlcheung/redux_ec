import React from 'react';
import { useDispatch } from 'react-redux';


export default function CustomDecrementer(props) {
    const dispatch = useDispatch();

    function decrement() {

        const action = {
            decrementAmount: props.decrementAmount,
        }

        dispatch(action);
    }

    

    return (
        <button onClick={decrement}>Decrement</button>
    )
}