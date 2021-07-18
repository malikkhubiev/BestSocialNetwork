import React from 'react'
import d from './DialogMessage.module.css'

type PropstType = {
    message: string
}
export const DialogMessage:React.FC<PropstType> = (props) => {
    return (
        <div className={d.message}>{props.message}</div>
    )
}