import { createContext, useReducer } from "react";
import { HIDE_ALERT, SHOW_ALERT } from "../types";
import { alertReducer } from "./alertReducer";


export const AlertContext = createContext();

// create provider == it has functional and reducer 
export default function AlertProvider ({children}){

    const [state, dispatch] = useReducer(alertReducer, null);

    function hide(){
        dispatch({
            type: HIDE_ALERT
        })
    }

    function show(text,type){
        dispatch({
            type: SHOW_ALERT,
            payload: {text, type}
        })
    }

    return(
        <AlertContext.Provider value={{
            alert: state, hide, show
        }}>
            {children}
        </AlertContext.Provider>
    )
}
