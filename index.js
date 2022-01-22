const nodemailer = require('nodemailer');

const sendEmail = async () => {
  return new Promise( async ( resolve, reject ) => {

    // Create a transport object with Gmail SMTP server
    // This will trigger Gmail SMTP server to send email
    // Need to turn on Less Secure App option from Google Account Security option
    let gmailTransportSMTP = {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: "--**YourGmailAccount**--@gmail.com",
        pass: "--**YourGmailAccountPassword**--"
      }
    }

    let transporter = nodemailer.createTransport( gmailTransportSMTP );
    let mailData = {
      from: "**From***@gmail.com",
      to: "**To***@gmail.com",
      subject: "SMTP mail",
      text: "Hello Ji :)",
      html: "<b>Hello Ji </b><i>:)</i>"
    };
    let info = await transporter.sendMail( mailData )

    if ( info.messageId ){
      resolve( info )
    } else {
      console.log( info )
      reject( "Failed to send email. Please check the log and find the cause.")
    }

  })
}

setTimeout( async () => {
  sendEmail().then( resp => {
    console.log(resp)
  }).catch( err => {
    console.log( err )
  })
}, 1000 )

