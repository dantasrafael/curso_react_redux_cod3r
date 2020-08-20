import './Input.css'
import React, { useState } from 'react'

export default _ => {
    const [valor, setValor] = useState('Inicial')

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <input value={valor} onChange={e => setValor(e.target.value)}></input>
            <input value={valor} readOnly></input>
            <input value={undefined}></input>
        </div>
    );
};
