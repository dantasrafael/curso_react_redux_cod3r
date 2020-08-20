import React from 'react'

export default props => {
    return (
        <div>
            {/* Direto
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Ana" {...props} />
            <FamiliaMembro nome="Gustavo" sobrenome="Silva" /> 
            */}
            {/* utilizando props com mapeamento da chave
                props.children.map((child, i) => React.cloneElement(child, { ...props, key: i }))
            */}
            {
                React.Children.map(props.children, child => React.cloneElement(child, props))
            }            
        </div>
    );
};
