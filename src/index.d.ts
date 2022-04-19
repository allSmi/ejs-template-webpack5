declare module '*.jpg' {
  const src: string
  export default src
}

declare const __MODE__: 'development' | 'production'

// 定义window的属性
// declare interface Window {
//   aaa: string
// }
