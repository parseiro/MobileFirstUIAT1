import React from "react";
import styles from "./MainOverview.module.css";
import {Card} from "./Card";

// This is a component that uses CSS modules
export const MainOverview = React.memo(() => {
    return (
        <main className={styles.main}>
            Bem-vindo! Este é o overview do seu dia.
            <Card titulo="Tarefa atrasada">A tarefa X está atrasada</Card>
        </main>
    );
})
