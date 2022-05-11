import $ from 'jquery'
import '@/main.ts'
import './index.scss'

import { isInView, renderScreen, initPostMessage } from './util'
import type { elListType } from './util'

initPostMessage()

const elList: elListType = []

const lowcodeIframePageEl = $('.lowcode-iframe-page')

const screenEl = $('.screen')
const screenContainerEl = $('.screen-container')
const tipPlaceholderEl = $('.tip-placeholder')

lowcodeIframePageEl.on('dragover', (e) => {
  e.originalEvent?.preventDefault()

  const isInViewRes = isInView(screenContainerEl[0], {
    x: e.pageX || 0,
    y: e.pageY || 0
  })

  if (isInViewRes) {
    tipPlaceholderEl.show()
  } else {
    tipPlaceholderEl.hide()
  }
})

screenContainerEl.on('dragenter', (e) => {
  // console.log('dragenter', e.target)
})

screenContainerEl.on('dragleave', (e) => {
  // console.log('dragleave', e.target)
})

screenContainerEl.on('drop', (e) => {
  const data = e.originalEvent?.dataTransfer?.getData('text/plain')

  // console.log(data)

  tipPlaceholderEl.hide()

  data && elList.push(JSON.parse(data))

  renderScreen(screenEl, elList)
})

// lowcodeIframePageEl.on('mousemove', (e) => {
//   console.log('mousemove')
//   // console.log(
//   //   e.clientX,
//   //   e.clientY,
//   //   e.pageX,
//   //   e.pageY,
//   //   e.screenX,
//   //   e.screenY,
//   //   e.offsetX,
//   //   e.offsetY
//   // )
// })
