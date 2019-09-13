import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login'
import Caracteres from './pages/Caracteres'
import CaracteresDetail from './pages/CaracteresDetail'
import CaracteresUpdate from './pages/CaracteresUpdate'

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/login/" exact component={Login} />
            <Route path="/caracteres/" exact component={Caracteres} />
            <Route path="/caracteres/:id" exact component={CaracteresDetail} />
            <Route path="/caracteres/:id/:action" exact component={CaracteresUpdate} />
        </BrowserRouter>
    );
}