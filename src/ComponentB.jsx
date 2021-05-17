import React, {useContext} from "react";
import ComponentC from "./ComponentC";
import {FirstName,LastName} from "./App";

const ComponentB = () =>{
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return(
        <div>
            <h1 >Component C without useContext</h1>
            <ComponentC/>
            <h1 >Component B using useContext</h1>
            <h1>my name is {fname} {lname}</h1>
        </div>
    );
}
export default ComponentB;

