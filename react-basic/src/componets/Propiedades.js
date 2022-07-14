import React from "react";
import PropTypes from "prop-types";

export default function Propiedades (props) {
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano?"verdadero":"falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre+"-"+props.objeto.correo}</li>
                <li>{props.elemReact}</li>
                <li>{props.arreglo.map(props.funtion).join(", ")}</li>
                <li>{props.componenteReact}</li>
            </ul> 
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: "Las props",
};

Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
};