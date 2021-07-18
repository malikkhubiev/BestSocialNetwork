import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilterType, follow, unFollow } from '../../redux/users-reducer'
import { getIsAuth } from '../common/Selectors/auth-selectors'
import { getAllUsers, getCurrentPage, getFilter, getPageSize, getTotalUsersCount } from '../common/Selectors/users-selectors'
import styles from './Users.module.css'
import { UserItem } from './UsersItem/UserItem'
import { UsersSearchForm } from './UsersSearchForm/UsersSearchForm'

type PropsType = {
    myGetUsers: (pageNumber: number, filter: FilterType | {}) => void
}

export const Users: React.FC<PropsType> = (props) => {

    let isAuth = useSelector(getIsAuth)
    let users = useSelector(getAllUsers)
    let totalUsersCount = useSelector(getTotalUsersCount)
    let pageSize = useSelector(getPageSize)
    let currentPage = useSelector(getCurrentPage)
    let filter = useSelector(getFilter)

    const dispatch = useDispatch()

    const myFollow = (id: number) => { dispatch(follow(id)) }
    const myUnFollow = (id: number) => { dispatch(unFollow(id)) }
    const setCurrentPage = (pageNumber: number) => { props.myGetUsers(pageNumber, {}) }
    const setFilter = (filter: FilterType) => { props.myGetUsers(1, filter) }

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let firstUser = currentPage * pageSize - 10
    let lastUser = currentPage * pageSize
    let currentUsers = users.slice(firstUser, lastUser)
    let pages = []

    for (let i: number = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let pathCreator = (id: number) => `/profile/${id}`

    return (
        <div className={styles.sectionUsers}>
            <UsersSearchForm isAuth={isAuth} filter={filter} setFilter={setFilter} />
            <div className={styles.UsersList}>{
                currentUsers.length !== 0
                    ?
                    currentUsers.map((asd) => <UserItem isAuth={isAuth} pathCreator={pathCreator} follow={myFollow} unFollow={myUnFollow} key={asd.id} id={asd.id} name={asd.name} followed={asd.followed} />)
                    :
                    <p>There are no users with such parameters</p>
            }</div>
            <ul className={styles.sectionUsersList}>
                {pages.map(n => {
                    return currentPage === n ? <li key={n} className={styles.bold}>{n}</li> : <li key={n} onClick={() => setCurrentPage(n)} className={styles.sectionUsersListLi}>{n}</li>
                })}
            </ul>
        </div>
    )
}