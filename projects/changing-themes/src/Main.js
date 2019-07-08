import React from 'react'
import {withTheme} from './context/ThemeProvider'


const Main = (props) =>{
    return(
        <div>
            <main className={`main main-${props.theme}`}>
              
                <h1 className={`h1 h1-${props.theme}`}>Moods to Change your Moods</h1>
                    <h2 className={`h2 h2-${props.theme}`}>The Main Source</h2>
                    <button onClick={props.changeTheme} className={`btn btn-${props.theme}`}> Toggle Mood </button>
            </main>

           
        </div>
    )
}

export default withTheme(Main)