
//Send an customised email
Parse.Cloud.define("sendEmail", function(request, response){
                   var Mailgun = require('mailgun');
                   Mailgun.initialize('ikardz.me', 'key-1abb9ac6b44ecb7982ddf76079fd38fc');
                   Mailgun.sendEmail({
                                     to: request.params.receiver,
                                     from: "feedback@ikardz.me",
                                     subject: request.params.subject,
                                     text: request.params.message
                                     }, {
                                     success: function(httpResponse) {
                                     //Mail was sent
                                     response.success();
                                     },
                                     error: function(httpResponse) {
                                     response.error("Uh oh, something went wrong while sending email to Admin");
                                     }
                                     });
                   });