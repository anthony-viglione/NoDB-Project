import React, { Component } from 'react';
import Title from './Title';
import Book from './Book';
import axios from 'axios';

const baseUrl = '/api/books/'

class Main extends Component {
    constructor() {
        super()

        this.state = {
            booksArr: []
        }
        this.handleReadToggle = this.handleReadToggle.bind(this)
        this.handleNewBook = this.handleNewBook.bind(this)
        this.handleDeleteBook = this.handleDeleteBook.bind(this)
    }

    componentDidMount() {
        axios.get(`${baseUrl}`).then(res => {
            // console.log("Hit Mount")
            // console.log(res.data)
            this.setState({
                booksArr: res.data
            })
            // console.log(`${this.state.booksArr} book array`)
        })
    }

    handleReadToggle(toggle,id) {
        //Not sure why this wasn't working with boolean values.
        console.log("hit handleReadToggle")
        console.log(toggle)
        console.log(id)
        if(toggle === "true"){
            axios.put(`${baseUrl}${id}`,{readToggle:"false"}).then(res=>{
                console.log(res.data[0])
                this.setState({
                    booksArr: res.data
                })
            })
            .catch(error => {
                console.log(error);
            })
        }
        else if(toggle === "false"){
            axios.put(`${baseUrl}${id}`,{readToggle:"true"}).then(res=>{
                console.log(res.data[0])
                this.setState({
                    booksArr: res.data
                })
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
    
    handleNewBook(title,author, thoughts, readToggle){
        let newBook = {
            title,
            author,
            thoughts,
            readToggle}

        axios.post(`${baseUrl}`,newBook).then(res=>{
            console.log(res)
            this.setState({
                booksArr: res.data
            })
        })
    }

    handleDeleteBook(id){
        console.log("Hit delete button")
        console.log(id)
        axios.delete(`${baseUrl}${id}`).then(res=>{
            console.log(res)
            this.setState({
                booksArr:res.data
            })
        })
    }

    render() {

        const unReadList=[]
        const readList=[]
        let ranMap=1
        this.state.booksArr.map((book)=>{
            if (book.readToggle==="true"){
                readList.push(
                    <Book
                    key={book.id}
                    book={book}
                    toggleFn={this.handleReadToggle}
                    deleteFn={this.handleDeleteBook}
                    />
                )
            }
            else if
                (book.readToggle==="false"){
                    unReadList.push(
                        <Book
                        key={book.id}
                        book={book}
                        toggleFn={this.handleReadToggle}
                        deleteFn={this.handleDeleteBook}
                        />
                    )
            }
            return ranMap++
        })
        // console.log(unReadList)
        // console.log(readList)




        return (
            <div>
                <Title 
                toggleFn={this.handleReadToggle}
                newBookFn={this.handleNewBook}/>
                <div className="base">
                    <div className="booksAlreadyRead">
                        <div className="subTitle">
                            Books Already Read
                        </div>
                        {readList}
                    </div>
                    <div className="booksToRead">
                        <div className="subTitle">
                            Books to Read
                        </div>
                        {unReadList}
                    </div>


                </div>
            </div>


        )
    }

}

export default Main;