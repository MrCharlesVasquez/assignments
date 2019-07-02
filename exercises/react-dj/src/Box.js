import React from 'react'

const Box = props => {

    const boxStyle = {
        backgroundColor: props.color,
        borderRadius: props.style,
        className: props.className
    }
    return (
        <div>
            <div className={"box "+ props.className } style={boxStyle}></div>
        </div>
    )
}

export default Box