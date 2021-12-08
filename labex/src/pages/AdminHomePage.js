import React from "react";
import { useHistory } from 'react-router-dom';

const AdminHomePage = () => {
    const history = useHistory()
    return(
        <>
        <h1>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</h1>
        </>
    )
}

export default AdminHomePage