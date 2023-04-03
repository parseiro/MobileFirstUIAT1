import React from "react";

export const Sidenav = React.memo(() => {
    return (
        <aside
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                backgroundColor: "#f2f2f2",
                gridArea: "sidebar",
                padding: "20px"
            }}
        >
            <ul style={{listStyle: "none", margin: 0, padding: 0}}>
                <li style={{padding: 10, borderBottom: "1px solid #ccc"}}>
                    <a href="#"
                       style={{color: "#333", textDecoration: "none"}}>
                        Barra estilo React-inline
                    </a>
                </li>
                <li style={{padding: 10, borderBottom: "1px solid #ccc"}}>
                    <a href="#"
                       style={{color: "#333", textDecoration: "none"}}>
                        Notícias locais
                    </a>
                </li>
                <li style={{padding: 10}}>
                    <a href="#"
                       style={{color: "#333", textDecoration: "none"}}>
                        Notícias internacionais
                    </a>
                </li>
            </ul>
        </aside>
    );
})

