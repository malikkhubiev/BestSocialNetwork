import React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import styles from './FormsControlls.module.css';
import {ValidatorsType} from './../../../utils/validators';

export const Input:React.FC<WrappedFieldProps> = ({ input, meta, ...props }) => {
    const hasError:boolean | string = meta.touched && meta.error;
    return (
        <div className={hasError?styles.error:styles.formDiv}>
            <input {...input} {...props} />
            {hasError?<span>{meta.error}</span>:null}
        </div>
    )
}

export const Checkbox:React.FC<WrappedFieldProps> = ({ input, meta, ...props }) => {
    return (
        <div className={styles.formDiv}>
            Remember me?
            <input className={styles.checkbox} type='checkbox' {...input} {...props} />
        </div>
    )
}

export function createField<T extends string>(placeholder: string | undefined, 
                                            name: T,
                                            validate: Array<ValidatorsType>,
                                            component: React.FC<WrappedFieldProps>){
    return (
        <Field placeholder={placeholder} name={name} validate={validate} component={component} />
    )
}