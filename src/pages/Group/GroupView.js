import React, {useState, useEffect} from 'react'
import {
  Sheet,
  Tab,
  Tag,
  SortHeader,
  Dropdown,
  GatherListItem,
  Button,
  MoreOption,
  Confirm,
  Icon,
} from 'hongsi-ui'
import {TabList, TagList, MoreOptList} from './structure'
import {SampleFeedOrderList, SampleGroupList} from './const'
import {map, range, take, takeRight} from 'lodash-es'
import {useNavigate, useLocation} from 'react-router-dom'
import './Group.scss'

function GroupView(props) {
  const navigate = useNavigate()
  const location = useLocation()
  const tabList = TabList()
  const orderList = SampleFeedOrderList()

  const [tagList, setTagList] = useState(TagList[tabList[0].id])
  const [selectedTab, setSelectedTab] = useState(tabList[0])
  const [selectedTag, setSelectedTag] = useState(tagList[0])
  const [orderOptions, setOrderOptions] = useState(orderList)
  const [order, setOrder] = useState(orderOptions[0])
  const [isOpenOrder, setOpenOrder] = useState(false)
  const [moreOptions, setMoreOptions] = useState(MoreOptList())
  const [isOpenMore, setOpenMore] = useState(false)
  const [groupList, setGroupList] = useState(SampleGroupList)
  const [focusGroup, setFocusGroup] = useState(null)
  const [isShowJoinCancel, setShowJoinCancel] = useState(false)
  const [isShowJoin, setShowJoin] = useState(false)

  const updateGroupLikeStatus = (group, index) => {
    const prex = take(groupList, index)
    const post = takeRight(groupList, groupList.length - prex.length - 1)
    const mid = [
      {
        ...group,
        like: !group.like,
      },
    ]
    setGroupList([...prex, ...mid, ...post])
  }

  const updateGroupDisabled = (group, index) => {
    const prex = take(groupList, index)
    const post = takeRight(groupList, groupList.length - prex.length - 1)
    const mid = [
      {
        ...group,
        disabled: true,
      },
    ]
    setGroupList([...prex, ...mid, ...post])
  }

  const setGroup = (group, index) => {
    setOpenMore(true)
    setFocusGroup({
      index,
      group,
    })
  }

  useEffect(() => {
    if (selectedTab) {
      const tempTags = TagList[selectedTab.id]
      setTagList(tempTags)
      setSelectedTag(tempTags[0])
    }
  }, [selectedTab])

  useEffect(() => {
    if (selectedTab?.id === 'my' && selectedTag?.id === 'LIKE') {
      setGroupList([])
    } else {
      setGroupList(SampleGroupList)
    }

    if (selectedTab?.id === 'my' && selectedTag?.id === 'STANDBY') {
      setMoreOptions(MoreOptList('STANDBY'))
    }
  }, [selectedTab, selectedTag])

  useEffect(() => {
    if (location.state?.join) {
      setShowJoin(true)
    }
  }, [location])

  return (
    <div className="group_container">
      <Sheet message="텍스트는 <br/>최대 두 줄까지 적어주세요" />
      <Tab data={tabList} selected={selectedTab?.id} onClick={setSelectedTab} />
      <div className="tag_scroll_wrap">
        <div className="tag_wrap">
          {map(tagList, (tag) => (
            <Tag
              key={`tag-${tag.id}`}
              selected={selectedTag?.id === tag.id}
              onClick={() => setSelectedTag(tag)}>
              {tag.label}
            </Tag>
          ))}
        </div>
      </div>

      {selectedTab?.id === 'category' && (
        <>
          <SortHeader order={order?.label} onClickOrder={() => setOpenOrder(true)} />
          <Dropdown
            id="order"
            isShow={isOpenOrder}
            isShowDimm={true}
            selected={order?.id}
            close={() => setOpenOrder(false)}
            options={map(orderOptions, (o) => ({
              ...o,
              click: () => {
                alert(o.id)
              },
            }))}
          />
        </>
      )}
      {selectedTag?.id === 'STANDBY' && (
        <div className="alarm_wrap">
          <div className="message">
            <Icon id="Warning" color="#D64C00" fill width={17} height={17} viewBox="0 0 17 17" />
            <label>운영자 확인 후 모임에 참여 됩니다</label>
          </div>
        </div>
      )}
      <div className="scroll_wrap">
        {(!groupList || groupList.length === 0) && (
          <div className="empty_wrap">
            <div className="message">
              {selectedTag?.label} 모임이 없습니다.
              <br />
              즐겁고 설레는 모임에 참여해보세요!
            </div>
            <div className="btn_move">주제별 모임 알아보기</div>
          </div>
        )}
        {map(groupList, (group, index) => {
          return (
            <div key={`group-${index}`} className="group_wrap">
              <GatherListItem
                size="lg"
                onClick={() => {}}
                onClickLike={() => updateGroupLikeStatus(group, index)}
                onClickMore={() => setGroup(group, index)}
                {...group}
              />
              {selectedTag.id === 'OPERATE' && (
                <div className="group_button_wrap">
                  <Button
                    onClick={() =>
                      navigate('/chat/1', {
                        state: {
                          group: true,
                        },
                      })
                    }>
                    모임 대화방
                  </Button>
                </div>
              )}
              {selectedTag.id === 'JOINED' && (
                <div className="group_button_wrap">
                  <Button>운영자 1:1대화방</Button>
                  <Button type="secondary" onClick={() => setShowJoinCancel(true)}>
                    참여 신청 취소
                  </Button>
                </div>
              )}
              {selectedTag.id === 'STANDBY' && (
                <div className="group_button_wrap">
                  <Button>운영자 1:1대화방</Button>
                  <Button type="secondary" onClick={() => setShowJoinCancel(true)}>
                    신청 이력 삭제
                  </Button>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <MoreOption
        id="more"
        isShow={isOpenMore}
        isShowDimm={true}
        close={() => setOpenMore(false)}
        options={map(moreOptions, (o) => ({
          ...o,
          click: () => {
            setOpenMore(false)
            if (o.id === 'done' && focusGroup) {
              updateGroupDisabled(focusGroup.group, focusGroup.index)
            }
          },
        }))}
      />
      <Confirm
        isShow={isShowJoinCancel}
        isShowDimm={true}
        close={() => setShowJoinCancel(false)}
        buttonList={[
          {
            type: 'primary',
            label: '신청 취소',
            click: () => {
              setShowJoinCancel(false)
            },
          },
          {
            type: 'secondary',
            label: '아니요',
            click: () => {
              setShowJoinCancel(false)
            },
          },
        ]}>
        <div>모임 참여를 취소 하시나요?</div>
      </Confirm>
      <Confirm
        isShow={isShowJoin}
        isShowDimm={true}
        close={() => {
          setShowJoin(false)
          navigate('/group', {replace: true, state: {join: false}})
        }}>
        <div>
          참여 신청 되었습니다.
          <br />
          승인이 완료되면 참여가 확정됩니다.
        </div>
      </Confirm>
    </div>
  )
}

export default GroupView
