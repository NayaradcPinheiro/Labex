import React from "react";
import { useHistory } from 'react-router-dom';
import { goToListTripsPage } from "../routes/goTo";

const HomePage = () => {
    const history = useHistory()
   
    return(
        <>
        <h1>LABEX</h1>
        <button onClick={() => goToListTripsPage(history)} >Ver Viagens</button>
        <button>Área Adm</button>
        </>
    )
}

export default HomePage;