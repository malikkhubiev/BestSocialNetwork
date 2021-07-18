import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getIsAuth } from '../components/common/Selectors/auth-selectors';

export function withAuthRedirect<WCP> (WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent:React.FC<{}> = (props) => {

        let myProps = {...props, asd: 5}

        let isAuth = useSelector(getIsAuth)
        
        if (!isAuth) return <Redirect to='/login' />
        
        return <WrappedComponent {...myProps as unknown as WCP} />
        
    }
    
    return RedirectComponent
}