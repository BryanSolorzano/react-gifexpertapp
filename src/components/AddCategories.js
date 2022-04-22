import React, { useState } from 'react'

export const AddCategories = ({ setcategories }) => {
    const [valueInput, setvalueInput] = useState('');

    const getValueInput = (e) => {
        // console.log(e.target.value)
        setvalueInput(e.target.value);
    }

    const sendData = (e) => {
        e.preventDefault();
        if (valueInput.trim().length > 0) {
            setcategories((args => [valueInput, ...args]));
        };

        setvalueInput('');
    }

    return (
        <form onSubmit={sendData}>
            <input
                type="text"
                value={valueInput}
                onChange={getValueInput}
            />
        </form>
    )
}
