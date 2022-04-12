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
// -----------------
import './common/css/global.scss'
import $ from 'jquery'
import img1 from './imgs/1.jpg'
import img2 from './imgs/2.jpg'

import Greeter from './ts/decorator'

let greeter = new Greeter("world")
console.log(greeter.newProperty);

let a = 1111111


console.log(a);

console.log('img1', img1);
console.log('img2', img2);

$('#img').attr({
  src: img2
})


console.log(__MODE__);

let arr = [1,2,3]
console.log(arr.includes(1));

class A {
  a: number
  constructor(){
    this.a = 1
  }
}

let b = new A()
console.log(b.a);


function * testYield() {
  yield 1;
  yield 2;
}

let i = testYield()
console.log(i.next());
console.log(i.next());

let testPromise = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve(1)
  }, 2000);
})

testPromise.then(data=>{
  console.log('data',data);
})



