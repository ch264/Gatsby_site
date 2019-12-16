const sendmail = require('sendmail');

sendmail({
  from: 'christina.hastenrath@getpostman.com',
  to: 'christina.hastenrath@getpostman.com',
  subject: 'test sendmail',
  html: 'Mail of test sendmail ',
}, function(err, reply) {
  console.log(err && err.stack);
  console.dir(reply);
});

