import { Link } from 'react-router-dom'
import './Botao.css'

const Botao = (props) => {
    return(
        <Link to="/sobre" className='botao'>
            {props.children}
        </Link>
    )
}

export default Botao