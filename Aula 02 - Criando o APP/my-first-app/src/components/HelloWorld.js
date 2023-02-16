import React from "react";


/* function HelloWorld(){
    return (
        <div>
            { <h1>Meu primeiro componente !! usando function </h1> }
        { </div> }
    )
}*/

/* const HelloWorld = () => {
    return (
        <h1> Meu primeiro Compoente ! Usando Const </h1>
    )
}*/

class HelloWorld extends React.Component{
    render() { 
        return (
            <h1> Meu primeiro Componente !! Usando Class </h1>
        )
    } 
}
export default HelloWorld

// Funciona das duas maneiras