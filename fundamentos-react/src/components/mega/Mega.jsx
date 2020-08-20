import './Mega.css'
import React, { useState } from 'react'

export default _ => {
    const [qtdNumeros, setQtdNumeros] = useState(6)
    const [numerosMega, setNumerosMega] = useState(geradorMega())

    function geradorNumero(min, max, array) {
        const aleatorio = parseInt(Math.random() * ((max + 1) - min)) + min
        return array.includes(aleatorio) ? geradorNumero(min, max, array) : aleatorio
    }

    function geradorMega() {
        const novoSorteio = Array(qtdNumeros)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = geradorNumero(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 -n2)
            .join("   ")
        return novoSorteio
    }

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numerosMega}</h3>
            <div>
                <input type="number" min={6} max={30} value={qtdNumeros} onChange={e => setQtdNumeros(+e.target.value)} />
                <button onClick={() => setNumerosMega(geradorMega)}>Gerar números</button>
            </div>
        </div>
    );
};
