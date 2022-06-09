import React from 'react'
import { useRedux } from '../../hooks/useRedux'
import { _nativeLogin } from '../../redux/actions/auth/login'


const  Login =  () => {
  const { authenticated } = useRedux()
  return (
    <div>index</div>
  )
}

export default Login 