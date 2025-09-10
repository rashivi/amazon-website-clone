//at all file can specific routes at all items in store
//ye file saare items specific routes ko store karegi
const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req,res) => {
   res.send("Got a GET Request")
//   res.sendFile('../dummy.html',{root:__dirname});
});
router.post('./items', (req,res) => {
  // res.send("Got a POST Requests");
  res.json({x:1, Y:2, z:3});

})
router.put('/items/:id', (req,res) => {
  res.send("Got a PUT Resquests");

})
router.delete('/items/:id', (req,res) => {
  res.send("Got a DELETE Resquests");
})


module.exports = router