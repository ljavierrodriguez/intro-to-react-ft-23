import React from 'react'
import Menu from './Menu'


const names = ["Hugo", "Paco", "Luis"];

function Titulo(props) {
    return <h1 className={props.className}>{props.texto}</h1>
}
// Definicion del componente Input
function Input(props) {
    return (
        <>
            <label>{props.label}</label>
            <input type={props.type} id={props.id} name={props.name} className={props.className} />
        </>
    )
}


function Home() {
    return (
        <>
            <Menu />
            <Titulo texto="Hola Mundo" className='text-primary fs-2' /> // JSX
            {/* Utilizando el componente input */}
            <Input label="username" type="email" id="username" name="username" className="form-control" placeholder="username" valor="john.doe@email.com" />
            <Input label="password" type="password" id="password" name="password" className="form-control" placeholder="password" />
            <Input label="name" type="text" id="name" name="name" className="form-control" placeholder="name" />

            <ul>
                {
                    names.map((valor, indice) => {
                        return <li key={indice}>{valor}</li>
                    })
                }
            </ul>

        </>
    )
}

export default Home