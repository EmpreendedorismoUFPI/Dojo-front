import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function InputField() {
    return (
        <div>
            <p id="text-area">Nome da atividade</p>
            <input id="input-section" type="text"></input>
        </div>
    );
}

export default InputField;