'use strict';


const express = require('express');
const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {fileSize: 52428800}
  }); //req.file.buffer


// api/files
let router = express.Router();


const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const fs = require('fs');



router.post('/', upload.single('photo'),  (req, res) => {
  console.log(req.file);
  console.log(req.body);

  s3.putObject({
    Bucket: 'THOMASNewBucket',
    Key: req.file.originalname,
    Body: req.file.buffer,
    ACL: 'public-read'
  }, (err, data) => {
    if (err) console.log(err, err.stack);
    else {
      console.log()
      res.render('image', {imageName: req.body.filename});
    }
  });
});


module.exports = router;