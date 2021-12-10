import React from "react";
import { useHistory } from 'react-router-dom';
import useRequestData from "../hooks/useRequestData";
import ProtectedPage from "../hooks/ProtectedPage";
import { goToCreateTripPage } from "../routes/goTo";
import { goToHomePage } from "../routes/goTo";
import { logout } from "../services";
import AdminCard from "../componentes/AdminCard";


const AdminHomePage = () => {
    ProtectedPage()
    const history = useHistory()
    const [tripsData, getTrips] = useRequestData("/trips", {})

    const tripsList = tripsData.trips && tripsData.trips.map((t) => {
        return <AdminCard key={t.id} name={t.name} id={t.id} getTrips={getTrips} />
    })

    return (
        <div>
            <h1>Painel Administrativo</h1>
            <div>
                <button onClick={() => goToHomePage(history)}>Voltar</button>
                <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
                <button onClick={() => logout(history)}>Logout</button>
            </div>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Caregando...</p>}
        </div>
    )
}

export default AdminHomePage