import React, {Component} from 'react';

class DeleteButton extends Component{

    render(){
        return <button onClick={()=>this.props.deleteFn(this.props.id)}>Delete</button>
    }
}

export default DeleteButton;