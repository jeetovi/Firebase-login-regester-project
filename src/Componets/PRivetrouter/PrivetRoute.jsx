import React, { useContext } from 'react';
import { AuthContex } from '../UseContex/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user ,lodding} = useContext(AuthContex);
    // lodding ar jonno []
    if (lodding){
        return <progress className='progress w-56'></progress>
    }
    // Order dakanor jonno
    if(user){
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>
    return (
        <div>
            <h1>This is a order</h1>
            
        </div>
    );
};

export default PrivetRoute;