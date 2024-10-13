import React, {useState, useMemo} from 'react'
import classNames from 'classnames'
import {map} from 'lodash-es'
import {TextField} from 'hongsi-ui'
import {useNavigate, useLocation} from 'react-router-dom'
import {EmailDomainList} from './const'

import './SignupView.scss'

const STEP = {
  FILL: 1,
  REQ: 2,
  REREQ: 3,
  COFM: 4,
}

function PhoneView() {
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email
  const password = location.state?.password
  const passwordConfirm = location.state?.passwordConfirm

  const [phone, setPhone] = useState('')
  const [valid, setValid] = useState(undefined)
  const [step, setStep] = useState(STEP.FILL)

  const isDone = useMemo(() => {
    return phone !== ''
  }, [phone])

  const validation = () => {
    return true
  }

  const handleNext = (nextStep) => {
    if (nextStep === STEP.REQ) {
    }
    // const isValid = validation()
    // if (isValid) {
    //   navigate('/signup/nickname', {
    //     state: {
    //       email,
    //       password,
    //       passwordConfirm,
    //       phone,
    //     },
    //   })
    // }
  }

  return (
    <div className={classNames('signup_step_container', 'short_header')}>
      <div className="desc_wrap">
        <h1>전화번호를 인증해 주세요</h1>
        <label>홍시에서 즐거운 커뮤니티 활동을 위해 인증이 필요해요!</label>
      </div>
      <div className="input_wrap">
        <TextField
          value={phone}
          placeholder="01012345678"
          isState={valid?.phone?.state}
          errorMessage={valid?.phone?.errorMessage}
          onChange={({value}) => {
            setPhone(value || '')
          }}
        />
      </div>

      <div className="fixed_bottom_wrap">
        {step === STEP.FILL && (
          <button
            className={classNames(isDone ? 'active' : '')}
            onClick={() => handleNext(STEP.REQ)}>
            전화번호 인증하기
          </button>
        )}
        {step === STEP.REQ && (
          <button
            className={classNames(isDone ? 'active' : '')}
            onClick={() => handleNext(STEP.REREQ)}>
            인증 번호 다시 받기
          </button>
        )}
      </div>
    </div>
  )
}

export default PhoneView
