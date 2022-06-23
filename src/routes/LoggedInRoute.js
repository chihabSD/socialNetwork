import React from 'react'
import { Outlet } from 'react-router-dom'
import { useRedux } from '../hooks/useRedux'
import Login from '../pages/login/index'
export default function LoggedInRoute() {
  

    const {account, authenticated} = useRedux()

    return authenticated ? <Outlet /> : <Login />
}
