var travelForm = document.travelForm ;


travelForm.addEventListener( "submit" , function(event){
 event.preventDefault()
    var firstName= travelForm.firstName.value;
    var lastName= travelForm.lastName.value;
    var age= travelForm.age.value;
    var gender= travelForm.radioInput.value;
    var selectDeparture= travelForm.selectDeparture.value;
    var selectDestination= travelForm.selectDestination.value;
    var checkboxArr = travelForm.diet;
    var checkedRestrictions = []

    for(var i = 0; i < checkboxArr.length; i++){
        if(checkboxArr[i].checked){
            checkedRestrictions.push(checkboxArr[i].value)
        }
    }
    
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

//Grab the array of checkedboxes from the form (they all have the same name "diet")

//Creating an empty array to hold the values of the checked checkboxes.

// loop through checkboxes and push the value of the checked  checkedboxes into the array.