import { BrowserRouter, Switch, Route } from "react-router-dom";
import  HomePage  from "../pages/HomePage";
import  ListTripsPage  from "../pages/ListTripsPage";
import  ApplicationFormPage  from "../pages/ApplicationFormPage";
import  LoginPage  from "../pages/LoginPage";
import  AdminHomePage  from "../pages/AdminHomePage";
import  TripDetailsPage  from "../pages/TripDetailsPage";
import  CreateTripPage  from "../pages/CreateTripPage";


export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/trips/list" component={ListTripsPage} />
                <Route exact path="/trips/application" component={ApplicationFormPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/admin/trips/list" component={AdminHomePage} />
                <Route exact path="/admin/trips/create" component={CreateTripPage} />
                <Route exact path="/admin/trips/:id" component={TripDetailsPage} />
                <Route>
                    <div>Erro 404 - Página não encontrada</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}