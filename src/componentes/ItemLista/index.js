import Reac from 'react';
import './style.css';

const ItemLista = (props) => (
    <div className='box-signo'>

        <div className='nome-signo'>
            {props.signo}
        </div>

        <img className='imagem-signo' src={props.imagem} alt='Aquário'/>

        <div className='periodoNascimento'>
            {props.dataInicio} - {props.dataFim}
        </div>
    </div>
);

export default ItemLista;