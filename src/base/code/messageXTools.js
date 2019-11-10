var MessageXSend = require('./messageXSend.js');
var messageXSend = new MessageXSend();

function validateSMS(phone) {
  let number = Math.floor(Math.random() * 9000) + 1000;
  messageXSend.add_to(phone);
  messageXSend.set_project('yy6LN3');
  messageXSend.add_var('code', number);
  messageXSend.xsend();
  return number;
}

// validateSMS(15008356350);

// 18782723204
// module.exports 

module.exports = validateSMS