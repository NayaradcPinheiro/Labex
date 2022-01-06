import React from "react";
import { useHistory } from 'react-router-dom';
import Form from '../hooks/Form';
import UnprotectedPage from '../hooks/UnProtectedPage';
import { login } from "../services";
import { goToHomePage } from "../routes/goTo";




const LoginPage = () => {
    UnprotectedPage()
    const history = useHistory()
    const { form, onChange } = Form({ email: "", password: "" })

    const onClickLogin = (e) => {
        e.preventDefault()
        login(form, history)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onClickLogin}>
                <input
                    placeholder={"E-mail"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder={"Senha"}
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                />
                    <button onClick={() => goToHomePage(history)}>Voltar</button>
                    <button type={"submit"}>Entrar</button>

            </form>
        </div>
    )
}
export default LoginPage;