import React from 'react'
import { useRoutes } from 'react-router-dom'
import { PublicRoutesV6 } from './routing'

const PublicRoute = () => {
    const renderPublicRoutes = useRoutes(PublicRoutesV6)
  return (
    <>{renderPublicRoutes}</>
  )
}

export default PublicRoute