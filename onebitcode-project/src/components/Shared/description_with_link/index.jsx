import { Fragment } from "react";

export function Description(props){
    if(!props.descricao){
        return null;
    }
    
    
    
    if(props.url_descricao){
        return(
            
            <Fragment>
                <p>{props.descricao}</p>
                <a href={props.url_descricao}>{props.url_descricao}</a>
            </Fragment>

        )
    }else{

        return(

            <Fragment>
                <p><u>{props.descricao}</u></p>
            </Fragment>

        )

    }
}