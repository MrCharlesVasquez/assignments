import React from 'react'


const Forms = props => {
    const { handleChange, handleSubmit, fName, lName, email, favFood, placeOfBirth, phone, about } = props

return(
    <div className="formDiv">
                     <h1>React Name Badges</h1>   
            <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fName"
                        value={fName}
                        onChange={handleChange}
                        placeholder="First Name" />
                    <input
                        type="text"
                        name="lName"
                        value={lName}
                        onChange={handleChange}
                        placeholder="Last Name" />
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Email" />
                    <input
                        type="text"
                        name="placeOfBirth"
                        value={placeOfBirth}
                        onChange={handleChange}
                        placeholder="Place of Birth" />
                    <input
                        type="number"
                        name="phone"
                        value={phone}
                        onChange={handleChange}
                        placeholder="Phone" />
                    <input
                        type="text"
                        name="favFood"
                        value={favFood}
                        onChange={handleChange}
                        placeholder="Favorite Food" />


                   <div><textarea
                        rows={20}
                        cols={80}
                        style={{ resize: "none" }}
                        name="about"
                        value={about}
                        onChange={handleChange}
                        placeholder="Tell us about yourself" />
                    </div> 


                    <button>Submit</button>


                </form>
    </div>

)

}

export default Forms