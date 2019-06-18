//what does Axios do for us?
// Parses JSON for us, and stringifies
// does all the CRUD operations in a simple syntax


// GET === gets our data
//Post == adds the
axios.get("https://api.vschool.io/<yourname>/todo[/<todoId>")
    .then( response => {
        console.log(response)
        const todos = reponse.data

    })

    .catch(error => console.log (error))

    function listTodos(todos){
        for ( let i = 0 ; i < todos.length; i++){
            // Create elements(s)
            const todoDiv = document.createElement("div")
            const titile = document.createElement("h1")
            const description = document.createElement("p")
            const deleteBtn = document.createElement("button")
            //Edit the element(s)
            title.textContent = todos[i].title
            description.textContent = todos[i].description
            todoDiv.classlist.add("todo")
            deleteBtn.textContent = "Delete this"
            deleteBtn.addEventListener("click", function(event){
                console.log(todos[i]._id)
            })

            // Append to DOM
            todoDiv.appendChild(title)
            todoDiv.appendChild(description)
            todoList.appendChild(todoDiv)
            todoDiv.appendChild(deleteBtn)


        }
    }

    const addTodoForm = document.addTodoForm
    addTodoForm.addEventlistener("submit", (event) => {
        event.preventDefault()
        //capture the user's info
    })