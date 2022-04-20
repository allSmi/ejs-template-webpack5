declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.scss' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: {
    id: string
    width: string
    height: string
    viewBox: string
    url: string
  }
  export default src
}

declare const __MODE__: 'development' | 'production'

// 定义window的属性
// declare interface Window {
//   aaa: string
// }
