import React from 'react'
import styles from './UserItem.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
    id: number
    pathCreator: (id:number) => string 
    name: string
    isAuth: boolean 
    followed: boolean 
    follow: (id:number) => void 
    unFollow: (id:number) => void 
}

export const UserItem: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.UserItem}>
            <NavLink to={props.pathCreator(props.id)}><div className={styles.image}></div></NavLink>
            <p className={styles.name}>{props.name}</p>
            {props.isAuth
            ?
            props.followed ? <button className={styles.button} onClick={() => { props.unFollow(props.id) }}>Unfollow</button> : <button className={styles.button} onClick={() => { props.follow(props.id) }}>Follow</button>
            :
            ""
            }
        </div>
    )
}