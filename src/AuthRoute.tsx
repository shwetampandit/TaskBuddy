import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface IAuthRouteProps {
    children: React.ReactNode;
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('authorized')
                setLoading(false);
                console.log('user', user)
                console.log('auth', auth)
            } else {
                console.log('unauthorized');
                setLoading(false);
                navigate('/login')
                console.log('user', user)
                console.log('auth', auth)
            }
        });
        return () => unsubscribe();
    }, [auth, navigate]);

    if (loading) return <p></p>;

    return <div>{ children }</div>;

}

export default AuthRoute