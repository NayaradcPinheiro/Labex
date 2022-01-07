import React from "react";
import { useHistory } from 'react-router-dom';
import useRequestData from "../hooks/useRequestData";
import { goToHomePage, goToApplicationFormPage } from "../routes/goTo"
import CardTrip from "../componentes/CardTrip"

const ListTripsPage = () => {
    const [tripsData] = useRequestData("/trips",{})
    const history = useHistory()
    

    const tripsList = tripsData.trips && tripsData.trips.map((t) => {
        return<CardTrip key={t.id} trip={t}/>
    })

    return(
        <>
        <div> 
            <h1>Lista de Viagens</h1>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
            
           
                <button onClick={() => goToHomePage(history)}>Voltar</button>
                <button onClick={() => goToApplicationFormPage(history)}>Inscrever-se</button>
                
        </div>
        </>
    )
}

export default ListTripsPage;