import React, {useState} from 'react'
import className from 'classnames'
import {BasicHeader} from 'hongsi-ui'
import {Outlet} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import './SignupView.scss'

function Signup(props) {
  const navigate = useNavigate()
  return (
    <div className="signup_container">
      <BasicHeader title="회원가입" goBack={() => navigate(-1)} />
      <Outlet />
    </div>
  )
}

export default Signup
