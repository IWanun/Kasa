import React from 'react'
import './ErrorPageNotFound.scss'
import Main from '../../layout/Main'
import { Link } from "react-router-dom"

function ErrorPageNotFound() {
return (
    <>
    <Main>
    <div className='error_page'>
    <h1>404</h1>
    <h2>Oops ! La page que vous demandez n'existe pas</h2>
    <Link to ="/"> Retourner à la page d'acceuil</Link>
    </div>
    </Main>
    </>
)
}

export default ErrorPageNotFound