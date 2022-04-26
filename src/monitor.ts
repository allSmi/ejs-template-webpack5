// https://webpack.docschina.org/guides/tree-shaking/#root

// webpack.config.js
// mode: 'development'
// optimization: {
//   usedExports: true
// }

// package.json
// "sideEffects": [
//   "./src/monitor.ts"
// ],

function aaa() {
  console.log('asdfadsfadsf')
}

aaa()

export function init() {
  console.log('monitor begin----')
  // 捕获js执行错误和资源加载错误(图片，css)
  window.addEventListener(
    'error',
    (e) => {
      console.log('window.addEventListener', e)
    },
    true
  )
  // 捕获js执行错误
  window.onerror = (message, source, lineno, colno, error) => {
    console.log('window.onerror', message, source, lineno, colno, error)
  }

  window.addEventListener('unhandledrejection', (e) => {
    console.log('unhandledrejection', e)
  })
}
