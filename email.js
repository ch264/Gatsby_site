const sendmail = require('sendmail')();

sendmail({
  from: 'christina.hastenrath@getpostman.com',
  to: 'christina.hastenrath@getpostman.com',
  subject: 'Here are the latest H2 changes',
  attachments: [
    {
      path: './email.txt'
    }
  ]
}, function(err, reply) {
  console.log("error//////////////////", err && err.stack);
  console.dir("reply /////////////////", reply);
});