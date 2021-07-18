import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getFriendsThunk } from '../../redux/navbar-reducer'
import { getIsAuth } from '../common/Selectors/auth-selectors'
import { getFriends } from '../common/Selectors/navbar-selectors'
import { FriendsItem } from './FriendsItem/FriendsItem'
import n from './NavBar.module.css'

export const NavBar: React.FC<{}> = (props) => {

    let isAuth = useSelector(getIsAuth)
    let friends = useSelector(getFriends)
    // @ts-ignore
    let friendsElements = friends.map(f => <FriendsItem key={f.id} name={f.name} />)

    const dispatch = useDispatch()
    const myGetFriends = () => {dispatch(getFriendsThunk())}

    useEffect(()=>{
        myGetFriends()
    }, [])
    
    return (
        <nav className={n.nav}>
            <ul className={n.list}>
                <NavLink activeClassName={n.newCl} to="/profile"><li>Profile</li></NavLink>
                <NavLink activeClassName={n.newCl} to="/dialogs"><li>Dialogs</li></NavLink>
                <NavLink activeClassName={n.newCl} to="/users"><li>Users</li></NavLink>
            </ul>
            {isAuth?<div className={n.friends}>
                <p className={n.friendsHeader}>Friends</p>
                <div className={n.friendsItems}>
                    {friendsElements}
                </div>
            </div>:<p className={n.if}>If you log in, your friends will be shown here</p>}
        </nav>
    )
}