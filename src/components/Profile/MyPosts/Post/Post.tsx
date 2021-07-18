import React from 'react'
import p from './Post.module.css'

type PropsType = {
    likes: number
    message: string
}
export const Post:React.FC<PropsType> = (props) => {
    return (
        <div className={p.postsPost}>
            <div className={p.postsPostImg}></div>
            <p className={p.postsPostTxt}>{props.message}</p>
            <p className={p.postsPostLike}>like: {props.likes}</p>
        </div>
    )
}