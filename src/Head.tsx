import React from "react";


function Head() {
    return (
        <header>
            <nav className="barra-cima">
                <div className="barra-baixo">
                    <div className="logo-pesquisa-container">
                        <button
                            id="toggleSidebar"
                            aria-expanded="true"
                            aria-controls="sidebar"
                            className="botao-logo"
                        >
                            <svg
                                className="icone-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <button
                            aria-expanded="true"
                            aria-controls="sidebar"
                            className="botao-logo-hidden"
                        >
                            <svg
                                aria-hidden="true"
                                className="icone-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <svg
                                aria-hidden="true"
                                className="icone-6-hidden"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <a href="https://doben.org" className="link-logo">
                            <img
                                src="/Dobem%20logo.png"
                                className="logo"
                                alt="Doben Logo"
                            />
                            <span className="nome-empresa">
            Doben Software
          </span>
                        </a>
                        <form action="#"
                              method="GET"
                              className="form-pesquisa">
                            <div className="pesquisa-externo">
                                <div className="pesquisa-interno">
                                    <svg
                                        className="iconezinho-pesquisa"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name="email"
                                    id="topbar-search"
                                    className="input-pesquisa"
                                    placeholder="Search"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="head-lado-direito">
                        <button
                            id="toggleSidebarMobileSearch"
                            type="button"
                            className="botao-pesquisar"
                        >
                            {/* Search icon */}
                            <svg
                                aria-hidden="true"
                                className="icone-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {/* Notifications */}
                        <button
                            type="button"
                            data-dropdown-toggle="notification-dropdown"
                            className="botao-notificacoes"
                        >
                            {/* Bell icon */}
                            <svg
                                aria-hidden="true"
                                className="icone-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                            </svg>
                        </button>
                        {/* Apps */}
                        <button
                            type="button"
                            data-dropdown-toggle="apps-dropdown"
                            className="botao-apps"
                        >
                            {/* Icon */}
                            <svg
                                className="icone-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="botao-avatar"
                            id="user-menu-button"
                            aria-expanded="false"
                            data-dropdown-toggle="dropdown"
                        >
                            <img
                                className="avatar-img"
                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                alt="user photo"
                            />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default React.memo(Head);
