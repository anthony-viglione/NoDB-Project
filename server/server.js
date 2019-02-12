const express = require('express');
const controller = require('./controller');
const bodyParser = require('body-parser');

const baseUrl='/api/books/'

const app = express();  //app no references an instance of express.

app.use(bodyParser.json()); //could have also used express.json()

//ENDPOINTS
app.get(`${baseUrl}`,controller.getBooks);  //get endpoint using express!! Uses a method from the controller.

app.post(`${baseUrl}`,controller.addBook); //"posts" a new entry ie adds a book.

app.put(`${baseUrl}:id`,controller.editBook);  //"puts" something into an existing entry ie update.

app.delete(`${baseUrl}:id`,controller.deleteBook);   //kinda obvious.


app.listen(4000,()=> console.log('Getting LIT sans database on port 4000'))