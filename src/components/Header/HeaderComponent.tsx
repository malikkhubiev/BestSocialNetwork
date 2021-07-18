import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FilterType, getUsers } from '../../redux/users-reducer'
import { Header } from './Header'

export const HeaderComponent: React.FC<{}> = (props) => {

    const dispatch = useDispatch();

    const myGetUsers = (pageNumber: number, filter: FilterType | {}) => {
        dispatch(getUsers(pageNumber, filter))
    }

    useEffect(() => {
        myGetUsers(1, {});
    }, [])

    return (
        <Header />
    )
}