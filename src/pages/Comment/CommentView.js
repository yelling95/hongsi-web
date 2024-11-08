import React, {useState, useMemo, useRef, useEffect} from 'react'
import classNames from 'classnames'
import {BasicHeader, Icon, Comment, CommentListItem, MoreOption} from 'hongsi-ui'
import {useNavigate} from 'react-router-dom'
import {CommentFormat, MoreOptList} from './structure'
import {map} from 'lodash-es'

import './Comment.scss'

const HeaderHeight = 47

function CommentView(props) {
  const navigate = useNavigate()
  const commentsRef = useRef(null)

  const [comments, setComments] = useState([])
  const [value, setValue] = useState('')
  const [height, setHeight] = useState(HeaderHeight + 70)
  const [moreOptions, setMoreOptions] = useState(MoreOptList())
  const [isOpenMore, setOpenMore] = useState(false)

  const handleSave = () => {
    const temp = {
      ...CommentFormat,
      message: value,
    }
    setComments([temp, ...comments])
    setValue('')
  }

  const handleHeight = () => {
    if (value.length > 0 && commentsRef.current) {
      const inputHeight = commentsRef.current.clientHeight
      setHeight(HeaderHeight + inputHeight)
    }
  }

  const handleClickMore = (comment, index) => {
    setOpenMore(true)
  }

  const Comments = useMemo(() => {
    if (comments.length === 0) {
      return (
        <div className="empty_wrap">
          <Icon id="ChatEmpty" color="var(--grey-60)" />
          <label>댓글을 남겨주세요</label>
        </div>
      )
    }
    return (
      <>
        {map(comments, (c, i) => (
          <CommentListItem key={`comment-${i}`} {...c} onClickMore={() => handleClickMore(c, i)} />
        ))}
      </>
    )
  }, [comments])

  useEffect(() => {
    handleHeight()
  }, [value])

  return (
    <div
      className="comment_container"
      style={isOpenMore ? {position: 'initial'} : {position: 'absolute'}}>
      <BasicHeader title="댓글" goBack={() => navigate(-1)} />
      <div className="comments_wrap" style={{height: `calc(100% - ${height}px)`}}>
        {Comments}
      </div>
      <div className="input_wrap">
        <Comment
          ref={commentsRef}
          value={value}
          onSave={handleSave}
          onChange={({value}) => setValue(value || '')}
          onKeyup={(e) => {
            if (e.code === 'Enter') {
              handleHeight()
            }
          }}
        />
      </div>
      <MoreOption
        id="more"
        isShow={isOpenMore}
        isShowDimm={true}
        close={() => setOpenMore(false)}
        options={map(moreOptions, (o) => ({
          ...o,
          click: () => {
            alert(o.id, o.url)
            setOpenMore(false)
          },
        }))}
      />
    </div>
  )
}
export default CommentView
