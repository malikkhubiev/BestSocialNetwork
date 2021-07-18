import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { LogoutSanka } from '../../redux/auth-reducer'
import { getIsAuth, getUserName } from '../common/Selectors/auth-selectors'
import logo from './../../images/logo.png'
import h from './Header.module.css'

export const Header: React.FC<{}> = (props) => {
    
    const dispatch = useDispatch();

    const myLogout = () => {
        dispatch(LogoutSanka())
    }

    let isAuth = useSelector(getIsAuth);
    let name = useSelector(getUserName);

    return (
        <header className={h.header}>
            <img src={logo} alt={'logo'} />
            {isAuth ? <div><p>{name}</p><button onClick={myLogout}>Log out</button></div> : <NavLink to='/login'><p>Log in</p></NavLink>} 
        </header>
    )
}