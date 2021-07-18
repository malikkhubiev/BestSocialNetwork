import React from 'react'
import {Formik, Form, Field} from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginSanka } from '../../redux/auth-reducer'
import { FormDataType } from '../../types/types'
import { getIsAuth } from '../common/Selectors/auth-selectors'
import style from './Login.module.css'

type mySubmit = ({ email, password }: FormDataType) => void

const LoginForm: React.FC<{ mySubmit: mySubmit }> = (props) => {
    const submit = (values: FormDataType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }): void => {
        props.mySubmit({
            email: values.email,
            password: values.password,
        })
        setSubmitting(false)
    }
    return (
        <div className={style.Login}>
                        <p className={style.header}>Login</p>
            <Formik
            initialValues={{ email: "malik.hubiev@mail.ru", password: "qwerty", rememberMe: false }}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="email" placeholder="email" />
                    <Field type="password" name="password" placeholder="password" />
                    <button className={style.button} type="submit" disabled={isSubmitting}>
                        Log in
                    </button>
                </Form>
            )}
        </Formik>
        </div>
    )
}

export const Login:React.FC<{}> = (props) => {

    let isAuth = useSelector(getIsAuth)

    const dispatch = useDispatch()

    let mySubmit = (formData:FormDataType) => {
        dispatch(LoginSanka(formData))
    }

    if(isAuth){
        return <Redirect to='/profile' />
    }

    return (
        <div className={style.Login}>
            <LoginForm mySubmit={mySubmit} />
        </div>
    )
}