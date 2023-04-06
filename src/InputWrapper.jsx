import React,{ Component } from "react";
import Input from "./Input";
class InputWrapper extends Component{
    constructor(){
        super()
        this.inputRef = React.createRef();

    }
    handleClick = () => {
        this.inputRef.current.handleClick();
    }

    render(){
        return(
            <div>
                <Input ref={this.inputRef}/>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default InputWrapper