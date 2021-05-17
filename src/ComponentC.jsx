import React from "react";
import {FirstName,LastName} from "./App";

const ComponentC = () =>{
    return(
        <div>
            <FirstName.Consumer>
                {(fname)=>{
                    return (
                        <LastName.Consumer>{(lname)=>{
                          return  <h1>my name is {fname} {lname}</h1>
                        }}</LastName.Consumer>
                    );
                }}
            </FirstName.Consumer>
            <h1>Helllo from Component C</h1>
        </div>
    );
}
export default ComponentC;

