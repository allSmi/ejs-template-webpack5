// https://day.js.org/docs/zh-CN/installation/typescript

import $ from 'jquery'
import '@/main.ts'
// import './index.scss'
import dayjs from 'dayjs'
import toObject from 'dayjs/plugin/toObject'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(toObject)
dayjs.extend(timezone)

// const now = dayjs() // 等同于 dayjs(new Date()) 的调用。

// console.log(now)

// console.log(dayjs().format())
console.log(dayjs().startOf('year').hour(1).format('YYYY-MM-DD HH:mm:ss'))
// console.log(dayjs().startOf('week').format('YYYY-MM-DD'))
const weekSet = [7, 1, 2, 3, 4, 5, 6]

const startOfMonth = dayjs().startOf('month')
console.log(
  '本月第一天',
  startOfMonth.format('YYYY-MM-DD'),
  `是星期${weekSet[startOfMonth.day()]}`
)

const startOfWeek = dayjs().startOf('week').add(1, 'day')
console.log(
  '本周第一天',
  startOfWeek.format('YYYY-MM-DD'),
  `是${startOfWeek.date()}号`
)

// console.log(dayjs().year(), '年')
// console.log(dayjs().month() + 1, '月') // 月份 (一月 0， 十二月 11)
// console.log(dayjs().date(), '日')
// console.log('星期', dayjs().day()) // 星期几 (星期天0，星期六6)

console.log(dayjs().second(30).valueOf())
// => new Date().setSeconds(30)
console.log(dayjs().second(), '秒')
// => new Date().getSeconds()
console.log(dayjs().month(1).format())

console.log('2020-02月有', dayjs('2020-02-25').daysInMonth(), '天') // 获取当前月份包含的天数。

console.log(dayjs('2019-01-25').toObject())

console.log(dayjs().isSame(dayjs()))

console.log(dayjs.tz.guess())
