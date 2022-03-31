import React, {useState} from 'react';
import CustomDecrementer from './CustomDecrementer';



export default function App(props) {

    return (
        <div>
            <CustomDecrementer decrementAmount={5}/>
        </div>
      

    );
}


