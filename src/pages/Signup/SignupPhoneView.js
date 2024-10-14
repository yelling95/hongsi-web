import React, {useState, useMemo} from 'react'
import classNames from 'classnames'
import {TextField, Snackbar, Icon, Confirm} from 'hongsi-ui'
import {useNavigate, useLocation} from 'react-router-dom'

import './Signup.scss'

const STEP = {
  FILL: 1,
  REQ: 2,
  COFM: 3,
}

const TEST_CERT_NUM = '12345678'
const ALREADY_USED_PHONE = '01012345678'

function PhoneView() {
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email
  const password = location.state?.password
  const passwordConfirm = location.state?.passwordConfirm

  const [phone, setPhone] = useState('')
  const [certNum, setCertNum] = useState('')
  const [valid, setValid] = useState(undefined)
  const [step, setStep] = useState(STEP.FILL)
  const [showSentMessage, setShowSentMessage] = useState(false)
  const [showAlreadyExistMessage, setShowAlreadyExistMessage] = useState(false)

  const isFillDone = useMemo(() => {
    return phone !== ''
  }, [phone])

  const isReqDone = useMemo(() => {
    return phone !== ''
  }, [phone])

  const validation = () => {
    if (step === STEP.FILL) {
      // TODO:: 전화번호 밸리데이션
    } else if (step === STEP.REQ) {
      if (certNum.length !== 8) {
        setValid({
          ...valid,
          certNum: {
            state: 'error',
            errorMessage: '인증 번호는 8자리입니다.',
          },
        })
        return false
      }
      if (certNum !== TEST_CERT_NUM) {
        setValid({
          ...valid,
          certNum: {
            state: 'error',
            errorMessage: '인증 번호를 다시 확인해주세요.',
          },
        })
        return false
      }
      if (phone === ALREADY_USED_PHONE) {
        setShowAlreadyExistMessage(true)
        return false
      }
    }
    return true
  }

  const handleNext = (nextStep) => {
    if (nextStep === STEP.COFM) {
      const isValid = validation()
      if (isValid) {
        navigate('/signup/nickname', {
          state: {
            email,
            password,
            passwordConfirm,
            phone,
          },
        })
      }
    } else {
      if (certNum.length >= 8) {
        const isValid = validation()
        if (!isValid) return
      }

      // TODO:: 인증번호 요청
      setStep(nextStep)
      setShowSentMessage(true)
    }
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
        {step === STEP.REQ && (
          <div className="cert_wrap">
            <TextField
              value={certNum}
              placeholder="인증 번호를 입력해 주세요(8자리)"
              isState={valid?.certNum?.state}
              errorMessage={valid?.certNum?.errorMessage}
              onChange={({value}) => {
                setCertNum(value || '')
              }}
            />
            <div className="help_wrap">
              <Icon id="Warning" width={10} height={10} />
              <label>인증 번호가 오지 않나요?</label>
            </div>
          </div>
        )}
      </div>

      {showSentMessage && (
        <Snackbar
          timeout={2000}
          message="인증 문자가 발송되었습니다."
          onTimeout={() => {
            setTimeout(() => {
              setShowSentMessage(false)
            }, [1000])
          }}
        />
      )}

      <Confirm
        isShow={showAlreadyExistMessage}
        isShowDimm={true}
        buttonList={[
          {
            type: 'primary',
            label: '로그인',
            click: () => {
              navigate('/signin')
              const dimmElement = document.getElementById('modalDimm')
              if (dimmElement) {
                dimmElement.style.display = 'none'
                document.body.style.overflow = 'auto'
                dimmElement.dataset.layer = '-1'
              }
            },
          },
          {
            type: 'secondary',
            label: '다시 입력',
            click: () => {
              setShowAlreadyExistMessage(false)
            },
          },
        ]}
        close={() => setShowAlreadyExistMessage(false)}>
        <div>
          이미 가입된 휴대폰 번호입니다. <br />
          로그인 후 이용해 주세요.
        </div>
      </Confirm>

      <div className="fixed_bottom_wrap">
        {step === STEP.FILL ? (
          <button
            className={classNames(isFillDone ? 'active' : '')}
            onClick={() => handleNext(STEP.REQ)}>
            전화번호 인증하기
          </button>
        ) : certNum.length < 8 ? (
          <button
            className={classNames(isReqDone ? 'active' : '')}
            onClick={() => handleNext(STEP.REQ)}>
            인증 번호 다시 받기
          </button>
        ) : (
          <button className="active" onClick={() => handleNext(STEP.COFM)}>
            인증 번호 확인
          </button>
        )}
      </div>
    </div>
  )
}

export default PhoneView
