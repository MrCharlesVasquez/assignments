


var airlineForm = document.airlineForm ;


airlineForm.addEventListener("submit", function (event){
    event.preventDefault()

    var firstName = airlineForm.firstName.value;
    var lastName = airlineForm.lastName.value;
    var age = airlineForm.age.value;
    var gender = airlineForm.elements.gender.value;
    var location = airlineForm.travelLocation.value;
    
    var checkboxArr = airlineForm.diet;
    var checkedRestriction = []


    for(var i = 0 ; i < checkboxArr.length; i++){
        if(checkboxArr[i].checked) {
            checkedRestriction.push(checkboxArr[i].value)
        }
    }
      


window.alert(`
    First Name: ${firstName}
    Last Name: ${lastName}
    age: ${age}
    gender: ${gender}
    travelLocation: ${location}
    diet: ${checkedRestriction}
    `)

})

