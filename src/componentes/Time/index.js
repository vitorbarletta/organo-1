import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
        
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, 0.5)}}>
            <input value={time.cor} onChange={event => mudarCor(event.target.value, time.id)} type='color' className='input-color'></input>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return(<Colaborador aoFavoritar={aoFavoritar} key={indice} colaborador={colaborador} corDeFundo={time.cor}  aoDeletar={aoDeletar}/>)
                })}
            </div>
        </section>

    )
}

export default Time