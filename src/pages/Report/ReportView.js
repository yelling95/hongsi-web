import React, {useState} from 'react'
import classNames from 'classnames'
import {useNavigate, useLocation} from 'react-router-dom'
import {BasicHeader, Button, Snackbar} from 'hongsi-ui'
import {ReportReasonList} from './const'

import './Report.scss'
import {map} from 'lodash-es'

function ReportView(props) {
  const navigate = useNavigate()
  const location = useLocation()

  const [selected, setSelected] = useState(null)
  const [isOpen, setOpen] = useState(false)

  const handleSelect = (reason) => {
    if (reason.id === selected?.id) {
      setSelected(null)
    } else {
      setSelected(reason)
    }
  }

  const handleReport = () => {
    if (!selected) {
      setOpen(true)
    }

    if (location.state?.from) {
      navigate(location.state.from)
    } else {
      navigate(-1)
    }
  }

  return (
    <>
      <div className="report_container">
        <BasicHeader title="신고하기" goBack={() => navigate(location.state.from)} />
        <h1>신고 사유를 선택해주세요</h1>
        <div className="scroll_wrap">
          {map(ReportReasonList, (reason, index) => (
            <div
              key={`reason-${index}`}
              className={classNames('reason', selected?.id === reason.id && 'selected')}
              onClick={() => handleSelect(reason)}>
              {reason.reason}
            </div>
          ))}
        </div>
        <Snackbar
          open={isOpen}
          timeout={2000}
          message="신고 사유를 선택해주세요."
          onTimeout={() => setOpen(false)}
        />
        <div className="button_wrap">
          <Button onClick={() => handleReport()}>신고하기</Button>
        </div>
      </div>
    </>
  )
}

export default ReportView
