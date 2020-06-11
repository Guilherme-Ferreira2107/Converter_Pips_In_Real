import React from 'react'
import './style.css'
import Loading from '../loader'

class Aplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: false,
            volumes:1,
            valueVolumes:0.20,
            input:100,
            result:0,
            items: [], 
            text: '' ,
            message: '',
        };
        this.handleChangeVolumes = this.handleChangeVolumes.bind(this);
        this.handleChangeValueVolumes = this.handleChangeValueVolumes.bind(this);
        this.handleChangePontos = this.handleChangePontos.bind(this);
        this._calculaValor = this._calculaValor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this._copy = this._copy.bind(this);
      }
    handleChangeVolumes(e) {
        this.setState({ volumes: e.target.value });
    }
    handleChangeValueVolumes(e) {
        this.setState({ valueVolumes: e.target.value });
    }
    handleChangePontos(e) {
        this.setState({ input: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    _calculaValor = () =>{
        const { input, volumes, valueVolumes } = this.state;
        let x = input * (volumes*valueVolumes);
        
        this.setState({ loading: true });
        setTimeout( () => {
            this.setState({ loading: false })
            this.setState({ result: x });
        }, 500 )        
    }
    _copy = (text) => {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
            this.setState({ message: 'Valor copiado!' });
            setTimeout( () => {
                this.setState({ message: '' })
            }, 1000 )
        } catch (err) {
            console.log('Oops, unable to copy');
            window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", text);
        }
        document.body.removeChild(textArea);
    }
    render(){
        const { input, volumes, valueVolumes, result, loading } = this.state;
        return (            
            <div class="aplicacao">
                <div class="item">
                    <h1>Conversor de Pips para Real</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                <section>
                    <div class="item">
                        <label>Informe o valor de (1)Lote/Volume?</label>
                        <input
                            type='number'
                            onChange={this.handleChangeValueVolumes}
                            value={valueVolumes}
                        />
                    </div>
                    <div class="item">
                        <label>Informe a quantidade de Lote/Volume?</label>
                        <input
                            type='number'
                            onChange={this.handleChangeVolumes}
                            value={volumes}
                        />
                    </div>
                </section>
                    <div class="item">
                        <label>Informe a quantidade de Pips/Pontos?</label>
                        <input
                            type='number'
                            onChange={this.handleChangePontos}
                            value={input}
                        />
                        <div class="item">
                        {
                            loading
                            ?<Loading />
                            :<button
                                class="button"
                                type='submit'
                                onClick={this._calculaValor}
                            >
                                Calcular
                                <span></span>
                            </button>
                        }
                        </div>
                    </div>
                    <div class="item">
                        <label class="result">Resultado: R${result.toFixed(2)}</label>
                        <button 
                            type="submit"
                            class="copy"
                            onClick={() => this._copy(result.toFixed(2))}
                        >Copy</button>
                        <label class="message"> {this.state.message} </label>
                    </div>
                </form>
            </div>            
        );
    }
}

export default Aplication; 