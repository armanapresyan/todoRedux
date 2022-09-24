import React from "react";

export default function Count({all=0,checked=0,unchecked=0}){
    return(
        <div>
            <div>All-<strong>{all}</strong></div>
            <div>Checked-<strong>{checked}</strong></div>
            <div>Unchecked-<strong>{unchecked}</strong></div>
        </div>
    )
}
