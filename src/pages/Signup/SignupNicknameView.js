import React, {useState, useMemo} from 'react'
import classNames from 'classnames'
import {TextField, Confirm} from 'hongsi-ui'
import {useNavigate, useLocation} from 'react-router-dom'

import CompleteIcon from '../../assets/images/complete.png'

import './Signup.scss'

const ALREADY_USED_NICKNAME = '잘익은홍시'

function NicknameView({type = '01'}) {
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email
  const password = location.state?.password
  const passwordConfirm = location.state?.passwordConfirm

  const [nickname, setNickname] = useState('')
  const [valid, setValid] = useState(undefined)
  const [showFinMessage, setShowFinMessage] = useState(false)

  const isDone = useMemo(() => {
    return nickname !== ''
  }, [nickname])

  const validation = () => {
    if (nickname === ALREADY_USED_NICKNAME) {
      setValid({
        ...valid,
        nickname: {
          state: 'error',
          errorMessage: '이미 있는 별명 입니다.',
        },
      })
      return false
    }
    return true
  }

  const handleNext = () => {
    const isValid = validation()

    if (isValid) {
      setShowFinMessage(true)
    }
  }

  return (
    <div className={classNames('signup_step_container', 'short_header')}>
      <div className="desc_wrap">
        <h1>별명을 설정해주세요</h1>
        <label>홍시에서 다른 사람에게 보여지는 이름입니다!</label>
      </div>
      <div className="input_wrap">
        <TextField
          value={nickname}
          placeholder="예시) 잘익은 홍시"
          isState={valid?.nickname?.state}
          errorMessage={valid?.nickname?.errorMessage}
          onChange={({value}) => {
            setNickname(value || '')
          }}
        />
      </div>

      {type === '01' && (
        <Confirm isShow={showFinMessage} isShowDimm={true} close={() => {}}>
          <div className="sinup_confirm_01">
            {nickname}님 만나서 반가워요!
            <br />
            홍시에서 즐거운 경험을 쌓아보세요.
          </div>
        </Confirm>
      )}

      {type === '02' && (
        <Confirm isShow={showFinMessage} isShowDimm={true} close={() => {}}>
          <div className="sinup_confirm_02">
            <img src={CompleteIcon} alt="회원가입 완료" width="52px" height="52px" />
            <h2>회원가입 완료</h2>
            <label>
              지금 나와 맞는 사람들과
              <br /> 즐거운 시간을 가져보세요!
            </label>
          </div>
        </Confirm>
      )}

      <div className="fixed_bottom_wrap">
        <button className={classNames(isDone ? 'active' : '')} onClick={() => handleNext()}>
          가입 완료
        </button>
      </div>
    </div>
  )
}

export default NicknameView
