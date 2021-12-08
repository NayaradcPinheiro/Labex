import React from "react";
import axios from "axios"

export const ListTripsPage = () => {
const getTrips = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips",
    {headers: nayara-pinheiro-labenu}
    )
    .then((res) => (res.data))
    .catch((err) => alert(err.response.data.message))

}


    return(
        <>
        <h1>Para vermos todas as viagens</h1>
        </>
    )
}