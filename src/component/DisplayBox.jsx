import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';


export default function DisplayBox(props) {

    function getNumberFromState(state) {
        return state[props.displayInstance]
    }

    const currentCount = useSelector(getNumberFromState, shallowEqual)

    return (
        <h1>{currentCount}</h1>
    );
}