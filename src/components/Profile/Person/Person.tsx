import React from 'react'
import { useSelector } from 'react-redux'
import { getProfile } from '../../common/Selectors/profile-selectors'
import ava from './../../../images/brain.jpg'
import person from './Person.module.css'
import { PersonStatus } from './PersonStatus'

export const Person:React.FC<{}> = (props) => {

    let profile = useSelector(getProfile)

    return (
        <div className={person.person}>
            <div className={person.personTopimg}></div>
            <div className={person.personData}>
                <img src={ava} alt={'avatar'} className={person.personDataAva}/>
                <div className={person.personDataDesc}>
                    <p className={person.personDataDescName}>{profile.name}</p>
                    <div className={person.personDataDescDesc}><b>Статус:</b> {profile.isMainUser?<PersonStatus />:<p className={person.personDataDescDesc}>{profile.status}</p>}</div>
                    <div className={person.personDataDescDesc}><b>Обо мне:</b> {profile.aboutMe}</div>
                    <div className={person.personDataDescDesc}><b>Сведения о работе:</b> {profile.lookingForAJob ? <p className={person.personDataDescDesc}>В поиске работы</p> : <p className={person.personDataDescDesc}>У меня отличная работа</p>}</div>
                    <div className={person.personDataDescDesc}><b>Образование:</b> RSEU Rinh</div>
                </div>
            </div>
        </div>
    )
}