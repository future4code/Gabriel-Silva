import React, { useState } from "react";

import TelaPrincipal from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage'
import Error from "../pages/Error";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {



  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <TelaPrincipal />
            </Route>

          <Route exact path={"/LoginPage"}>
            <LoginPage />
          </Route>

          <Route exact path={"/ListTripsPage"}>
            <ListTripsPage />
          </Route>

          <Route exact path={"/ApplicationFormPage"}>
            <ApplicationFormPage />
          </Route>

          <Route exact path={"/AdminHomePage"}>
            <AdminHomePage />
          </Route>


          <Route>
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
