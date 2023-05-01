import { useState } from 'react';

    const MenuLateral = () => {
        const [inputValues, setInputValues] = useState({
            input1: '',
            input2: '',
        });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
            setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleReset = () => {
        setInputValues({
            input1: '',
            input2: '',
        });
    };

    return (
        <div>
            <input
            type="text"
            name="input1"
            value={inputValues.input1}
            onChange={handleInputChange}
            />
            <input
            type="text"
            name="input2"
            value={inputValues.input2}
            onChange={handleInputChange}
            />
        <button onClick={handleReset}>Borrar Valores</button>
        </div>
    );
};

export default MenuLateral;
