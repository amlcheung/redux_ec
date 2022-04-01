import React, {useState} from 'react';
import CustomDecrementer from './CustomDecrementer';
import DisplayBox from './DisplayBox';



export default function App(props) {

    return (
        <div>
            <DisplayBox displayInstance={'value'}></DisplayBox>
            <CustomDecrementer decrementAmount={5}/>
        </div>
      

    );
}


