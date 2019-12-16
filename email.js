const sendmail = require('sendmail')();

sendmail({
  from: 'christina.hastenrath@getpostman.com',
  to: 'christina.hastenrath@getpostman.com',
  subject: 'test sendmail',
  attachments: [
    {
      path: './email.txt'
    }
  ]
}, function(err, reply) {
  console.log("error//////////////////", err && err.stack);
  console.dir("reply /////////////////", reply);
});