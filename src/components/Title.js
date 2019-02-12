import React, { Component } from 'react';

class Title extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            author: "",
            readToggle: "false",
            thoughts: ""
        }

    }

    handleReadToggle() {
        if (this.state.readToggle === "true") {
            this.setState({
                readToggle: "false"
            })
        }
        else if (this.state.readToggle === "false" || this.state.readToggle === "") {
            this.setState({
                readToggle: "true"
            })
        }
    }

    handleAuthorInput(val) {
        this.setState({
            author: val
        })
        console.log(this.state.author)
    }

    handleTitleInput(val){
        this.setState({
            title: val
        })
        console.log(this.state.title)
    }

    handleThoughtsInput(val){
        this.setState({
            thoughts: val
        })
        console.log(this.state.thoughts)
    }

    render() {
        return (
            <div className="titleCard">
                <div className="titleBanner">Book Buddy</div>
                <div className="inputs">
                    <div>
                        <input
                            className="titleCardInput"
                            placeholder={"Title"} 
                            onChange={e=>this.handleTitleInput(e.target.value)}
                            />
                        <input
                            className="titleCardInput"
                            placeholder={"Author"}
                            onChange={e => this.handleAuthorInput(e.target.value)} />
                        <input
                            className="titleCardInput"                        
                        placeholder={"Thoughts"} 
                        onChange={e=>this.handleThoughtsInput(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                        className="titleButton1"
                            onClick={e => { this.handleReadToggle(this.state.readToggle) }}>{this.state.readToggle === "true" ? ("Already Read") : ("Need To Read")}
                        </button>
                        <button
                        onClick={e=>this.props.newBookFn(this.state.title,this.state.author,this.state.thoughts,this.state.readToggle)}
                        >Add to list</button>
                    </div>
                </div>

            </div>
        )
    }
}



export default Title;