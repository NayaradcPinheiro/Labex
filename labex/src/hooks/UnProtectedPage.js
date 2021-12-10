import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToAdminHomePage } from "../routes/goTo"

const UnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToAdminHomePage(history)
        }
    }, [history])

}

export default UnprotectedPage;