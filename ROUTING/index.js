const express = require('express')
const app = express()
const port = 3000
//import item ki router file
const items = require('./routes/item');
const birds = require('./routes/birds');
//load into application
app.use('/api', items);
app.use('/filler', birds);

//<--/api -> item home page
// --> / api/items -> item post request
// -> /api/items/id -> put/delete request



app.listen(port, () => {
  console.log(`Babbar app listening on port ${port}`)
})