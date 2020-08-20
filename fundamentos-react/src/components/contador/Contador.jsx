import './Contador.css'
import React, { Component } from 'react'
import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'

class Contador extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         numero: props.numeroInicial
    //     }
    //     this.inc = this.inc.bind(this)
    //     this.dec = this.dec.bind(this)
    // }

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    // setPasso = e => {
    //     this.setState({
    //         passo: +e.target.value
    //     })
    // }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <div>
                    <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                    <Botoes setInc={this.inc} setDec={this.dec} />
                </div>

            </div>
        )
    }
}


export default Contador