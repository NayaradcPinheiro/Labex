import React from "react";
import { useHistory } from 'react-router-dom';
import useRequestData from "../hooks/useRequestData";
import { goToHomePage, goToApplicationFormPage } from "../routes/goTo"

const ListTripsPage = () => {
    const history = useHistory()
    const [tripsData] = useRequestData("/trips",{})

    const tripsList = tripsData.trips && tripsData.trips.map((tri) => {
        return(
            <>
            <div>
            <p><b>Nome:</b> {tri.name}</p>
            <p><b>Descrição:</b> {tri.description}</p>
            <p><b>Planeta:</b> {tri.planet}</p>
            <p><b>Duração:</b> {tri.durationInDays}</p>
            <p><b>Data:</b> {tri.date}</p> 
            </div>
            </>
        )
    })

    return(
        <>
        <div> 
            <h1>Para vermos todas as viagens</h1>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}{}
                <button onClick={() => goToHomePage(history)}>Voltar</button>
                <button onClick={() => goToApplicationFormPage(history)}>Inscrever-se</button>
        </div>
       

        </>
    )
}

export default ListTripsPage;