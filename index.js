const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // Đây là dòng chữ chúng ta sẽ sửa để kiểm tra CI/CD hoạt động chưa
  res.send('Hello World!') 
})

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})