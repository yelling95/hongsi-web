import React, {useState} from 'react'
import {Sheet, Tab, Tag, SortHeader, Dropdown, GatherListItem} from 'hongsi-ui'
import {TabList, TagList} from './structure'
import {SampleFeedOrderList} from './const'
import {map} from 'lodash-es'
import './Group.scss'

function GroupView(props) {
  const tabList = TabList()
  const tagList = TagList()
  const orderList = SampleFeedOrderList()

  const [selectedTab, setSelectedTab] = useState(tabList[0])
  const [selectedTag, setSelectedTag] = useState(tagList[0])
  const [orderOptions, setOrderOptions] = useState(orderList)
  const [order, setOrder] = useState(orderOptions[0])
  const [isOpenOrder, setOpenOrder] = useState(false)

  return (
    <div className="group_container">
      <Sheet message="텍스트는 <br/>최대 두 줄까지 적어주세요" />
      <Tab data={tabList} selected={selectedTab?.id} onClick={setSelectedTab} />
      <div className="tag_wrap">
        {map(tagList, (tag) => (
          <Tag
            key={tag.id}
            selected={selectedTag?.id === tag.id}
            onClick={() => setSelectedTag(tag)}>
            {tag.label}
          </Tag>
        ))}
      </div>
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
      <div className="scroll_wrap">
        <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
        <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
        <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
        <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
        <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
        <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
        <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
      </div>
    </div>
  )
}

export default GroupView
