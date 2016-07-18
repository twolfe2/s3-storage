'use strict';

const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const fs = require('fs');
// s3.createBucket( {
//   Bucket: 'THOMASNewBucket'
// }, (err, data) => {
//   if(err) console.log(err, err.stack);
//   else console.log(data);
// });

fs.readFile('./javascript.png', (err, data) => {
  if (err) throw err;
  s3.putObject({
    Bucket: 'THOMASNewBucket',
    Key: 'javascript.png',
    Body: data,
    ACL: 'public-read'
  }, (err, data) => {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });

});
