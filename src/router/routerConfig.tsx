import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBarComponent } from "../component/navBar";
import App from "../App";

 export const RouteConfig : React.FunctionComponent<any> = () =>{
    return(
        <Routes>
            <Route path='/mavvex' element={<NavBarComponent/>} />
        </Routes>
    );
 }