const express = require("express")
const app = express ()

let todos = [
    
        {
            "completed": true,
            "_id": "5d0d12c659c3f052ec112253",
            "title": "afadf",
            "imgUrl": "https://images.unsplash.com/photo-1560983073-c29bff7438ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            "price": 500,
            "description": "new",
            "sessionId": "CharlesVasquez",
            "__v": 0
        },
        {
            "completed": false,
            "_id": "5d0d3193a948181993948086",
            "title": "CItyscapes",
            "imgUrl": "https://images.unsplash.com/photo-1561056509-03e9a7fd8114?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "price": 700,
            "description": "Visit to the City",
            "sessionId": "CharlesVasquez",
            "__v": 0
        },
        {
            "completed": false,
            "_id": "5d0d5b96163c8e75de4ff0fa",
            "title": "The Great Outdoors",
            "imgUrl": "https://images.unsplash.com/photo-1561089276-43ce2d081022?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "price": 1000,
            "description": "Pinetrees and Mountains",
            "sessionId": "CharlesVasquez",
            "__v": 0
        }
    
]

app.use(express.json())  // req.body

app.get('/', (req, res) => {  //
    res.send(todos)
})

app.get('/:_id', (req, res) => {
    const foundTodos = todos.find(todo => todo._id === req.params._id)
    res.send(foundTodos)
})

app.post('/', (req, res) =>{
    const newTodos = req.body
    newTodos._id = Math.random().toString()
    todos.push(newTodos)
    res.send(newTodos)

})

app.delete('/:_id', (req,res) => {
    const foundTodos = todos.find(todo => todo._id === req.params._id)
    const updatedDB = todos.filter(todo => todo._id !== req.params._id)
    todo = updatedDB
    res.send(`Success, the file is deleted ${foundTodos}`)

})

app.put('/:_id', (req,res) => {
    const foundTodos = todos.find(todo => todo._id === req.params._id)
    const updatedObj = req.body
    const updatedTodos = Object.assign(foundTodos, updatedObj)
    const updatedDB = todos.map(todo => todo._id === req.params._id ? updatedTodos : todo)
    todos = updatedDB
    console.log(updatedTodos)
    res.send(updatedTodos)
})

app.listen(7000, () => {
    console.log(`Server is running on port 7000`)
})

