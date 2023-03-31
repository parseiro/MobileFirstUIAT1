import React from "react";

export const Sidenav = React.memo(() => {
    return (
        <aside style={{position: "fixed", left: "0", top: "0", zIndex: "20", width: "16rem", height: "100%"}}>
            <div style={{overflowY: "auto", paddingTop: "4px", paddingBottom: "4px", paddingLeft: "3px", paddingRight: "3px", height: "100%", backgroundColor: "white", borderRight: "1px solid #e5e7eb"}}>
                <ul style={{marginTop: "calc(0.5rem * calc(1 - var(--tw-space-y-reverse)))", marginBottom: "calc(0.5rem * var(--tw-space-y-reverse))"}}>
                    <li>
                        <a
                            href="#"
                            style={{display: "flex", alignItems: "center", padding: "0.5rem", fontSize: "1rem", fontWeight: "normal", color: "rgb(55, 65, 81)", borderRadius: "0.375rem", transition: "background-color 0.15s ease 0s", backgroundColor: "transparent"}}
                        >
                            <span style={{marginLeft: "0.75rem"}}>Visão geral</span>
                        </a>
                    </li>
                    <li>
                        <button
                            type="button"
                            style={{display: "flex", alignItems: "center", padding: "0.5rem", fontSize: "1rem", fontWeight: "normal", color: "rgb(55, 65, 81)", borderRadius: "0.375rem", transition: "background-color 0.15s ease 0s", backgroundColor: "transparent"}}
                        >
                            <span className="flex-1 ml-3 text-left whitespace-nowrap">Páginas</span>
                        </button>
                        <ul id="dropdown-pages"
                            className="hidden py-2 space-y-2"
                            style={{display: "none", paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "0.5rem", paddingRight: "0.5rem", marginTop: "calc(0.5rem * calc(1 - var(--tw-space-y-reverse)))", marginBottom: "calc(0.5rem * var(--tw-space-y-reverse))"}}
                        >
                            <li>
                                <a
                                    href="#"
                                    style={{display: "flex", alignItems: "center", padding: "0.5rem", paddingLeft: "2.75rem", width: "100%", fontSize: "1rem", fontWeight: "normal", color: "rgb(55, 65, 81)", borderRadius: "0.5rem", transition: "background-color 0.15s ease 0s", backgroundColor: "transparent"}}
                                >
                                    Configurações
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    style={{display: "flex", alignItems: "center", padding: "0.5rem", paddingLeft: "2.75rem", width: "100%", fontSize: "1rem", fontWeight: "normal", color: "rgb(55, 65, 81)", borderRadius: "0.5rem", transition: "background-color 0.15s ease 0s", backgroundColor: "transparent"}}
                                >
                                    Kanban
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    style={{display: "flex", alignItems: "center", padding: "0.5rem", paddingLeft: "2.75rem", width: "100%", fontSize: "1rem", fontWeight: "normal", color: "rgb(55, 65, 81)", borderRadius: "0.5rem", transition: "background-color 0.15s ease 0s", backgroundColor: "transparent"}}
                                >
                                    Calendário
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button
                            type="button"
                            style={{display: "flex", alignItems: "center", padding: "0.5rem", width: "100%", fontSize: "1rem", fontWeight: "normal", color: "rgb(55, 65, 81)", borderRadius: "0.5rem", backgroundColor: "transparent"}}
                        >

                            <span className="flex-1 ml-3 text-left whitespace-nowrap">Vendas</span>

                        </button>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <span className="flex-1 ml-3 whitespace-nowrap">Mensagens</span>
                        </a>
                    </li>
                    <li>
                        <button
                            type="button"
                            style={{display: "flex", alignItems: "center", padding: "0.5rem", width: "100%", fontSize: "1rem", fontWeight: "normal", color: "rgb(55, 65, 81)", borderRadius: "0.5rem", backgroundColor: "transparent"}}
                        >

                            <span style={{display: "flex", marginLeft: "0.75rem", textAlign: "left", whiteSpace: "nowrap"}}>
            Authentication
          </span>

                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
})

