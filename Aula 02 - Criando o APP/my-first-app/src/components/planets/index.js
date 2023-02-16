import React, {Fragment} from "react";
import Planet from "./planet/Planet";


const clickOnPlanet = (name) =>{
    console.log(`Voce clicou no planeta: ${name}`)
}

const Planets = () => {
    return (
        <Fragment>
            <h3>Lista de Planetas</h3>
            <button> Clique aqui.</button>
            <hr/>
            <Planet name="Mercurio"
                descricao="Teste."
                link="https://pt.wikipedia.org/wiki/mercurio"
                img_url='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg'
                clickOnPlanet={clickOnPlanet}
                title_with_underline = {true}
            />
            <Planet name="Planeta Terra"
                descricao="A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos,[13] incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida. "
                img_url='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/300px-The_Blue_Marble_%28remastered%29.jpg'
                clickOnPlanet={clickOnPlanet}
                gray = {true}
            />
        </Fragment>
    )
}

export default Planets