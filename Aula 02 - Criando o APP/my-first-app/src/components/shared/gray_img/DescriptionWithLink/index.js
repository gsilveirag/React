import React from "react";

const DescriptionWithLink = (props) =>{
    if(props.link){
    return(
            <>
                <p>{props.descricao}</p>
                <p>Link: <a href={props.link}>{props.link}</a></p>
            </>
        )
    }else{
        return(
            <>
                <p>{props.descricao}</p>
                <p>Link: <strong>Indisponivel.</strong></p>
            </>
        )
    }
}

export default DescriptionWithLink