declare module '*.jpg'{
  const src:string
  export default src
}

// declare const __MODE__: string
declare const __MODE__: 'development' | 'production'

declare interface Constructor {
  new (...arg: any[]): {}
}
