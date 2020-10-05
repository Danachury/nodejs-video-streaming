const express = require('express')
const router = express.Router()
const fs = require('fs')

/* GET video streaming listing. */
router.get('/', (req, res) => {
   res.writeHead(200, { 'Content-Type': 'video/mp4' })
   fs
      // ToDo: Use dynamic video path
      .createReadStream('/home/denilson/Videos/VID_20200608_181116.mp4')
      .pipe(res)
})

module.exports = router
