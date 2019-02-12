import React, {Component} from 'react';

class ToggleButton extends Component{
    // constructor(props){
    //     super(props)
        
    //     this.state={

    //     }
    // }

    render(){
        return(
            <button
            onClick={e => {
                this.props.toggleFn(
                    this.props.readToggle, this.props.id 
                )
            }
            }
        >
            {this.props.readToggle==="true" ? ("Already Read") : ("Need To Read")}
        </button>
        )
    }
}
export default ToggleButton;