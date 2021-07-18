import { Field, Form, Formik } from "formik"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouteMatch } from "react-router-dom"
import { getUsers } from "../../redux/dialogs-reducer"
import { getUser, sendMessage } from "../../redux/profile-reducer"
import { getUsersSel } from "../common/Selectors/dialogs-selectors"
import { getMessages, getShouldBe, getUserId } from "../common/Selectors/profile-selectors"
import { DialogItem } from "./DialogItem/DialogItem"
import { DialogMessage } from "./DialogMessage/DialogMessage"
import d from "./Dialogs.module.css"

type FormDataType = {
    message: string
}

type addNewMessage = ({ message }: FormDataType) => void

const AddMessageForm: React.FC<{ addNewMessage: addNewMessage }> = (props) => {
    const submit = (values: FormDataType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }): void => {
        props.addNewMessage({ message: values.message })
        setSubmitting(false)
    }
    return (
        <Formik
            initialValues={{ message: "" }}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form className={d.form}>
                    <Field className={d.input} type="text" name="message" placeholder="write me something:" />
                    <button className={d.button} type="submit" disabled={isSubmitting}>
                        Send
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export const Dialogs: React.FC<{}> = (props) => {

    let id = useSelector(getUserId)
    let shouldDialogBoxBeOpened = useSelector(getShouldBe)
    let users = useSelector(getUsersSel)
    let messages = useSelector(getMessages)

    // @ts-ignore
    let userId: string | undefined = useRouteMatch().params.userId

    const dispatch = useDispatch()

    const myGetUser = (userId: number | string) => { dispatch(getUser(userId)) }
    const myGetUsers = () => { dispatch(getUsers()) }

    useEffect(() => {
        myGetUsers()
        if (userId !== undefined) {
            myGetUser(userId)
        } else {
            myGetUser('-1')
        }
    }, [userId])

    // @ts-ignore
    let dialogsElements: object = users.map(item => <DialogItem key={item.id} id={item.id} name={item.name} />)
    let messagesElements: object | string

    if (messages !== undefined && messages.length) {
        messagesElements = messages.map(item => <DialogMessage key={item.id} message={item.message} />)
    } else {
        messagesElements = 'This is the beginning of your communication'
    }

    const addNewMessage: addNewMessage = ({ message }) => { dispatch(sendMessage(id, message)) }
    return (
        <div className={d.Dialogs}>
            <div className={d.DialogsItems}>
                {dialogsElements}
            </div>
            {shouldDialogBoxBeOpened !== false && messages !== undefined ? <div className={d.DialogMessages}>
                <div className={messages.length ? d.DialogMessagesItems : d.DialogNoMessages}>
                    {messagesElements}
                </div>
                <AddMessageForm addNewMessage={addNewMessage} />
            </div> : null}
        </div>
    )
}