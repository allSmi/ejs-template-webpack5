import './index.scss'
import $ from 'jquery'
import '@/main.ts'

import '@/svg/download.svg'

console.log('lowcode html')

const screenHeight = document.documentElement.offsetHeight

const dragTargetContainer = $('.drag-target-container')

dragTargetContainer.css('height', screenHeight)

const dragTarget = $('.drag-target')

dragTarget.on('dragstart', (e) => {
  e.originalEvent?.dataTransfer?.setData(
    'text/plain',
    JSON.stringify({
      id: 2,
      tag: 'div',
      params: {
        width: '100',
        height: '100',
        content: 'xxx'
      }
    })
  )
})

function receiveMessage(event: MessageEvent) {
  const origin = event.origin

  console.log('lowcode', origin, event.data)
}

window.addEventListener('message', receiveMessage, false)

const iframe = $('.lowcode-iframe-container')[0] as HTMLIFrameElement

const iframeWindow = iframe.contentWindow

setTimeout(() => {
  iframeWindow?.postMessage({
    type: 'aaa'
  })
}, 3000)
