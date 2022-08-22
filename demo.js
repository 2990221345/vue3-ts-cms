let arr = [
  { id: 1, name: 1 },
  { id: 2, name: 2 },
  { id: 2, name: 2 },
  { id: 2, name: 2 },
  { id: 3, name: 3 },
  { id: 4, name: 4 },
  { id: 4, name: 4 },
  { id: 4, name: 4 },
  { id: 4, name: 4 },
  { id: 5, name: 5 },
  { id: 6, name: 6 },
  { id: 7, name: 7 }
]

let obj = {}
// 数组对象去重
const result = arr.reduce((item, next) => {
  if (!obj[next.id]) {
    item.push(next)
    obj[next.id] = true
  }
  return item
}, [])
// console.log(result)

const testArr = [
  { a: 1, b: 2, c: 3 },
  { b: 2, c: 3, a: 1 },
  { d: 1, e: 2 },
  { d: 1, e: 2 },
  { f: 1 }
]
// 数组处理

// console.log(testArr)

var str = 'abbcccccddddddeeeeeee12345ccc'
console.log(str[1])
// 计算字符串中出现最多的次数
const newstr1 = str.split('')
const result23 = newstr1.reduce((item, next) => {
  if (item[next]) {
    item[next]++
  } else {
    item[next] = 1
  }
  return item
}, {})
let keyStr = ''
let max = 0
for (let key in result23) {
  if (result23[key] >= max) {
    max = result23[key]
    keyStr = key
  }
}
// 用js编写一个方法，输出字符串中连续最多的字符及次数

console.log('result23', keyStr, max)
function getStrMaxCount (str) {
  var resultStr = ''
  var resultCount = 0
  var i = 0
  var j = 0
  while (i < str.length) {
    let strStart = str[i]
    console.log(strStart)
    // 不相等则说明 strStart 不再连续了
    if (strStart != str[++j]) {
      let count = j - i
      console.log(`字符：${strStart}出现了：${count}次！`)
      if (count > resultCount) {
        resultCount = count
        resultStr = strStart
      }
      i = j
    }
  }
  return {
    count: resultCount,
    str: resultStr
  }
}
console.log(getStrMaxCount(str))

// str = str.split('')
// let newStr = {}
// str.forEach((item) => {
//   if (newStr[item]) {
//     newStr[item]++
//   } else {
//     newStr[item] = 1
//   }
// })
// console.log(newStr)

// 实现对象数组的去重
// const removal = [
//   { a: 1, b: 2, c: 3 },
//   { b: 2, c: 3, a: 1 },
//   { d: 1, e: 2 },
//   { d: 1, e: 2 },
//   { f: 1 }
// ]
// let newRemoval = []
// const newRemoval1 = removal.reduce((item, next) => {
//   console.log(item, next)
// }, [])

// 实现防抖函数
const debounce = (func, delay) => {
  let timer
  // 这里返回的函数是每次用户实际调用的防抖函数
  // 如果已经设定过定时器了就清空上一次的定时器
  // 开始一个新的定时器，延迟执行用户传入的方法
  return function (...args) {
    if (timer) clearTimeout
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
debounce(() => {
  console.log(12)
}, 100)
// 实现节流函数
const throttle = (func, wait = 50) => {
  let lastTime = 0
  return function (...args) {
    // 当前时间
    let now = +new Date()
    // 将当前时间和上一次执行函数时间对比
    // 如果差值大于设置的等待时间就执行函数
    if (now - lastTime > wait) {
      lastTime = now
      func.apply(this, args)
    }
  }
}
console.log('节流')
throttle(() => {
  console.log(1)
}, 200)
