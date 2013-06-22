var express = require('express'),
    SendGrid = require('sendgrid').SendGrid,
    port = process.env.PORT || 5000;

var app = module.exports = express();
app.use(express.logger());

app.use('/assets', express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/static'));

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.listen(port, function() {
  console.log("Listening on " + port);
});

app.post('/contact', function(req, res) {
	var mailForm = req.body;
    if (!mailForm.email) {
        mailForm.email = "fromsome@email.com";
    }
    if (!mailForm.name) {
        mailForm.name = "Website";
    }
    if (!mailForm.subject) {
        mailForm.subject = "Default";
    }
    if (!mailForm.message_body) {
        mailForm.message_body = "Default";
    }
    var sendgrid = new SendGrid(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
    sendgrid.send({
    	to: 'tosome@email.com',
    	toname: 'To you',
    	from: mailForm.email,
    	fromname: mailForm.name,
	    subject: mailForm.subject,
	    text: mailForm.message_body
    }, function(success, response) {
    	if(!success) {
    	  console.log('Failure to send email');
		  res.send({ success: false });
    	} else {
    	  console.log('Email successfully sent');
   	      res.send({ success: true });
    	}
    });
});
