import React from 'react'
import { MyPosts } from './MyPosts/MyPosts'
import { Person } from './Person/Person'

export const Profile: React.FC<{}> = (props) => {
    return (
        <>
            <Person />
            <MyPosts />
        </>
    )
}