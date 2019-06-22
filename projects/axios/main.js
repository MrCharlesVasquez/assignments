

/// axios GET ////

function getTodos() {
    axios.get("https://api.vschool.io/CharlesVasquez/todo")
        .then(response => {
            const todos = response.data
            listTodos(todos)
        })
        .catch(error => {
            console.log(error)
        })
}

getTodos()


function listTodos(todos) {
    document.getElementById("todoDiv").innerHTML = ""
    for (let i = 0; i < todos.length; i++) {
        const h1 = document.createElement("h1")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const description = document.createElement("p")
        const listDiv = document.createElement("div")
        const checkbox = document.createElement("input")
        const deleteBtn = document.createElement("button")
        const editBtn = document.createElement("button")
        const newDiv = document.createElement("div")
        
    if (todos[i].completed) {
        checkbox.checked = true
    }
        
    
        checkbox.addEventListener("change", function () {
           
            if (checkbox.checked) {
                axios.put("https://api.vschool.io/CharlesVasquez/todo/" + todos[i]._id, { completed: true })
                .then(response => {
                    getTodos()
                    console.log(response.data)
                })
                
                .catch(error => console.log(error))
                
          
            } else axios.put("https://api.vschool.io/CharlesVasquez/todo/" + todos[i]._id, { completed: false })
            .then(response => {
                getTodos()
                console.log(response.data)
            })
            .catch(error => console.log(error))
            })
        
        
        deleteBtn.addEventListener("click", function () {
            axios.delete("https://api.vschool.io/CharlesVasquez/todo/" + todos[i]._id, { completed: true })
            .then(response => {
                getTodos()
                console.log(response.data)
            })
            .catch(error => console.log(error))
            })
        
        
        editBtn.addEventListener("click", function(){
            if ( newDiv.children.length){
                newDiv.removeChild(newDiv.children[0])
            }else {
                editIt(newDiv, todos[i])
                 }
            })
        
       
        //// styling ELement/////

        listDiv.classList.add("listDiv")
        h1.textContent = todos[i].title
        img.src = todos[i].imgUrl
        img.classList.add("todosImg")
        p.textContent = todos[i].price
        description.textContent = todos[i].description
        checkbox.type = "checkbox"
        deleteBtn.textContent = "Delete"
        editBtn.textContent = "Edit"
        
        if (todos[i].completed) {
            h1.style.textDecoration = "line-through"
        }
        
        //// appendChild to the DOM within the for loop///// 
        
        listDiv.appendChild(h1)
        listDiv.appendChild(img)
        listDiv.appendChild(p)
        listDiv.appendChild(description)
        listDiv.appendChild(checkbox)
        listDiv.appendChild(editBtn)
        listDiv.appendChild(newDiv)
        todoDiv.appendChild(listDiv)
        listDiv.appendChild(deleteBtn)
        
        
    }
}

function editIt(newDiv, todo){
    const editForm = document.createElement("form")
    const editTitle = document.createElement("input")
    const editImg = document.createElement("input")
    const editPrice = document.createElement("input")
    const editDesc = document.createElement("input")
    const editSubmit = document.createElement("button")
    editTitle.placeholder = "Title"
    editImg.placeholder = "ImgUrl"
    editPrice.placeholder = "Price"
    editDesc.placeholder = "Description"
    editSubmit.textContent = "Submit"
    
    editForm.name ="editFrom"
    editTitle.name ="title"
    editImg.name ="img"
    editPrice.name ="price"
    editDesc.name ="description"
    editSubmit.name ="submit"

    newDiv.appendChild(editForm)
    editForm.appendChild(editTitle)
    editForm.appendChild(editImg)
    editForm.appendChild(editPrice)
    editForm.appendChild(editDesc)
    editForm.appendChild(editSubmit)

        editForm.addEventListener("submit", function (event){
           event.preventDefault() 
           const edTitle = editForm.title.value || todo.title
           const edImg = editForm.img.value || todo.imgUrl
           const edPrice = editForm.price.value || todo.price
           const edDesc = editForm.description.value || todo.description
           const edSubmit = editForm.submit.value 

           const newForm ={
               title: edTitle,
               imgUrl: edImg,
               price: edPrice,
               description: edDesc,
               submit: edSubmit

           }
           axios.put("https://api.vschool.io/CharlesVasquez/todo/"+ todo._id, newForm)
           .then(response => {
               getTodos()
   
           })
           .catch(error => console.log(error))

        })

}

/// post///

const myform = document["to-do-form"]

myform.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log (myform)
    const todoTitle = myform.title.value
    const imgUrl = myform.img.value
    const price = myform.price.value
    const description = myform.description.value
    const newTodo = {
        title: todoTitle,
        imgUrl: imgUrl,
        price: price,
        description: description
    }

axios.post("https://api.vschool.io/CharlesVasquez/todo", newTodo)
        .then(response => {
            getTodos()

        })
        .catch(error => console.log(error))
})





