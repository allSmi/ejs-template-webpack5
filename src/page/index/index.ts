import './index.scss'

import '@/main'

import '@/svg/apply.svg'
import '@/svg/warn.svg'

import '@/ts/img'
import '@/js/index'
import { testInterface } from '@/ts/interface'
import '@/ts/async-await'
import '@/ts/enum'
import initError from '@/error-test/index'

// __DEV__ 为 true 时，后面的代码会被treeshaking
// false && 0
__DEV__ && console.log('666999')

// __DEV__ 为 true 时，后面的代码会被treeshaking
// if (false) {}
if (__DEV__) {
  console.log('666999')
}

// 在ts里面定义全局变量
// declare global {
//   let hz: boolean
// }
// hz = true
// console.log(hz)

window.aaa = '111'

initError()

function getLocal(local: string) {
  return import(
    /* webpackChunkName: "language-[request]" */ '@/lang/' + local + '.js'
  )
}

getLocal('zh-CN')

console.log('当前环境为:', __MODE__)

// yield
function* testYield() {
  yield 1
  yield 2
}
const i = testYield()
console.log(i.next())
console.log(i.next())

// promise
const testPromise = new Promise<testInterface>((resolve) => {
  setTimeout(() => {
    resolve({
      a: '111',
      b: 111
    })
  }, 2000)
})
testPromise.then((data) => {
  const a = `${data.a}${data.b}`

  console.log('data', a)
})

const arr = [1, 2, 3]
console.log(arr.includes(1))
