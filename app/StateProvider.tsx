'use client'

import { Provider } from "react-redux";
import store from "./store/store";

const StateProvider = ({children}: any) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StateProvider;