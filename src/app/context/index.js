"use client"
import React, { useState, createContext } from "react";

export const RequestContext = createContext();

export const RequestContextProvider = (props) =>{

    
    return (
        <RequestContext.Provider value={{}}>
            {props.children}
        </RequestContext.Provider>
    )
}