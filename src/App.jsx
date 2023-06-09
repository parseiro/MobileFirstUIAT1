import './App.css'
import {Head} from "./Head.jsx";
import {Sidenav} from "./Sidenav.jsx";
import {MainOverview} from "./MainOverview.jsx";
import React from "react";

export default function App() {
    return (
        <>
            <Head/>
            <main className="principal">
                <Sidenav/>
                <MainOverview/>
            </main>
        </>
    )
}
