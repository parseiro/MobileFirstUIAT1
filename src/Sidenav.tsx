import React from "react";

export const Sidenav = React.memo(() => {
    return (
        <aside className="fixed left-0 w-64 h-full">
            <div className="overflow-y-auto py-4 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <ul className="space-y-2">
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <span className="ml-3">Visão geral</span>
                        </a>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            aria-controls="dropdown-pages"
                            data-collapse-toggle="dropdown-pages"
                        >
                            <span className="flex-1 ml-3 text-left whitespace-nowrap">Páginas</span>
                        </button>
                        <ul id="dropdown-pages"
                            className="hidden py-2 space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Configurações
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Kanban
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Calendário
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
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
                            className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >

                            <span className="flex-1 ml-3 text-left whitespace-nowrap">
            Authentication
          </span>

                        </button>
                        <ul id="dropdown-authentication"
                            className="hidden py-2 space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Sign In
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Sign Up
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Forgot Password
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="hidden absolute bottom-0 left-0 z-20 justify-center p-4 space-x-4 w-full bg-white dark:bg-gray-800 lg:flex">
                <a
                    href="#"
                    className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded cursor-pointer hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >

                    Settings
                </a>
                <a
                    href="#"
                    data-tooltip-target="tooltip-settings"
                    className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded cursor-pointer hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >

                    Help
                </a>
            </div>
        </aside>
    );
})

