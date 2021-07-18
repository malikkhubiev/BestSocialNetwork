import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStatus } from '../../../redux/profile-reducer'
import { getStatus } from '../../common/Selectors/profile-selectors'
import person from './Person.module.css'

export const PersonStatus: React.FC<{}> = (props) => {

    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(useSelector(getStatus))

    const dispatch = useDispatch()

    const changeLocalStatus = (e: ChangeEvent<HTMLInputElement>) => {
        let text: string = e.target.value
        setStatus(text)
    }

    const activateEditMode = () => { setEditMode(true) }

    const deActivateEditMode = () => {
        setEditMode(false)
        dispatch(changeStatus(status))
    }

    return (
        <div className={person.personStatus}>
            {editMode === false ?
                <div>
                    <p onDoubleClick={activateEditMode}>{status}</p>
                </div>
                :
                <div>
                    <input className={person.input} onChange={changeLocalStatus} autoFocus={true} onBlur={deActivateEditMode} value={status} />
                </div>}
        </div>
    )
}