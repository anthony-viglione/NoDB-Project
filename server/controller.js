const books=[
    {
        id:0,
        title: 'Enders Game',
        author: 'Orson Scott Card',
        thoughts:'Ender is a boss.',
        readToggle:"true"
    },
    {
        id:1,
        title: 'Hatchet',
        author: 'Gary Paulsen',
        thoughts:'One of the first books I ever read.',
        readToggle:"true"
    },
    {
        id:2,
        title: 'The 10 X Rule',
        author: 'Grant Cardone',
        thoughts:'I heard it is great for Entrepenuers.',
        readToggle:"false"
    },
    {
        id:3,
        title: 'A Million Miles in a Thousand Years',
        author: 'Donald Miller',
        thoughts:'My English teacher gave it to me when I graduated. Means a lot to me.',
        readToggle:"true"
    },
    {
        id:4,
        title: 'Jobs',
        author: 'Someone',
        thoughts:'Need to read this one',
        readToggle:"false"
    },
    {
        id:5,
        title: 'American Sniper',
        author: 'Sniper dude',
        thoughts:'Got partway through once; need to finish',
        readToggle:"false"
    },
    {
        id:6,
        title: 'Rich Dad, Poor Dad',
        author: 'Some Entrepenuer Guy',
        thoughts:'Want to read it',
        readToggle:"false"
    },
    {
        id:7,
        title: 'Hitchhikers Guide to the Galaxy',
        author: 'unknown',
        thoughts:'Supposedly super great',
        readToggle:"true"
    }
]

module.exports={
    getBooks:(req,res)=>{
        console.log('hit getBooks')
        res.status(200).send(books);
    },
    addBook:(req,res)=>{
        console.log(`Hit addBook. List has ${books.length+1} books`)
        const{title,author,thoughts,readToggle} =req.body;
        books.push({
        id: books.length, //Id's start at zero, so length of array before pushing the new element is valid for the id.
        title,
        author,
        thoughts,
        readToggle
        })
        res.status(200).send(books);
    },
    editBook:(req,res)=>{
        console.log(`Hit editBook`)
        console.log(req.params)
        let {id}=req.params;
        console.log(id);
        
        let {title,author,thoughts,readToggle}=req.body;

        let index = books.findIndex(book=>book.id==id)
        let foundBook = books[index];
        foundBook = {
            id,
            title: title || foundBook.title,
            author: author || foundBook.author,
            thoughts: thoughts || foundBook.thoughts,
            readToggle: readToggle || foundBook.readToggle
        }
        books.splice(index,1,foundBook )
        res.status(200).send(books);
    },
    deleteBook:(req,res)=>{
        console.log(`Hit deleteBook`)
        console.log(req.params)
        let {id}=req.params;
        let index = books.findIndex(book=>book.id==id)
        if(index===-1){
            res.status(400).send("Invalid Item ID; Cannot delete nonexistant item.")//Probably not an issue with delete buttons if connected properly, but for testing purposes starts deleting the end of the array after the first deletion.
        }
            books.splice(index,1)
        res.status(200).send(books)
    }
}