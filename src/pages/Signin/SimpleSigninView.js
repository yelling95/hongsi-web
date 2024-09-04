import React from 'react'
import Logo from '../../assets/images/logo.png'
import TextLogo from '../../assets/images/logo_text.png'
import {useNavigate} from 'react-router-dom'
import {Button, VendorButton} from 'hongsi-ui'

import './SimpleSigninView.scss'
import classNames from 'classnames'

function SimpleLogin(props) {
  const {type} = props
  const navigate = useNavigate()
  return (
    <div className="simple_signin_container">
      <div className="contents_wrap">
        <div className="logo_wrap">
          <img src={Logo} alt="홍시" />
          <img src={TextLogo} alt="Hongsi" />
        </div>
        <div className="catchphrase">
          어울림엔 나이가 없다!
          <br />잘 익은 우리, 홍시들의 커뮤니티
        </div>
        <div className="button_wrap">
          <Button>이메일로 시작하기</Button>
          <div className={classNames('vendor_wrap', type ? 'type_' + type : 'type_01')}>
            <VendorButton type="kakao" size={type === '01' ? 'lg' : 'sm'} />
            <VendorButton type="naver" size={type === '01' ? 'lg' : 'sm'} />
            <VendorButton type="apple" size={type === '01' ? 'lg' : 'sm'} />
          </div>
        </div>
        <div className="login_wrap">
          <label>
            이미 계정이 있나요?<em onClick={() => navigate('/login')}>{` 로그인`}</em>
          </label>
        </div>
      </div>
      <div className="comments_wrap">
        <label>
          가입을 진행할 경우 <em>서비스 약관</em> 및 <em>개인정보 처리방침</em>에<br />
          동의한 것으로 간주합니다.
        </label>
      </div>
    </div>
  )
}

export default SimpleLogin
