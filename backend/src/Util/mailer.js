const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'debele.abinet@gmail.com',
    pass: 'AbinGmail01'
  }
});

const sendMail = (message)=> {
  const mailOptions = {
    from: 'debele.abinet@gmail.com',
    to:'abinet.tafa@gmail.com',
    subject:'New Book created',
    text: message
  };
  transporter.sendMail(mailOptions,(error,info)=> {
    if(error){
      console.log(error);
    }
    else {
      console.log('Email sent' + info.response);
    }
  })
};

module.exports=sendMail;
