// -----------------
// 记录1: import这一行，解决了保存后浏览器刷新不显示模版里面图片的问题，
// 不知道为什么，用生产模式打包后，由于在js中没有使用这个ejs，
// 会被treeshaking，不会影响打包大小
// 产生原因 webpack-dev-server模式下配置了 output.clean: true

// import '../template/index.template.ejs'

// 记录2: 找到原因了，由于在webpack.config.js中配置了output.clean: true,
// 导致每次变异都会先删除上一次的变异结果，如果js中没有依赖这个ejs文件，
// 将导致既删除了上次的编译结果，新的编译结果中有没有重新编译，所有会导致图片404，
// 解决方案就是在webpack-dev-server模式下去掉 output.clean: true
// ----------------
import './common/css/index.scss'
import './ts/img'

import './js/index'
import Greeter from './ts/decorator'
import { testInterface } from './ts/interface'
import './ts/async-await'
import './ts/enum'
import './ts/namespace'

console.log('当前环境为:', __MODE__)

// ./ts/decorator
const greeter = new Greeter('world')
console.log(greeter.newProperty)

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
