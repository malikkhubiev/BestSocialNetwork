import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilterType, getUsers } from '../../redux/users-reducer'
import { Preloader } from '../common/Preloader/Preloader'
import { getIsFetching } from '../common/Selectors/users-selectors'
import { Users } from './Users'

const UsersComponent: React.FC<{}> = (props) => {

    let isFetching = useSelector(getIsFetching)

    const dispatch = useDispatch()

    const myGetUsers = (pageNumber: number, filter: FilterType | {}) => { dispatch(getUsers(pageNumber, filter)) }

    useEffect(() => {
        myGetUsers(1, {})
    }, []);

    return (
        isFetching ? <Preloader /> : <Users myGetUsers={myGetUsers} />
    )
}

export default UsersComponent;