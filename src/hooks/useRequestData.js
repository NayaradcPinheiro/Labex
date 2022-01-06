import axios from "axios";
import { BASE_URL } from "../constants/url";
import { useState } from "react";
import { useEffect } from "react";


const useRequestData = (endpoint, inicialState) => {
    const[data, setData] = useState(inicialState)

    const getData = () => {
        axios.get(`${BASE_URL}${endpoint}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((res) => setData(res.data))
        .catch((err) => alert(err.response.data.message))
    }
    
    useEffect(() =>{
        getData()
    },[endpoint])

    return[data,getData]
}

export default useRequestData;

    



