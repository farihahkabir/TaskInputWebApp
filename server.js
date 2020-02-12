//require our dependencies
const nodemailer = require('nodemailer')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

//use body parser
app.use(bodyParser.urlencoded({extended: true}));
 
//setting up route for app
var router = require('./routes/routes.js');
app.use('/',router);

// Set public/static folder:
app.use(express.static(__dirname + '/public'));

//start server
app.listen(port, function(){
    console.log('server is working');
});

// POST route from contact form
app.post('/', (req, res) => {
  // Instantiate the SMTP server
  let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'nadahkabir@gmail.com',
        pass: 'saltedcaramel1/4/97'
      }
    });
  
    // Specify what the email will look like
    let mailOpts = {
      from: 'nadahkabir@gmail.com', // This is ignored by Gmail
      to: 'nadahkabir@gmail.com',
      subject: 'New message from daily report',
      text: 'help'
    };
  
    // Attempt to send the email
    transporter.sendMail(mailOpts, (error, response) => {
      if (error) {
        console.log('error') // Show a page indicating failure
      }
      else {
        console.log('email sent') // Show a page indicating success
      }
    })
  })