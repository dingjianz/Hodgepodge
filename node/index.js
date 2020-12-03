const templateContent = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>hello word</h1>
    </body>
  </html>
`

const initData = {
  fileName: '我是node创建的文件夹',
  list: [
    {name: 'img', type: 'dir'},
    {name: 'css', type: 'dir'},
    {name: 'js', type: 'dir'},
    {name: 'index.html', type: 'file'},
  ]
}

const path = require('path');
const fs = require('fs');

const filePath = 'C:/Users/dingjian/Desktop/boringTime/node/'

// 创建项目根路径
fs.mkdir(path.join(filePath, initData.fileName), (err) => {
  if (err) {
    console.log(err)
    throw err;
  };
  initData.list.forEach(item => {
    if (item.type === 'dir') {
      // 创建子目录
      fs.mkdirSync(path.join(filePath, initData.fileName, item.name))
    } else if (item.type === 'file') {
      // 创建文件并写入内容
      fs.writeFileSync(path.join(filePath, initData.fileName, item.name), templateContent);
    }
  })
})