import React from 'react';
import ToggleButton from './ToggleButton';
import DeleteButton from './DeleteButton';

function Book(props)  {
    // constructor(props) {
    //     super(props)

    //     // this.state = {
    //     //     readToggle: this.props.book.readToggle
    //     // }
    // }

    // handleReadToggle() { //Was replaced by toggle function being passed through props.
    //     if (this.state.readToggle === true) {
    //         this.setState({
    //             readToggle: false
    //         })
    //     }
    //     else {
    //         this.setState({
    //             readToggle: true
    //         })
    //     }
    //     // console.log(this.state.readToggle)
    // }

    
        // console.log(this.state.readToggle)
        return (
            <div className="bookCard">
                <div>{props.book.title}</div>
                <div>By:        {props.book.author}</div>
                <div>{props.book.thoughts}</div>
                {/* <div>{props.book.readToggle}</div> */}

                <ToggleButton
                    key={props.book.id+.1}
                    toggleFn={props.toggleFn}
                    id={props.book.id}
                    readToggle={props.book.readToggle}
                />

                <DeleteButton
                    key={props.book.id+.2}
                    id={props.book.id}
                    deleteFn={props.deleteFn}
                
                />

            </div>
            )

    
}
export default Book;