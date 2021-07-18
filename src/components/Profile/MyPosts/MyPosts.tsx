import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../../../redux/profile-reducer'
import { getIsMainUser, getPosts } from '../../common/Selectors/profile-selectors'
import p from './MyPosts.module.css'
import { Post } from './Post/Post'

type FormDataType = {
    postText: string
}

type myAddPost = ({postText}:{postText:string}) => void

const AddNewPostForm: React.FC<{myAddPost: myAddPost}> = (props) => {
    const submit = (values: FormDataType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }): void => {
        props.myAddPost({postText: values.postText})
        setSubmitting(false)
    }
    return (
        <Formik
            initialValues={{ postText: "" }}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="postText" placeholder="tell the World about something..." />
                    <button type="submit" disabled={isSubmitting}>
                        Add post
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export const MyPosts: React.FC<{}> = (props) => {
    let posts = [...useSelector(getPosts)]
    let isMainUser = useSelector(getIsMainUser)

    const dispatch = useDispatch()

    const myAddPost = ({postText} : {postText: string}) => {
        dispatch(addPost(postText))
    }

    let postsElements = posts.reverse().map(p => <Post key={p.id} likes={p.likes} message={p.message} />)

    return (
        <div className={p.postsArea}>
            {isMainUser ? <div className={p.postsMenu}>
                <p className={p.postsMenuHeader}>My posts</p>
                <AddNewPostForm myAddPost={myAddPost} />
            </div> : null}
            <div className={p.posts}>
                {postsElements.length ? postsElements : <p className={p.postsHeader}>This user has not posted anything</p>}
            </div>
        </div>
    )
}