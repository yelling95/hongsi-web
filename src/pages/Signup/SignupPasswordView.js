import React, {useState, useMemo} from 'react'
import classNames from 'classnames'
import {TextField} from 'hongsi-ui'
import {useNavigate, useLocation} from 'react-router-dom'

import './SignupView.scss'

function PasswordView() {
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email

  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [valid, setValid] = useState(undefined)

  const isDone = useMemo(() => {
    return password !== '' && passwordConfirm !== ''
  }, [password, passwordConfirm])

  const validation = () => {
    if (password !== passwordConfirm) {
      setValid({
        ...valid,
        passwordConfirm: {
          state: 'error',
          errorMessage: '비밀번호와 비밀번호 확인 값이 다릅니다.',
        },
      })
      return false
    }
    return true
  }

  const handleNext = () => {
    const isValid = validation()

    if (isValid) {
      navigate('/signup/phone', {
        state: {
          email,
          password,
          passwordConfirm,
        },
      })
    }
  }

  return (
    <div className={classNames('signup_step_container', 'short_header')}>
      <div className="desc_wrap">
        <h1>비밀번호를 입력해 주세요</h1>
        <label>영문,숫자를 포함해 8자 이상이어야 합니다.</label>
      </div>
      <div className="input_wrap">
        <TextField
          type="password"
          value={password}
          placeholder="비밀번호 입력"
          isState={valid?.password?.state}
          errorMessage={valid?.password?.errorMessage}
          onChange={({value}) => {
            setPassword(value || '')
          }}
        />
        <TextField
          type="password"
          value={passwordConfirm}
          placeholder="비밀번호 확인(한번 더 입력)"
          isState={valid?.passwordConfirm?.state}
          errorMessage={valid?.passwordConfirm?.errorMessage}
          onChange={({value}) => {
            setPasswordConfirm(value || '')
          }}
        />
      </div>

      <div className="fixed_bottom_wrap">
        <button className={classNames(isDone ? 'active' : '')} onClick={() => handleNext()}>
          다음
        </button>
      </div>
    </div>
  )
}

export default PasswordView
