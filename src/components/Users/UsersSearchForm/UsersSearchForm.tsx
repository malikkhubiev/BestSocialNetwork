import { Field, Form, Formik } from "formik"
import React from "react"
import { FilterType } from "../../../redux/users-reducer"
import style from "./../Users.module.css"

type UsersSearchFormDataType = {
    term: string
    friends: string | boolean | null
}
type PropsType = {
    isAuth: boolean
    filter: FilterType
    setFilter: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

    const submit = (values: UsersSearchFormDataType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }): void => {
        if (values.friends === "null") values.friends = null
        if (values.friends === "true") values.friends = true
        if (values.friends === "false") values.friends = false
        props.setFilter({ term: values.term, friends: values.friends as boolean | null })
    }

    return (
        <Formik
            initialValues={{ term: props.filter.term || "", friends: props.filter.friends }}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form className={style.form}>
                    <Field className={style.input} type="text" name="term" placeholder="Name should have:" />
                    {props.isAuth
                    ?
                    <Field className={style.select} as="select" name="friends">
                        <option value="null">All</option>
                        <option value="true">Only friends</option>
                        <option value="false">Only not friends</option>
                    </Field>
                    :
                    ""
                    }
                    <button className={style.button} type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    )
})