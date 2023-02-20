import React from "react/cjs/react.development";

function createProp (props)  { 
    return (
    <note>
           <h1 >
                {props.title}
            </h1>
            <p >
            {props.content}
            </p>
        </note>
        )
        };
    

export default Note;