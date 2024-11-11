import React, {useState} from 'react'
import {BasicHeader, Sheet, TextField, TextArea, Checkbox, Button} from 'hongsi-ui'
import {useNavigate} from 'react-router-dom'

import './Cs.scss'

function CsView(props) {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [question, setQuestion] = useState('')
  const [agree, setAgree] = useState(false)

  return (
    <div className="cs_container">
      <BasicHeader goBack={() => navigate(-1)} title="고객센터" />
      <Sheet message="궁금한 점이 있으신가요? <br/>무엇이든 물어보세요!" />
      <div className="sub_message">
        최대한 빨리 확인 후 답변 드리겠습니다.
        <br />
        혹시 답변이 오지 않으면, 스팸 메일함을 확인해 주세요.
      </div>
      <div className="cs_wrap">
        <TextField
          value={email}
          placeholder="이메일을 입력해 주세요"
          label="*답변 받으실 이메일"
          onChange={({id, value}) => setEmail(value)}
        />
        <TextArea
          type="resize"
          hasUnderline
          placeholder="질문을 입력해 주세요"
          label="*질문 내용"
          value={question}
          onKeyup={() => {}}
          onChange={({id, value}) => setQuestion(value)}
        />
      </div>
      <div className="agree_wrap">
        <Checkbox
          id="agree"
          checked={agree}
          desc="문의하신 내용에 대해 답변드리기 위해 이메일정보 제공에 동의해 주시기 바랍니다."
          onChange={(e) => setAgree(e.target.checked)}>
          이메일 정보 제공 동의
        </Checkbox>
      </div>
      <div className="button_wrap">
        <Button>문의하기</Button>
      </div>
    </div>
  )
}

export default CsView
