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

// testArr.forEach((item) => {
//   console.log(item)
// })

// 用js编写一个方法，输出字符串中连续最多的字符及次数

var str = 'abbcccccddddddeeeeeee12345ccc'
console.log(str[1])
function getStrMaxCount1(str) {
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
console.log(getStrMaxCount1(str))

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
