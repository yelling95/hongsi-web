import React from 'react'
import classNames from 'classnames'
import {useNavigate} from 'react-router-dom'
import {BasicHeader, VendorButton} from 'hongsi-ui'
import {Vendor} from './const'

import './SimpleSigninExistView.scss'

function ExistView(props) {
  const {vendor} = props
  const navigate = useNavigate()
  const vendorInfo = Vendor[vendor]
  return (
    <div className="signin_exist_container">
      <BasicHeader title="회원가입" goBack={() => navigate(-1)} />
      <div className="contents_wrap">
        <div className="comments_wrap">
          <label className="email">abc@gmail.com</label>
          <label className="comments">
            위 아이디로 가입된 계정이 있습니다. <br />
            아래 버튼을 눌러 기존 회원으로서
            <br />
            {`${vendorInfo.name}`} 로그인을 사용하세요.
          </label>
        </div>
        <div className="button_wrap">
          <VendorButton type={vendor}>{`${vendorInfo.name} 계정 연동하기`}</VendorButton>
        </div>
        <div className="sub_button_wrap">
          <button onClick={() => navigate('/signup')}>신규회원으로 시작하기</button>
        </div>
      </div>
    </div>
  )
}

export default ExistView
