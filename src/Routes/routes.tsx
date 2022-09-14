import React, { useState} from 'react'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'

const RoutingComponent = () => {
    // eslint-disable-next-line 
    const [Login,setLogin] = useState(true)
    return (
        <>
            {
                Login ? <PrivateRoute /> : <PublicRoute />
            }
        </>
    )
}

export default RoutingComponent