import React, {useState, useMemo} from 'react'
import classNames from 'classnames'
import {TextField, BasicHeader} from 'hongsi-ui'
import {useNavigate, useLocation} from 'react-router-dom'

import './Password.scss'

function ResetPasswordView() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [valid, setValid] = useState(undefined)

  const isDone = useMemo(() => {
    return email !== ''
  }, [email])

  const validation = () => {
    if (email.indexOf('@') < 0) {
      setValid({
        ...valid,
        email: {
          state: 'error',
          errorMessage: '이메일 형식이 올바르지 않습니다.',
        },
      })
      return false
    }
    return true
  }

  const handleNext = () => {
    const isValid = validation()

    if (isValid) {
    }
  }

  return (
    <div className="password_container">
      <BasicHeader title="비밀번호 재설정" goBack={() => navigate(-1)} />
      <div className="reset_password_container">
        <div className="desc_wrap">
          <h1>가입한 이메일을 입력해 주세요</h1>
          <label>이메일로 인증 코드를 보내드려요!</label>
        </div>
        <div className="input_wrap">
          <TextField
            value={email}
            placeholder="hongsi@hongsi.com"
            isState={valid?.email?.state}
            errorMessage={valid?.email?.errorMessage}
            onChange={({value}) => {
              setEmail(value || '')
            }}
          />
        </div>

        <div className="fixed_bottom_wrap">
          <button className={classNames(isDone ? 'active' : '')} onClick={() => handleNext()}>
            인증 메일 받기
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordView
