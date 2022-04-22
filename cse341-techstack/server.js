 const express = require('express');
 const app = express();
 const port = process.env.PORT;

 app.get('/', (req, res) => {
     res.send("Clara Ogubie")
 })

 app.listen(port, () => {
     console.log(`Runnning on port ${port}`)
 })