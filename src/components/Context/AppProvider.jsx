import { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({children}){
    const [addedToCart, setAddedToCart] = useState(0);
    const [addedProduct, setAddedProduct] = useState([]);
    const ContextValue = {addedToCart ,  addedProduct ,  setAddedToCart , setAddedProduct}

    return(
        <AppContext.Provider value={ContextValue}>
            {children}
        </AppContext.Provider>

    )
}
export default AppProvider;