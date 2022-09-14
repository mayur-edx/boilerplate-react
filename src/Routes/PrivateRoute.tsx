import React from 'react'
import { useRoutes } from 'react-router-dom'
import { PrivateRoutesV6 } from './routing'

const PrivateRoute = () => {
    const renderPrivateRoutes = useRoutes(PrivateRoutesV6)
  return (
    <>{renderPrivateRoutes}</>
  )
}

export default PrivateRoute