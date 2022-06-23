import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useRedux } from '../hooks/useRedux'
export default function NotLoggedInRoute() {
  

    const { authenticated} = useRedux()

    return authenticated ? <Navigate to='/' /> : <Outlet />
}
