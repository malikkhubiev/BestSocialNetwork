import React from 'react'
import f from './FriendsItem.module.css'

type PropsType = {
    name: string,
}
export const FriendsItem:React.FC<PropsType> = (props) => {
    return (
        <div className={f.friendsItem}>
            <div className={f.friendsItemImg}></div>
            <p className={f.friendsItemName}>{props.name}</p>
        </div>
    )
}