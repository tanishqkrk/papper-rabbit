"use client";

import React, { createContext, useState, useRef } from 'react';

export const AppContext = createContext();

export function DataContextProvider({ children }) {
    const [mode, setMode] = useState(false);
    const [page, setPage] = useState(0);
    const [visible, setVisible] = useState(false);
    const [hide, setHide] = useState(false);

    const container = useRef(null);

    const modeChange = () => {
        setMode(!mode);
    };

    const changeCon = () => {
        setPage((prevPage) => (prevPage === 0 ? 1 : 0));
    };

    const popup = () => {
        if (visible) {
            setVisible(false);
            document.body.classList.remove('modal-open');
            container.current.classList.remove('visible');
            container.current.classList.add('invisible');
        } else {
            setVisible(true);
            document.body.classList.add('modal-open');
            container.current.classList.add('visible');
            container.current.classList.remove('invisible');
        }
    };

    const disappear = () => {
        setHide((prevHide) => !prevHide);
    };

    return (
        <AppContext.Provider value={{ modeChange, mode, changeCon, page, container, popup, visible, disappear, hide, setHide }}>
            {children}
        </AppContext.Provider>
    );
}

