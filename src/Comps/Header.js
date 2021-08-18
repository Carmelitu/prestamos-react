import React, {Fragment} from 'react';

function Header(props){

    return(
        <Fragment>
            <h1>{props.titulo}</h1>
            <p>{props.descripcion}</p>
        </Fragment>
    )
}

export default Header;