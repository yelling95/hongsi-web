import React, {useState} from 'react'
import {BasicHeader, Icon, GatherListItem, Tag, Button} from 'hongsi-ui'
import {useNavigate} from 'react-router-dom'
import {SampleGroupList, TagList} from './const'
import {map} from 'lodash-es'

import './MyGroup.scss'

function MyGroupView(props) {
  const navigate = useNavigate()

  const [tag, setTag] = useState(TagList[0])
  const [groupList, setGroupList] = useState(SampleGroupList)
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="mygroup_container">
      <BasicHeader goBack={() => navigate(-1)} title="내 모임" />
      <div className="scroll_wrap">
        <div className="tag_wrap">
          {map(TagList, (t) => (
            <Tag key={`tag-${t.id}`} selected={tag?.id === t.id} onClick={() => setTag(t)}>
              {t.name}
            </Tag>
          ))}
        </div>
      </div>
      <div className="group_list_wrap">
        {groupList?.length > 0 ? (
          map(groupList, (group) => (
            <div className="group_wrap">
              <GatherListItem
                key={`group-search-${group.id}`}
                selected={selectedItem?.id === group.id}
                onClick={() => setSelectedItem(group)}
                onClickLike={() => {
                  group.like = !group.like
                }}
                {...group}
              />
              <div className="button_wrap">
                <Button>모임 대화방</Button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty_wrap">
            <Icon id="Group" color="var(--grey-60)" />
            <label>참여한 모임이 없습니다.</label>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyGroupView
