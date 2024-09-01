import React, {useState, useMemo} from 'react'
import className from 'classnames'
import {useNavigate} from 'react-router-dom'
import {map} from 'lodash-es'
import {BasicHeader, TextField} from 'hongsi-ui'
import {EmailDomainList} from './structure'

import './LoginView.scss'

function Login(props) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [valid, setValid] = useState(undefined)

  const EmailOptions = useMemo(() => {
    return map(EmailDomainList(), (domain) => ({...domain, label: `${email}@${domain.label}`}))
  }, [email])

  const isDone = useMemo(() => {
    return email !== '' && password !== ''
  }, [email, password])

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

  const handleLogin = () => {
    const isValid = validation()

    if (isValid) {
      navigate('/')
    }
  }

  return (
    <div className="login_container">
      <BasicHeader title="로그인" />
      <div className="login_input_wrap">
        <div>
          <TextField
            value={email}
            options={EmailOptions}
            label="이메일"
            placeholder="이메일을 입력해주세요."
            isState={valid?.email?.state}
            errorMessage={valid?.email?.errorMessage}
            onChange={({value}) => {
              setEmail(value || '')
            }}
            onSelectOption={(opt) => {
              setEmail(opt.label)
            }}
          />
        </div>
        <div>
          <TextField
            type="password"
            value={password}
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            isState={valid?.password?.state}
            errorMessage={valid?.password?.errorMessage}
            onChange={({value}) => {
              setPassword(value || '')
            }}
          />
        </div>
      </div>
      <div className="button_wrap">
        <button onClick={() => navigate('/signup')}>회원가입</button>
        <button onClick={() => navigate('/password/reset')}>비밀번호 재설정</button>
      </div>
      <div className="fixed_bottom_wrap">
        <button className={className(isDone ? 'active' : '')} onClick={() => handleLogin()}>
          로그인
        </button>
      </div>
    </div>
  )
}

export default Login
