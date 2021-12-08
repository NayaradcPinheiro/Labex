import React from "react";
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory()
    return(
        <>
        <h1>LABEX</h1>
        <button>Ver Viagens</button>
        <button>Área Adm</button>
        </>
    )
}

export default HomePage;