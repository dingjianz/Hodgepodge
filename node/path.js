const path = require('path');

// __dirname: 路径名称 filename：文件名称
// console.log(__dirname) // C:\Users\dingjian\Desktop\boringTime\node



// 获取路径的最后一部分
// console.log(path.basename(__filename)) // path.js
// console.log(path.basename(__filename, '.js')) // path



// 获取扩展名
// console.log(path.extname(__filename)) // .js



// 路径的格式化处理
// path.format() obj --> string
// path.parse()  string --> obj

// console.log(path.parse(__filename))
// console.log(path.parse(__filename).base) // path.js
/* 
  {
    root: 'C:\\', 文件的根路径
    dir: 'C:\\Users\\dingjian\\Desktop\\boringTime\\node', 文件的全路径
    base: 'path.js', 文件的名全称
    ext: '.js', 扩展名
    name: 'path' 文件名
  }
*/

// const obj = {
//   root: 'C:\\',
//   dir: 'C:\\Users\\dingjian\\Desktop\\boringTime\\node',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path'
// }
// console.log(path.format(obj)) // C:\Users\dingjian\Desktop\boringTime\node\path.js


// 判断是否为绝对路径
// console.log(path.isAbsolute(__dirname)) // true
// console.log(path.isAbsolute(__filename)) // true
// console.log(path.isAbsolute('src/componnet')) // false
// console.log(path.isAbsolute('/src/componnet')) // true



// 拼接路径
// console.log(path.join('/foo', 'bar/asdf', 'quux', '..')) // /foo/bar/asdf
// console.log(path.join('/foo', 'bar/asdf', 'quux', '.')) // /foo/bar/asdf/quux
// console.log(path.join('/foo', 'bar/asdf', '../quux')) // /foo/bar/quux


// 规范化路径
// console.log(path.normalize('///foo/bar//baz/asdf')) // /foo/bar/baz/asdf


// 计算相对路径 path.relative(from, to)
// console.log(path.relative('src/component/utils/', 'src/css/index.scss')) // '../../css/index.scss


// 解析路径
// console.log(path.resolve('src/index.jsx')) // C:\Users\dingjian\Desktop\boringTime\node\src\index.jsx
// console.log(path.resolve('/src/index.jsx')) // C:\src\index.jsx
// console.log(path.resolve('src/index.jsx', '/css/index.scss')) // C:\css\index.scss  第二个路径/为根路径开始，所以忽略第一个路径
// console.log(path.resolve('/src/component', './home/index.jsx')) // C:\src\component\home\index.jsx
// console.log(path.resolve('bin/www', 'static/file/', '../img/gif.png')) // C:\Users\dingjian\Desktop\boringTime\node\bin\www\static\img\gif.png


// 两个特殊属性
// console.log(path.delimiter) // 环境变量分隔符，（windows是; linux是:）
// console.log(path.sep) // 路径分隔符（windows是\ linux是/）

console.log(__dirname.split(path.sep)) // [ 'C:', 'Users', 'dingjian', 'Desktop', 'boringTime', 'node' ]
console.log(process.cwd()) // process.cwd() 方法会返回 Node.js 进程的当前工作目录。