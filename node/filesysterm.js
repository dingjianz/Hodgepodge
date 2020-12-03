const fs = require('fs')

fs.stat('./1.txt', (err, stat) => {
  if (err) return console.log(err)
  console.log(stat)

})