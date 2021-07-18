import React from 'react'
import d from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
    id: number
    name: string
}
export const DialogItem:React.FC<PropsType> = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={d.dialog}><div className={d.dialogAva}></div><NavLink to={path}>{props.name}</NavLink></div>
    )
}