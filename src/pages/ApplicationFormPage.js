import React from "react";
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import Form from "../hooks/Form";
import useRequestData from "../hooks/useRequestData";
import { goToListTripsPage } from "../routes/goTo";
import { sendApplication } from "../services";
import { paises } from "../constants/paises";

const ApplicationFormPage = () => {
    const history = useHistory()
    const [tripId, setTripId] = useState("")
    const { form, onChange, clear } = Form({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const [allTrips] = useRequestData("/trips", {})

    const clearFields = () => {
        clear()
        setTripId("")
    }

    const onClickSend = (e) => {
        e.preventDefault()
        sendApplication(form, tripId, clearFields)
    }

    const onChangeTrip = (e) => {
        setTripId(e.target.value)
    }

    const tripsOptions = allTrips.trips && allTrips.trips.map((t) => {
        return <option key={t.id} value={t.id}>{t.name}</option>
    })

    return (
        <div>
            <h1>Inscreva-se para uma viagem</h1>
            <form onSubmit={onClickSend}>
                <select defaultValue="" onChange={onChangeTrip}>
                    <option value="" disabled>Escolha uma Viagem</option>
                    {tripsOptions}
                </select>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                />
                <input
                    placeholder={"Idade"}
                    type={"number"}
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    required
                    min={18}
                />
                <input
                    placeholder={"Diga por que você é um bom candidato"}
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    required
                    pattern={"^.{30,}$"}
                    title={"O texto deve ter no mínimo 30 caracteres"}
                />
                <input
                    placeholder={"Profissão"}
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    required
                    pattern={"^.{10,}$"}
                    title={"A profissão deve ter no mínimo 10 caracteres"}
                />
                <select
                    placeholder={"País"}
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um País</option>
                    {paises.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })}
                </select>
                    <button onClick={() => goToListTripsPage(history)}>Voltar</button>
                    <button type={"submit"}>Enviar</button>
            </form>
        </div>
    )
}


export default ApplicationFormPage;