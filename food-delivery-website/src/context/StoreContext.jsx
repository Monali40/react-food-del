import { createContext} from "react"; //food display multiple food item for that will create usecontext
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);


const StoreContextProvider = (props) =>{


    const contextValue ={
        food_list
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;