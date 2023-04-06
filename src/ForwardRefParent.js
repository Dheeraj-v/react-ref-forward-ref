import React,{ Component } from "react";
import ForwardRefInput from "./ForwardRefInput";

class ForwardRefParent extends Component{
    constructor(){
        super();
        this.inputRef = React.createRef();
    }
    handleClick = ()=> {
        this.inputRef.current.focus();
    }
    render(){
        return(
            <div>
                
                <ForwardRefInput ref={this.inputRef}/>
                <button onClick={this.handleClick}>Forward ref Click me</button>
    
            </div>
        )
    }

}

export default ForwardRefParent;