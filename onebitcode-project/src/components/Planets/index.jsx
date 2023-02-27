import { Planet } from "./Planet";

export function clickOnPlanet (name){
    return(
        alert(`Voce clicou no planeta: ${name}` )
    )
}

export function Planets(){
    return(

        <div>
            <h2>Lista de Planetas:</h2>
            <hr/>
            
            <Planet name='Mércurio' 
            descricao="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. "
            url_descricao="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
            img_url="https://upload.wikimedia.org/wikipedia/commons/e/e1/Mercury_Mariner10.jpg"
            clickOnPlanet={clickOnPlanet}
            title_with_underline = {true}
            gray = {true}
            />
            
            <Planet name="Terra"
            descricao="A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul."
            img_url="https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg"
            clickOnPlanet={clickOnPlanet}
            
            />


            <Planet name="Júpiter "
            img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/300px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg"
            clickOnPlanet={clickOnPlanet}
            
            />
        
        </div>

    )
}