import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login'
import Caracteres from './pages/Caracteres'

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/login/" component={Login} />
            <Route path="/caracteres/" component={Caracteres} />
            <Route path="/caracteres/:id" component={Caracteres} />
            <Route path="/caracteres/:id/:action" component={Caracteres} />
        </BrowserRouter>
    );
}