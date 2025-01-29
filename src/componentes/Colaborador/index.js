import './colaborador.css'
import { IoMdCloseCircle } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";




const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    const favoritar = () => {
        aoFavoritar(colaborador.id)
    }

    return (<div className="colaborador">

        <IoMdCloseCircle size={25} className='deletar' onClick={() => aoDeletar(colaborador.id)}/>
            

        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favorito'>
                {colaborador.favorito ? <MdFavorite onClick={favoritar} color='red' size={25}/> : <MdFavoriteBorder size={25} onClick={favoritar}/>}
            </div>
        </div>
    </div>)
}

export default Colaborador