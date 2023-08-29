import Card from '../Interfaz/Card';
import './GaseosaItem.css'

function GaseosaItem(props) {
    return (
        <Card className='gaseosa'>
            <div className='gaseosa-img'>
                <img src={props.imagen} alt="No se encontro mi rey" />
            </div>
            <h2>{props.nombre}</h2>
            <p>{props.descripcion}</p>
            <b>{props.precio}</b>
            <button>Agregar al carro</button>
        </Card>
    )
}

export default GaseosaItem;