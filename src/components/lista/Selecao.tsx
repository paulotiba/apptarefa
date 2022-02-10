
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



interface SelecaoProps {
    valor: boolean
}


export default function Selecao(props:SelecaoProps)  {

    const gradiente = props.valor ? ' bg-gradient-to-br from-blue-400 to-purple-500' : ''

    return(
        <div className={`
        flex justify-center items-center
        h-7 w-7 rounded-full cursor-pointer
        border border-grey-400 text-white
        ${gradiente}
        `}>
        {props.valor ? <FontAwesomeIcon size='sm' icon={faCheck}/>
        : ''}
        </div>
    )

}