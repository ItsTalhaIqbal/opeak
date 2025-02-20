"use client"
import { Provider } from "react-redux";
import store from "./store";


 const Providers=({children})=>{
    return(
        <Provider >
            {children}
        </Provider>
    )
}

export default Providers
