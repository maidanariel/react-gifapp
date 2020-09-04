import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCat}) => {

    const [inputValue, setValue] = useState('');        
    
    const handleInput = (e) =>{
        setValue(e.target.value);

    }

    const handleSubmit= (e) =>{
        e.preventDefault();
      

        if(inputValue.trim().length > 2){
            setCat(cat => [inputValue,...cat ]);
            setValue('');
        }


    }
    
    return (
        <form onSubmit= {handleSubmit}>
            <input type = "text" 
            value = {inputValue}
            onChange = {handleInput}
            ></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCat : PropTypes.func.isRequired
}
