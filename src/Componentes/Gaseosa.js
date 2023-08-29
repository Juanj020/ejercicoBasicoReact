import './Gaseosa.css'
import GaseosaItem from "./GaseosaItem.js";

function Gaseosa(props){
    return (
        <div className='contenido'>
            <GaseosaItem imagen={props.items[0].imagen} nombre={props.items[0].nombre} descripcion={props.items[0].descripcion} precio={props.items[0].precio} />
            <GaseosaItem imagen={props.items[1].imagen} nombre={props.items[1].nombre} descripcion={props.items[1].descripcion} precio={props.items[1].precio} />
            <GaseosaItem imagen={props.items[2].imagen} nombre={props.items[2].nombre} descripcion={props.items[2].descripcion} precio={props.items[2].precio} />
            <GaseosaItem imagen={props.items[3].imagen} nombre={props.items[3].nombre} descripcion={props.items[3].descripcion} precio={props.items[3].precio} />
            <GaseosaItem imagen={props.items[4].imagen} nombre={props.items[4].nombre} descripcion={props.items[4].descripcion} precio={props.items[4].precio} />
            <GaseosaItem imagen={props.items[5].imagen} nombre={props.items[5].nombre} descripcion={props.items[5].descripcion} precio={props.items[5].precio} />
        </div>
    )
}

export default Gaseosa;