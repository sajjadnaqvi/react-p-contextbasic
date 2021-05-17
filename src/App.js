import React, { createContext } from "react";
import ComponentA from "./ComponentA";

// creat context
const FirstName = createContext();
const LastName = createContext();

const App = () =>{
    return(
        <div>
          <FirstName.Provider value={"sajjad"}>
            <LastName.Provider value={"naqvi"}>
            <ComponentA/>
            </LastName.Provider>
          </FirstName.Provider>
            
        </div>
    );
}
export default App;
export {FirstName,LastName};

