import React from "react";

const ForwardRefInput = React.forwardRef((props, ref) =>{
    return(
        <input type="text" ref={ref}/>
    )
})
export default ForwardRefInput;