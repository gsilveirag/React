import './styles.css'

export function GrayImg(props){
    return(

        <img className={props.gray ? 'imagem' : 'color-img'} src={props.img_url}/>

    )
}