import React, { useState } from 'react'
import { Paper } from '@material-ui/core'

export const CreateNav = ({handleShow,no,label,col }) => {
    console.log(no)
    const [color, setColor] = useState(col)

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     setColor(color === "#4174b3" ? '' : "#4174b3")
    // }
    console.log("color",col)
    return (
        <Paper id={no} style={{ backgroundColor: color }} onClick={handleShow} className="c_paper">
            <h1>{no}</h1>
            <h4>{label}</h4>
        </Paper>
    )
}
