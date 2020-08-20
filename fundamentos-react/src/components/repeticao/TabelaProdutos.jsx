import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default props => {
    const listaProdutos = produtos.map((prod, i) => {
        return ( 
            <tr key={prod.id} className={(i+1) % 2 === 0 ? 'Par' : ''}>
                <td>{prod.nome}</td>
                <td>{prod.preco.toLocaleString('pt-br')}</td>
            </tr>
        )
    }); 
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutos}
                </tbody>                
            </table>
        </div>
    );
};
