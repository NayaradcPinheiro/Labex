import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ListTripsPage } from "../pages/ListTripsPage";
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { LoginPage } from "../pages/LoginPage";
import { AdminHomePage } from "../pages/AdminHomePage";
import { TripDetailsPage } from "../pages/TripDetailsPage";
import { CreateTripPage } from "../pages/CreateTripPage";

export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
            
                <Route>
                    <ListTripsPage/>
                </Route>

                <Route>
                    <ApplicationFormPage/>
                </Route>

                <Route>
                    <LoginPage/>
                </Route>

                <Route>
                    <AdminHomePage/>
                </Route>

                <Route>
                    <TripDetailsPage.js />
                </Route>

                <Route>
                    <CreateTripPage.js/>
                </Route>
                    
            </Switch>
        </BrowserRouter>
    )
}