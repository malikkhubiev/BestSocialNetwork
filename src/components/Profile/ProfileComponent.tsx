import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { getUser } from '../../redux/profile-reducer'
import { Profile } from './Profile'
import p from './Profile.module.css'

const ProfileComponent: React.FC<{}> = (props) => {
    
    // @ts-ignore
    let userId: string | undefined = useRouteMatch().params.userId

    const dispatch = useDispatch()

    const myGetUser = (userId: number | string) => { dispatch(getUser(userId)) }

    useEffect(() => {
        if (userId !== undefined) {
            myGetUser(userId)
        } else {
            myGetUser('-1')
        }
    }, [userId])

    return (
        <div className={p.mainContent}>
            <Profile />
        </div>
    )
}

export default compose<React.ComponentType>(
    withAuthRedirect(ProfileComponent)
)