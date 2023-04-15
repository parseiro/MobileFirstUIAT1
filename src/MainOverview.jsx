import React from "react";
import styles from "./MainOverview.module.css";
import {Card} from "./Card.jsx";


// This is a component that uses CSS modules
export const MainOverview = React.memo(() => {
    return (
        <div className={styles.principal}>
            <h1 className={styles.heading}>Estilos CSS-module</h1>
            <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel ipsum ut quam feugiat euismod. Sed in erat ac dolor tempor malesuada non non sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vel bibendum enim. In hac habitasse platea dictumst. Suspendisse lacinia augue in nisi laoreet, at dictum enim efficitur. Integer quis hendrerit nibh.</p>
            <div className={styles.cards}>
                <Card title="Valor do dólar" text="Hoje o dólar fechou em R$5,07" />
                <Card title="Qual é o seu estilo?" text="Card estilo styled-components"/>
                <Card title="Previsão do tempo" button="Veja aqui"/>
            </div>
        </div>
    );
})
