import $ from 'jquery'

interface elListItemIF {
  id: number
  tag: string
  params: elListItemParamsIF
}

interface elListItemParamsIF {
  content?: string
  [key: string]: any
}

export type elListType = elListItemIF[]

export function isInView(
  screenEl: HTMLElement,
  position: {
    x: number
    y: number
  }
) {
  const left = screenEl.offsetLeft
  const top = screenEl.offsetTop
  const right = left + screenEl.offsetWidth
  const bottom = top + screenEl.offsetHeight
  const x = position.x
  const y = position.y
  const diff = 5

  const isInX = x > left + diff && x < right - diff
  const isInY = y > top + diff && y < bottom - diff

  // console.log(left, top, right, bottom, x, y, isInX, isInY)

  return isInX && isInY
}

export function renderScreen(screen: JQuery<HTMLElement>, elList: elListType) {
  screen.html('')
  // $(`<div>${data}</div>`).insertBefore('.tip-placeholder')
  let html = ''
  elList.forEach((item) => {
    html += `<${item.tag}>${item.params.content}</${item.tag}>`
  })

  screen.html(html)
}

export function initPostMessage() {
  function receiveMessage(event: MessageEvent) {
    const origin = event.origin
    const source = event.source

    console.log('lowcodeIframe', origin, event.data)
    // console.log(source)
    if (event.data.type === 'aaa') {
      source?.postMessage({
        type: 'bbb'
      })
    }
  }

  window.addEventListener('message', receiveMessage, false)
}
