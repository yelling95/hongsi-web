import React, {useState, useMemo} from 'react'
import classNames from 'classnames'
import {map} from 'lodash-es'
import {TextField} from 'hongsi-ui'
import {useNavigate} from 'react-router-dom'
import {EmailDomainList} from './const'

import './Signup.scss'

function EmailView(props) {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [valid, setValid] = useState(undefined)

  const isDone = useMemo(() => {
    return email !== ''
  }, [email])

  const EmailOptions = useMemo(() => {
    return map(EmailDomainList(), (domain) => ({...domain, label: `${email}@${domain.label}`}))
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
      navigate('/signup/password', {
        state: {
          email,
        },
      })
    }
  }

  return (
    <div className={classNames('signup_step_container', 'long_header')}>
      <div className="desc_wrap">
        <h1>이메일 주소를 알려주세요</h1>
      </div>
      <div className="input_wrap">
        <TextField
          value={email}
          options={EmailOptions}
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

      <div className="fixed_bottom_wrap">
        <button className={classNames(isDone ? 'active' : '')} onClick={() => handleNext()}>
          다음
        </button>
      </div>
    </div>
  )
}

export default EmailView
