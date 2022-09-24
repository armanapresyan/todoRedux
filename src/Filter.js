import React from "react";

export default function Filter({onFilter}){
    return (
        <div>
            <button onClick={()=> onFilter("All")}>All</button>
            <button onClick={()=> onFilter("Checked")}>Checked</button>
            <button onClick={()=> onFilter("Unchecked")}>Unchecked</button>
        </div>
    )
}
