import axios from 'axios'

export default function () {
  setTimeout(() => {
    Promise.reject(new Error('promise error'))
  }, 3000)

  // setTimeout(() => {
  //   axios.get('./sdfs')
  // }, 3000)
  // ---------
  // setTimeout(() => {
  //   fetch('./lsjf').then((res) => {
  //     console.log(res)
  //   })
  // }, 3000)
  // ---------
  // setTimeout(() => {
  //   const xhr = new XMLHttpRequest()
  //   xhr.open('GET', './sdfs', true)
  //   xhr.send()
  // }, 3000)
  // ---------
  // setTimeout(() => {
  //   throw new Error('sss')
  // }, 3000)
  // ---------
  // const b = 5
  // setTimeout(() => {
  //   console.log((b as unknown as any[]).includes(1))
  // }, 3000)
}
