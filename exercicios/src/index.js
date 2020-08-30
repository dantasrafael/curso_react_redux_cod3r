import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Pai nome="João" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Tiago" />
            <Filho nome="Carla" />
        </Pai>
    </div>,
    document.getElementById('root')
)