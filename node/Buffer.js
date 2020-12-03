// 创建buffer实例
// const buf1 = Buffer.alloc(3)
// const buf2 = Buffer.alloc(5)
// const buf3 = Buffer.concat([buf1, buf2])
// console.log(Buffer.byteLength(buf3))
// console.log(buf3.length)


// const buf0 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
// console.log(buf0.toString()) // buffer
// const buf4 = Buffer.from('中国')
// console.log(buf4)
// console.log(buf4.toString())

// 判断是否支持编码格式
// console.log(Buffer.isEncoding('utf8'))
// console.log(Buffer.isEncoding('gbk'))

// 判断是否buffer对象
// const buf5 = Buffer.from('buffer')
// console.log(Buffer.isBuffer(buf5)) // true
// console.log(Buffer.isBuffer(123)) // false

// 拼接buffer
// const buf6 = Buffer.from('Tom')
// const buf7 = Buffer.from('Jerry')
// const buf8 = Buffer.concat([buf6, buf7])
// console.log(buf8.length) // 8
// console.log(buf8.toString()) // TomJerry

// 以上是静态方法
// ----------------------------------
// 以下是静态方法

const buf1 = Buffer.alloc(5)

// write 向buffer对象中写入内容， 返回是write的长度
/* 
  参数(string, offset, length, encoding)
  填入的是字符型，
  offset从哪儿开始填入，默认0， 
  length write的长度，默认buf.length - offset
  encoding 编码方式，默认utf8
  return Number of bytes written
*/
// const len = buf1.write('hello', 2, 2)
// console.log(len)
// console.log(buf1)

// slice 截取buffer中的对象
// const buf3 = Buffer.from('hello')
// const buf4 = buf3.slice(2, 3)
// console.log(buf4.toString())

// toJSON方法不需要显示调用，当JSON.stringify方法调用的时候，会自动调用toJSON方法
const buf0 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
const json = JSON.stringify(buf0)
console.log(json) // {"type":"Buffer","data":[98,117,102,102,101,114]} 