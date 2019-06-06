var travelForm = document.travelForm


travelForm.addEventListener("submit", function(e){
    e.preventDefault()

var firstName= document.travelForm.firstName.value
   console.log(firstName) 
   
var lastName= document.travelForm.lastName.value
   console.log(lastName)

var age= document.travelForm.age.value
   console.log(age)

var gender= document.travelForm.radioInput.value
    console.log(gender)

var selectDeparture= document.travelForm.selectDeparture.value
    console.log(selectDeparture)
var selectDestination= document.travelForm.selectDestination.value
    console.log(selectDestination)

//Grab the array of checkedboxes from the form (they all have the same name "diet")
var checkboxArr = travelForm.diet
//Creating an empty array to hold the values of the checked checkboxes.
var checkedRestrictions = []
// loop through checkboxes and push the value of the checked  checkedboxes into the array.
    for(var i=0; i < checkboxArr.length; i++){
        if(checkboxArr[i].checked){
            checkedRestrictions.push(checkboxArr[i].value)
        }
    }
    console.log(checkedRestrictions)

window.alert(`
    First Name: ${firstName}
    Last Name: ${lastName}
    age: ${age}
    Dietary Restrictions: ${checkedRestrictions}
    Gender: ${gender}
    Departure: ${selectDeparture}
    Destination: ${selectDestination}
   `)
})

