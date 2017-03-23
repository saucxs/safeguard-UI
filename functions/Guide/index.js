/**
 * Created by BFD-638 on 2017/3/18.
 */
import React from 'react'
import Center from 'public/Center'
import Markdown from 'public/Markdown'
import html from 'test.md'

export default () => {
  return (
    <Center>
      <Markdown html={html} />
    </Center>
  )
}
