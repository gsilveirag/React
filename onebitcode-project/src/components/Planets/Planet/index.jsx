import { GrayImg } from "../../Shared/gray_img"
import { Description } from "../../Shared/description_with_link"
import { clickOnPlanet } from ".."

export function Planet(props){
    let title;

    if(props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>

    return(

            <div onClick={() => props.clickOnPlanet(props.name)} className="planet">
                <h4><strong>{title}</strong></h4>
                <Description descricao={props.descricao}
                url_descricao={props.url_descricao}
                />
                <br/>
                <GrayImg img_url={props.img_url} gray = {props.gray} />
            </div>
            
        )
}