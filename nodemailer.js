var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oduneyebolu004@gmail.com',
    pass: 'Marlians123'
  }
});

var mailOptions = {
  from: 'oduneyebolu004@gmail.com',
  to: 'odubolu27@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});