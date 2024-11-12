import React from 'react'
import {className} from 'classnames'
import {BasicHeader, Button} from 'hongsi-ui'
import {useNavigate} from 'react-router-dom'

import './JoinView.scss'

function JoinView(props) {
  const navigate = useNavigate()

  return (
    <div className="group_join_container">
      <BasicHeader title="참여하기" goBack={() => navigate(-1)} />
      <div className="guide_wrap">
        <h1>
          잘 익은 사람들의 커뮤니티 홍시에서
          <br /> 꼭 지켜야하는 약속!
        </h1>
        <ol>
          <li>참여 신청 후 운영자의 승인이 완료되면 모임 참여가 확정 됩니다.</li>
          <li>모임 참여 확정 시 모임 대화방에 초대됩니다.</li>
          <li>모임 대화방은 모임이 종료될 때까지 운영됩니다.</li>
          <li>즐겁고 설레는 모임을 위해 모임 일정을 잘 지켜요!</li>
          <li>즐거운 모임을 위해 서로를 배려하고 존중해요!</li>
        </ol>
      </div>
      <div className="button_wrap">
        <Button
          onClick={() =>
            navigate('/group', {
              state: {
                join: true,
              },
            })
          }>
          참여 신청하기
        </Button>
      </div>
    </div>
  )
}

export default JoinView
